const express = require('express');
const app = express();
const dotenv = require('dotenv');
const PORT = process.env.PORT || 8080;

dotenv.config();

app.get('/', (req, res) => res.send('Hello world'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

