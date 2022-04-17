const express = require('express');
const api = express();

api.get('/',(request,response,next) =>{
    response.send("Hello");
})

api.get('/books', (request,response, next) =>{
    response.json(
        {book1: "Java Book", book2: "Python Book",book3: "JavaScript Book",book4: "HTML Book"},
    )
})

module.exports = api;