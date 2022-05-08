const mongoose = require('mongoose');

class Mongo {
    constructor() {
        this.createMongoConnection();
    }

    createMongoConnection() {
        mongoose.connect(`mongodb+srv://masaistudent:masaipassword@cluster0.i0oz4.mongodb.net/library?retryWrites=true&w=majority`)


        mongoose.connection.once('open', () => {
            console.log("MongoDB is connected");
        })
        mongoose.connection.on('error', () => {
            console.log("Error occured in mongoDB connection");
        })
    }
}
module.exports = Mongo;