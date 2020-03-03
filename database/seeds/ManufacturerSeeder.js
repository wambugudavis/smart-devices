'use strict'

/*
|--------------------------------------------------------------------------
| ManufacturerSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
// const Factory = use('Factory')
const Database = use('Database')

class ManufacturerSeeder {
  async run() {
    const now = new Date()
    await Database.table('manufacturers').insert([
      {
        created_at: now,
        updated_at: now,
        name: 'Muthaiga Industrials'
      },
      {
        created_at: now,
        updated_at: now,
        name: 'Other'
      }
    ])
  }
}

module.exports = ManufacturerSeeder
