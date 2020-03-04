'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DevicesSchema extends Schema {
  up () {
    this.table('devices', (table) => {
      // alter table
      table.foreign('manufacturer_id').references('id').inTable('manufacturers')
    })
  }

  down () {
    this.table('devices', (table) => {
      // reverse alternations
    })
  }
}

module.exports = DevicesSchema
