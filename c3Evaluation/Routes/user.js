const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const userController = require('../Controllers/userInfo');

app.use(bodyParser.json([]));

// app.post('/user', userController.createUser);


module.exports = app;