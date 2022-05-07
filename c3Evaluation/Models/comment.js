
const mongoose = require('mongoose');

const comment = new mongoose.Schema({
    "bookId": { type: mongoose.Schema.Types.ObjectId, ref: 'book' },
    "body": {type:String, required: true},
    "timestamps": { type: String}
});

module.exports = mongoose.model('comment',comment);