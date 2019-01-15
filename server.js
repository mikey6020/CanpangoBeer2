const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const beers = require('./routes/api/beer');

app.use(bodyParser.json());

app.use('/beers', beers);

