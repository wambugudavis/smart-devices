'use strict'

const Manufacturer = use('App/Models/Manufacturer')

class ManufacturerController {
  async index() {
    return await Manufacturer.all();
  }
}

module.exports = ManufacturerController
