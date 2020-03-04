'use strict'

const {test, trait, beforeEach, before} = use('Test/Suite')('Device');
trait('Test/ApiClient');
trait('DatabaseTransactions');

const Device = use('App/Models/Device');
const Factory = use('Factory');

before(async () => {
  const manufacturer = await Factory.model('App/Models/Manufacturer').create();
});

beforeEach(async () => {
  const devices = await Device.truncate();
});

test('can add new devices', async ({client}) => {
  const response = await client.post('/api/smart-devices').send({
    manufacturer_id: 1,
    description: 'This is a sample description'
  }).end();

  response.assertStatus(200)
  const device = await Device.firstOrFail()
  response.assertJSON(device.toJSON())
});

test('can only new devices with existing manufacturer ids', async ({client}) => {
  const response = await client.post('/api/smart-devices').send({
    manufacturer_id: 2,
    description: 'This is a sample description 2'
  }).end();

  response.assertStatus(500)
});

test('can not add new device without description or manufacturer id', async ({client}) => {
  let response = await client.post('/api/smart-devices').send({
    manufacturer_id: 1
  }).end();
  response.assertStatus(400)

  response = await client.post('/api/smart-devices').send({
    description: 'Test description'
  }).end();

  // console.log(response.error);
  response.assertStatus(400)
});

test('can fetch device by id', async ({client}) => {
  const device = await Factory.model('App/Models/Device').create();
  const response = await client.get(`/api/smart-devices/${device.id}`).end();
  response.assertStatus(200);
  response.assertJSON(device.toJSON())
});

test('can only fetch devices which exist', async ({client}) => {
  const response = await client.get('/api/smart-devices/2').end();
  response.assertStatus(404);
});

test('can fetch all created devices', async ({client}) => {
  const device = await Factory.model('App/Models/Device').create();
  const response = await client.get('/api/smart-devices').end();
  response.assertStatus(200);
  const addedDevice = await Device
    .query()
    .where('id', device.id)
    .with('manufacturer')
    .fetch();
  response.assertJSON(addedDevice.toJSON())
});

test('can delete a device', async ({assert, client}) => {
  const device = await Factory.model('App/Models/Device').create();
  const response = await client.delete(`/api/smart-devices/${device.id}`).send().end();
  response.assertStatus(204);// successful delete
  assert.equal(await Device.getCount(), 0)
});

test('can update a device', async ({assert, client}) => {
  const device = await Factory.model('App/Models/Device').create();
  const data = {
    manufacturer_id: 1,
    description: 'Updated description'
  };
  const response = await client.put(`/api/smart-devices/${device.id}`).send(data).end();
  response.assertStatus(204); // successful update

  const updatedDevice = await Device.find(device.id)
  assert.equal(updatedDevice.manufacturer_id, data.manufacturer_id)
  assert.equal(updatedDevice.description, data.description)
});

test('can only update a device with an existing manufacturer id', async ({client}) => {
  const device = await Factory.model('App/Models/Device').create();
  const data = {
    manufacturer_id: 2,
    description: 'Updated description'
  };
  const response = await client.put(`/api/smart-devices/${device.id}`).send(data).end();
  response.assertStatus(500);
});

test('can not update device without description or manufacturer id', async ({client}) => {
  const device = await Factory.model('App/Models/Device').create();
  let response = await client.put(`/api/smart-devices/${device.id}`).send({
    manufacturer_id: 1
  }).end();
  response.assertStatus(400)

  response = await client.put(`/api/smart-devices/${device.id}`).send({
    description: 'Test description'
  }).end();
  response.assertStatus(400)
});
