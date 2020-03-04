'use strict'

const {test, trait, beforeEach} = use('Test/Suite')('Device');
trait('Test/ApiClient');
trait('DatabaseTransactions');

const Device = use('App/Models/Device');
const Factory = use('Factory');

beforeEach(async () => {
  // executed before each test inside a given suite
  const devices = await Device.truncate();
});

test('can add new devices', async ({client}) => {
  const response = await client.post('/api/smart-devices').send({
    manufacturer_id: 1,
    description: 'This is a sample description'
  }).end();

  // console.log(response.error);
  response.assertStatus(200)
  const device = await Device.firstOrFail()
  response.assertJSON(device.toJSON())
});

test('can delete a device', async ({assert, client}) => {
  const device = await Factory.model('App/Models/Device').create();
  const response = await client.delete(`/api/smart-devices/${device.id}`).send().end();
  response.assertStatus(204);
  assert.equal(await Device.getCount(), 0)
});
