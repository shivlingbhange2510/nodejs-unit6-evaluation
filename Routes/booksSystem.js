
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');
const allController = require('../Controllers/booksSystem')
var cors = require('cors');
app.use(cors());
app.use(bodyParser.json([]));

app.get("/", function(req, res) {
    res.send('homepage');
})

app.post("/books", allController.createBook)
app.post("/users", allController.createUser)
app.post("/comments", allController.commentsToBooks)
app.post("/login", allController.loginUser)

module.exports=app;
