'use strict'
const Factory = use('Factory')

Factory.blueprint('App/Models/Device', (faker) => {
  return {
    manufacturer_id: 1,
    description: faker.paragraph(),
  }
});
