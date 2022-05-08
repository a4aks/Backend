
const mongoose = require('mongoose');

const user = new mongoose.Schema({
    "firstname": { type: String, required: true},
    "lastname": {type:String, required: true}
})