const express = require('express');
const controller = require('./movies.controller');

const router = express.Router();

router
  .route('/movies')
  .get(controller.getMovies);

module.exports = router;