const mongoose = require('mongoose');

const comment =  new mongoose.Schema({
"body" : { type: String, required:true  },
"timestamps" :  { type: String, required:true , default: new Date() },
})
module.exports = mongoose.model('comments', comment)