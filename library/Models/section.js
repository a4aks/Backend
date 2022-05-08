
const mongoose = require('mongoose');

const section= new mongoose.Schema({
    "name": {type: String, required: true},
    "books": [{ type: mongoose.Schema.Types.ObjectId, ref: 'book' }]
})

module.exports = mongoose.model('section', section)