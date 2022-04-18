
const express = require('express');
const app = express();

function logger(req,res,next){
    console.log(`calling ${req.method} to ${req.url}`);
    next();
}

function checkPermisson(param){
    return function(req,res,next){
       if(param === "author"){
           req.permission = "true";
        next()
       }
       else if(param === "librarian"){
        req.permission = "true";
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
    const name = `{ route: ${request.url}}`
    response.send(`${name}`);
})

app.get('/libraries' , (request,response,next) =>{
    const name = `{ route: ${request.url}, permission: ${request.permission} }`
    response.send(`${name}`);
})

app.get('/authors', (request,response,next) =>{

  const name = `{ route: ${request.url}, permission: ${request.permission} }`
   response.send(`${name}`);
})

module.exports = app;