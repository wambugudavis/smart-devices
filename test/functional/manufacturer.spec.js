'use strict'

const {test, trait, before} = use('Test/Suite')('Manufacturer');
trait('Test/ApiClient');
trait('DatabaseTransactions');

const Manufacturer = use('App/Models/Manufacturer');
const Factory = use('Factory');

before(async () => {
  const manufacturers = await Factory.model('App/Models/Manufacturer').createMany(3);
});

test('can fetch all existing manufacturers', async ({client}) => {
  const response = await client.get('/api/manufacturers').end();
  const manufacturers = await Manufacturer.all();
  response.assertStatus(200);
  response.assertJSON(manufacturers.toJSON())
});
