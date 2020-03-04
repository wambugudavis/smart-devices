'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DevicesSchema extends Schema {
  up() {
    this.create('devices', (table) => {
      table.engine('InnoDB')
      table.increments()
      table.timestamps()
      table.integer('manufacturer_id').unsigned().notNullable()
      table.text('description', 'longtext').notNullable()
    })
  }

  down() {
    this.drop('devices')
  }
}

module.exports = DevicesSchema
