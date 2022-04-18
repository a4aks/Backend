
const express = require('express');
const app = express();

function logger(req,res,next){
    console.log(`calling ${req.method} to ${req.url}`);
    next();
}

function checkPermisson(param){
    return function(req,res,next){
       if(param === "author"){
        callback(null, true);
       }else if(param === "librarian"){
        callback(null, true);
       }
       else{
        callback(new Error("Origin not allowed"))
       }
    }
}

app.use(logger);
app.use(checkPermisson);

app.get('/books',(request,response,next) =>{
    response.send("Hello");
})

app.get('/libraries',[checkPermisson("librarian")] , (request,response,next) =>{
    response.send("Liabries");
})

app.get('/authors', [checkPermisson("author")], (request,response,next) =>{
    response.send("Authors");
})

module.exports = app;