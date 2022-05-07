
const mongoose = require('mongoose');

const user = new mongoose.Schema({
    "firstName": { type: String, required: true, maxlength: 30, minlength : 3 },
    "lastName": { type: String, maxlength: 30, minlength : 3 },
    "age": { type: Number, required: true },
    "email": { type: String, required: true },
    "profileImages" : [{type: String}],
    "timestamps": {type : String}
});

module.exports = mongoose.model('user', user);