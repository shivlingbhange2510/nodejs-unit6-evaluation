
const mongoose = require('mongoose');
const book =  new mongoose.Schema({
    "likes" : {type:Number, default:0},
    "coverImage" : { type:String, required:true  },
     "content" : { type:String, required:true  },
     "timestamps" :{ type:String ,  required:true },
})

module.exports = mongoose.model('books', book)