const mongoose = require('mongoose');

const masterAccount = new mongoose.Schema({
  "userId": { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  "branchId" : { type: mongoose.Schema.Types.ObjectId, ref: 'branch'},
  "balance" :  {type :String, required: true},
  "createdAt": {type:Date, required:true},
  "updatedAt": {type:Date, required:true},
  "relationshipManager" : {type: String},
})

module.exports = mongoose.model('masterAccount',masterAccount);