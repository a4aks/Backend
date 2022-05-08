const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userController = require('../Controllers/user');

app.use(bodyParser.json([]));

app.post('/addSection', userController.createSection);
app.post('/addbook', userController.createbook);

module.exports = app;