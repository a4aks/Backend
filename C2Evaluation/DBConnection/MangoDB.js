const mongoose = require('mongoose');

class mongo {
    constructor(){
        this.createMongoConnection();
    }

    createMongoConnection(){
        mongoose.connect(`mongodb://ashish:ashish123@localhost:27017/Banking`)

        mongoose.connection.once('open', () =>{
            console.log("MongoDB is connected");
        })

        mongoose.connection.on('error', () =>{
            console.log("Error occurred in connection");
        })
    }
}
module.exports = mongo;