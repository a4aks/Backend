
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userController = require('../Controllers/user');


app.use(bodyParser.json([]));

app.post('/user', userController.createUser);
app.post('/branch', userController.createBranch);
app.post('/savingAccount/:userId', userController.createSavingAccount);



module.exports = app;