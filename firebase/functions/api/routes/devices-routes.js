'use strict';
module.exports = function(app) {
  var deviceController = require('../controllers/devices-controller');

  var sessionController = require('../controllers/session-controller');

  app.route('/device')
  .get(deviceController.list_all_devices)
  .post(deviceController.add_device);

  app.route('/device/:deviceId')
  .get(deviceController.read_device)
  .put(deviceController.update_device);

  app.route('/session')
  .post(sessionController.login);

};