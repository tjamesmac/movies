const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 8080;
const helpers = require('./helpers');

const healthCheck = require('./routes/healthCheck/healthCheck.route');
const individualMovie = require('./routes/individualMovie/individualMovie.route');
const movies = require('./routes/movies/movies.route');
const report = require('./routes/report/report.route');

app.use(healthCheck)
app.use(report)
app.use(individualMovie)
app.use(movies)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

