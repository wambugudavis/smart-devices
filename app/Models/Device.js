'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Device extends Model {
  static get hidden () {
    return ['created_at', 'manufacturer_id']
  }

  manufacturer() {
    return this.belongsTo('App/Models/Manufacturer')
  }
}

module.exports = Device
