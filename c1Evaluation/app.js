
const express = require('express');
const app = express();

function logger(req,res,next){
    console.log(`calling ${req.method} to ${req.url}`);
    next();
}

function checkPermisson(param){
    return function(req,res,next){
       if(param === "author"){
       next()
       }else if(param === "librarian"){
       next()
       }
       else{
        callback(new Error("Origin not allowed"))
       }
    }
}

app.use(logger);
app.use("/libraries", checkPermisson("librarian"));
app.use("/authors", checkPermisson("author"));

app.get('/books',(request,response,next) =>{
    response.send("Books");
})

app.get('/libraries' , (request,response,next) =>{
    response.send("Liabries");
})

app.get('/authors', (request,response,next) =>{
    response.send("Authors");
})

module.exports = app;