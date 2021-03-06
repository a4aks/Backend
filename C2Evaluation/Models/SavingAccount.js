const mongoose = require('mongoose');

const savingAccount = new mongoose.Schema({
    "account_id" : { type: mongoose.Schema.Types.ObjectId, ref: 'masterAccount'},
    "account_No": {type:Number, required:true},
    "balance": {type:Number, required:true},
    "interestRate":  {type:Number, required:true},
    "createdAt": {type:Date, required:true},
    "updatedAt": {type:Date, required:true}
})

module.exports = mongoose.model('savingAccount',savingAccount);