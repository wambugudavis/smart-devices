'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ManufacturersSchema extends Schema {
  up () {
    this.create('manufacturers', (table) => {
      table.increments('manufacturer_id')
      table.timestamps()
      table.string('name', 80).notNullable()
    })
  }

  down () {
    this.drop('manufacturers')
  }
}

module.exports = ManufacturersSchema
