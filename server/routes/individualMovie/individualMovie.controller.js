const movies = require('../../../movies.json');
const helpers = require('../../helpers');

const controller = module.exports = {
  getIndividualMovie: (req, res) => {
    const { id } = req.params;
    const movieID = id - 1;
    const amountOfMovies = movies.movies.length;
    if (movieID >= 0 && movieID > amountOfMovies) {
      console.log("oh no")
      // make a new object without same reference
      const targetMovie = JSON.parse(JSON.stringify(movies.movies[movieID]));
      let targetMovieComments = targetMovie.comments;

      const formatCommentsDate = targetMovieComments.map((comment, index) => {
        const getDate = helpers.formatDate(parseInt(comment.dateCreated));
        comment.dateCreated = getDate;
        return comment;
      })
      res.send(targetMovie);
    } else {
      res.status(404).send({ "error": "No movie found" })
    }
  },
};
