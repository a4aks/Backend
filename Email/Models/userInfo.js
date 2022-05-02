const mongoose = require('mongoose');

const userInfo = new mongoose.Schema({
    "firstName" : {type: String, required: true},
    "lastName": {type: String, required: true},
    "email": {type: String, required: true}
})

module.exports = mongoose.model('userInfo', userInfo)