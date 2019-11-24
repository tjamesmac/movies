const moviesJSON = require('../../../movies.json');
const helpers = require('../../helpers');

const controller = module.exports = {
  getMovies: (req, res) => {
    const movies = JSON.parse(JSON.stringify(moviesJSON.movies));
    const formatDates = movies.map((item, index) => {
      const comments = item.comments.map((comment, index) => {
        const getDate = helpers.formatDate(parseInt(comment.dateCreated));
        comment.dateCreated = getDate;
        return comment;
      });
    })
    res.send(movies);
  },
};
