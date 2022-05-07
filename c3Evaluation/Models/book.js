
const mongoose = require('mongoose');

const book = new mongoose.Schema({
    "userId": { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    "likes": { type: Number, min:[0] },
    "coverImage": { type: String},
    "content": { type: String, required: true},
    "timestamps": { type: String},
    "comments": [{ type: mongoose.Schema.Types.ObjectId, ref: 'comment' }]
});

module.exports = mongoose.model('book', book);