'use strict';

const Route = use('Route');

Route.resource('api/smart-devices', 'DeviceController').apiOnly();
Route.resource('api/manufacturers', 'ManufacturerController').only(['index']);
