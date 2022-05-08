const mongoose = require('mongoose');

const book = new mongoose.Schema({
   "sectionId" : { type: mongoose.Schema.Types.ObjectId, ref: 'section'},
   "name": {type:String, required: true},
   "body": {type: String, required: true},
   "authors":  [{ type: mongoose.Schema.Types.ObjectId, ref: 'author' }]
})

module.exports = mongoose.model("book",book);