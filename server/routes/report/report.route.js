const express = require('express');
const controller = require('./report.controller');

const router = express.Router();

router
  .route('/movies/report')
  .get(controller.getReport);

module.exports = router;