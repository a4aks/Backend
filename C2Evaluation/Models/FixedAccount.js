const mongoose = require('mongoose');

const fixedAccount = new mongoose.Schema({
    "account_No": {type:Number, required:true, unique},
    "balance": {type:Number, required:true},
    "interestRate":  {type:Number, required:true},
    "startDate":  {type:Date, required:true},
    "maturityDate": {type:Date, required:true},
    "createdAt": {type:Date, required:true},
    "updatedAt": {type:Date, required:true}
})

module.exports = mongoose.model('fixedAccount',fixedAccount);