const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userController = require('../Controllers/user');

app.use(bodyParser.json([]));

app.post('/addUser', userController.createUser);
app.post('/addBook', userController.createBook);


module.exports = app;