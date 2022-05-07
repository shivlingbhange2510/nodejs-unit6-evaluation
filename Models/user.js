const mongoose = require('mongoose');
// firstName,lastName,age,email, profileImages, timestamps
const user =  new mongoose.Schema({
"firstName" : { type: String, minLength:3, maxLength:30, required:true  },
"lastName" : { type: String, minLength:3, maxLength:30, required:true  },
"age" : { type: Number, min:3, max:30, required:true  },
"email" :  { type: String, min:3, max:30, required:true  },
"profileImages" : {type: Array},
"timestamps" : { type: String, required:true}
})
module.exports = mongoose.model('users', user)