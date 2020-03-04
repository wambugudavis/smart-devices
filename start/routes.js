'use strict';

const Route = use('Route');

Route.resource('api/smart-devices', 'DeviceController').only(['store', 'destroy']);
