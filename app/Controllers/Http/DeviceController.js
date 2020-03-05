'use strict'
const Device = use('App/Models/Device')

class DeviceController {
  async store({request, response}) {
    if (!request.input('manufacturer_id') || !request.input('description')) {
      return response.badRequest('Missing parameter')
    }

    const device = await Device.create(request.only(['manufacturer_id', 'description']));
    return response.json(device)
  }

  async destroy({params}) {
    const device = await Device.findOrFail(params.id)
    await device.delete()
  }

  async show({params}) {
    return await Device.findOrFail(params.id);
  }

  async update({params, request, response}) {
    if (!request.input('manufacturer_id') || !request.input('description')) {
      return response.badRequest('Missing parameter')
    }

    const device = await Device.findOrFail(params.id);
    device.merge(request.only(['manufacturer_id', 'description']));
    await device.save();
  }

  async index() {
    const devices = await Device
      .query()
      .with('manufacturer')
      .fetch();

    return devices.toJSON()
  }
}

module.exports = DeviceController
