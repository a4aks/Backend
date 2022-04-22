const express = require('express');
const app = require('../c1Evaluation/app');
const api = express();

function allBooks(req,res,next){
    console.log("Fetching all books");
    next();
}

function singleBook(req,res,next){
    req.name= req.params.name;
    next()
}
api.use(allBooks);
app.use(singleBook);

api.get('/books',[allBooks], (request,response,next) =>{
       response.send("Books");
})

api.get('/books/:name',[singleBook], (request,response,next) =>{
    response.json({bookName : request.name});
})

module.exports = api;