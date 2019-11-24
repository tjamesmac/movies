const express = require('express');
const controller = require('./individualMovie.controller');

const router = express.Router();

router
  .route('/movies/:id')
  .get(controller.getIndividualMovie);

module.exports = router;