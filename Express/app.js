const express = require('express');
const app = express();
const cors = require('cors');

app.use((request,response, next) =>{
    console.log("It's a Global Middle Ware");
    console.log(request.url);
    next();
})
let whiteListOrigin = ['http://localhost:9008']

let corsOption = {
    origin: (origin, callback) =>{
        if(whiteListOrigin.indexOf(origin) !== -1){
            callback(null, true);
        }else{
            callback(new Error("Origin not allowed"))
        }
    }
}

app.use(cors(corsOption));

app.get('/user',
(request, response, next) =>{
  console.log("we are in middleware one");
  next();
},

(request, response, next) =>{
    console.log("we are in user route");
    // response.send("Request processed successfully");
    response.status(500).json({error: "Some error occurred"})
})

module.exports = app;