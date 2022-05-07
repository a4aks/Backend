
const userModel = require('../Models/user');
const bookModel = require('../Models/book');
const { default: mongoose } = require('mongoose');
const commentModel = require('../Models/comment')

async function createUser(req, res, next){
    try{
        console.log("req.body", req.body);
        let userInfo = req.body;
        req.body.timestamps = new Date();
        let response = await userModel.insertMany([userInfo]);
        // await userModel.updateOne({timestamps: userInfo.timestamps}, { $set: new Date() })
        res.status(200).json(response)

    }catch (error) {
        res.json(error);
    }
}

async function createBook(req, res, next){
    try{
        req.body.userId = mongoose.Types.ObjectId(req.body.userId)
        let response = await bookModel.insertMany([req.body]);
        res.status(200).json(response)

    }catch (error) {
        res.json(error);
    }
}

async function addComments(req,res, next){
    req.body.bookId = mongoose.Types.ObjectId(req.body.bookId)
    let response = await commentModel.insertMany([req.body]);
}


module.exports = {
    createUser,
    createBook,
    addComments
}