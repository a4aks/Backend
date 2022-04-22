
const http = require('http');
const api = require('./api');

const PORT = 9008;
http.createServer(api).listen(PORT, () =>{
    console.log(`server is running on port no ${PORT}`);
})