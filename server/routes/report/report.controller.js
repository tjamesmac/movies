const moviesJSON = require('../../../movies.json');
const helpers = require('../../helpers');

const controller = module.exports = {
  getReport: (req, res) => {
    const movies = JSON.parse(JSON.stringify(moviesJSON.movies));
    const report = helpers.createReport(movies);
    res.send(report);
  },
};
