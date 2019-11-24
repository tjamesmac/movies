const movies = require('../../../movies.json');
const helpers = require('../../helpers');

const controller = module.exports = {
  getIndividualMovie: (req, res) => {
    const { id } = req.params;
    const movieID = id - 1;
    if (movieID >= 0) {
      const targetMovie = movies.movies[movieID];
      let targetMovieComments = movies.movies[0].comments;
      const formatCommentsDate = targetMovieComments.map((comment, index) => {
        comment.dateCreated = helpers.formatDate(parseInt(comment.dateCreated));
        return comment;
      })
      res.send(targetMovie);
    } else {
      res.status(404).send({ "error": "No movie found" })
    }
  },
};
