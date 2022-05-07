const http = require('http')
const app = require('./Routes/booksSystem')
// const app = require('./Routes/post');
connectToDB=require('./DBconnection/mongodb')
// require('dotenv/config');
const PORT=3000;
http.createServer((app)).listen(PORT , () =>{
    console.log(`server is running on localhost: ${PORT}`)
    new connectToDB();
})