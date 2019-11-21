const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => res.send('Hello world'));

app.get('/healthcheck', (req, res) => {
  const status = { "status": "UP" };
  res.send(status)
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

