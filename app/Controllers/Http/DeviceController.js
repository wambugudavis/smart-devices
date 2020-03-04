'use strict'
const Device = use('App/Models/Device')

class DeviceController {
  async store({request, response}) {
    const device = await Device.create(request.only(['manufacturer_id', 'description']));
    return response.json(device)
  }

  async destroy({params}) {
    const device = await Device.findOrFail(params.id)
    await device.delete()
  }
}

module.exports = DeviceController
