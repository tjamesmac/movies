const movies = require('../../../movies.json');
const helpers = require('../../helpers');

const controller = module.exports = {
  getReport: (req, res) => {
    const report = helpers.createReport(movies.movies);
    res.send(report);
  },
};
