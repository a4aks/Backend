const mongoose = require('mongoose');

const branch = new mongoose.Schema ({
    "name": {type :String, required: true},
    "address": {type:String, required: true},
    "IFSC":{type :String, required: true},
    "MICR":{type: Number, required: true},
    "createdAt": {type:Date, required:true},
    "updatedAt": {type:Date, required:true},
})

module.exports = mongoose.model('branch',branch);