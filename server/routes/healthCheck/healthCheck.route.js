const express = require('express');
const controller = require('./healthCheck.controller');

const router = express.Router();

router
  .route('/healthcheck')
  .get(controller.getHealthCheck);

module.exports = router;