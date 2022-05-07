
const mongoose = require('mongoose');

class Mongo {

    constructor() {
        this.createMongoConnection();
    }
    createMongoConnection(){
        // db.createUser({user:'shiv', pwd:'shiv@123',roles:['dbOwner']})

        mongoose.connect(
            // `mongodb+srv://shivling:EKVVRIZS58E0fLKm@cluster0.rqati.mongodb.net/linkedin?retryWrites=true&w=majority`
        
            `mongodb://127.0.0.1:27017/unit_evaluation`,
            //  {useNewUrlParser: true}
             )
        .then(()=>{
            console.log('connected succesfully')
        })
        .catch((er)=>{
            console.log('errMsg : ', er)
        })

        mongoose.connection.once('open', ()=>{
            console.log('connection establish succesfully')
        })
        mongoose.connection.on('error', ()=>{
            console.log('errr')
       
       
        })

    }

}

module.exports = Mongo;


