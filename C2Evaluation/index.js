const http = require('http');
const app = require('./Routes/user');
const connectToDB = require('./DBConnection/MangoDB');

const PORT = 9008;
http.createServer(app).listen(PORT, () =>{
    new connectToDB();
    console.log(`server is running on port no ${PORT}`);
})