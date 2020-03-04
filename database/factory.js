'use strict'
const Factory = use('Factory')

Factory.blueprint('App/Models/Device', (faker) => {
  return {
    manufacturer_id: 1,
    description: faker.paragraph(),
  }
});

Factory.blueprint('App/Models/Manufacturer', (faker) => {
  return {
    name: faker.word({length: 3}),
  }
});
