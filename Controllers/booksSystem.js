const bookModal = require('../Models/book');
const commentModal = require('../Models/comment');
const publicationModal = require('../Models/publication');
const userModal = require('../Models/user');

const createBook= async (req, res, next)=>{
    const data = req.body
        try {
            const response = await bookModal.insertMany([data]);
            res.json(response)
        } catch (error) {
            console.log('sendbooks erro', error)
        }
}

const createUser= async (req, res, next)=>{
    const data = req.body
        try {
            const response = await userModal.insertMany([data]);
            res.json(response)
        } catch (error) {
            console.log('sendbooks erro', error)
        }
}
const commentsToBooks = async (req, res, next)=>{
 try {
     let data = req.body.body;
     let k = {body:data, timestamps: new Date()};
      const response = await commentModal.insertMany([k]);
      res.json(response)
     
 } catch (error) {
     console.log("error in comments", error)
 }
}
const loginUser = async (req, res, next)=>{
    try {
        const data = req.body;
        const name=req.body.name; 
        const userId=req.body._id;
        const response = await userModal.findOne({_id:userId});
        res.json(response)
    } catch (error) {
    console.log('err', error)
    }
}
module.exports={
    createBook,
    createUser,
    commentsToBooks,
    loginUser
}