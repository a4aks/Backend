const mongoose = require('mongoose');

const savingAccount = new mongoose.Schema({
    "account_No": {type:Number, required:true, unique},
    "balance": {type:Number, required:true},
    "interestRate":  {type:Number, required:true},
    "createdAt": {type:Date, required:true},
    "updatedAt": {type:Date, required:true}
})

module.exports = mongoose.model('savingAccount',savingAccount);