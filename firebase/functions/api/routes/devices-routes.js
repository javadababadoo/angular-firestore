'use strict';
module.exports = function(app) {
  var deviceList = require('../controllers/devices-controller');

  app.route('/device')
  .get(deviceList.list_all_devices)
  .post(deviceList.add_device);

  app.route('/device/:deviceId')
  .get(deviceList.read_device)
  .put(deviceList.update_device);

};