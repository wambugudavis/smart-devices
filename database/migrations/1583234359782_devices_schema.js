'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DevicesSchema extends Schema {
  up () {
    this.create('devices', (table) => {
      table.increments()
      table.timestamps()
      table.integer('manufacturer_id').unsigned().references('manufacturer_id').inTable('manufacturers')
      table.text('description', 'longtext').notNullable()
    })
  }

  down () {
    this.drop('devices')
  }
}

module.exports = DevicesSchema
