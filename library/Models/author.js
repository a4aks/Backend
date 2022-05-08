const mongoose = require('mongoose');

const author = new mongoose.Schema({
    "firstname": {type: String, required: true},
    "lastname": {type: String, required: true},
    "books":  [{ type: mongoose.Schema.Types.ObjectId, ref: 'book' }]
})

module.exports = mongoose.model('author', author)