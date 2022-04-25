const mongoose = require('mongoose');

const masterAccount = new mongoose.Schema({
  "balance" :  {type :String, required: true},
  "createdAt": {type:Date, required:true},
  "updatedAt": {type:Date, required:true}
})

module.exports = mongoose.model('masterAccount',masterAccount);