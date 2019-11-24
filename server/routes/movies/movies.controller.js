const movies = require('../../../movies.json');

const controller = module.exports = {
  getMovies: (req, res) => {
    res.send(movies);
  },
};
