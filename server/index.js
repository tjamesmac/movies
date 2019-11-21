const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 8080;
const movies = require('../movies.json');
const helpers = require('./helpers');

app.get('/', (req, res) => res.send('Hello world'));

app.get('/healthcheck', (req, res) => {
  const status = { "status": "UP" };
  res.send(status)
})

app.get('/movies', (req, res) => {
  res.send(movies);
})
app.get('/movies/report', (req, res) => {
  const report = helpers.createReport(movies.movies);
  res.send(report);
})
app.get('/movies/:id', (req, res) => {
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
    res.send({ "error": "No movie found"})
  }
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

