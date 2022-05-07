
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
        req.body.timestamps = new Date();
        let response = await bookModel.insertMany([req.body]);
        res.status(200).json(response)

    }catch (error) {
        res.json(error);
    }
}

async function addComments(req,res, next){
    try{
        req.body.bookId = mongoose.Types.ObjectId(req.body.bookId)
        req.body.timestamps = new Date();
        let response = await commentModel.insertMany([req.body]);
        await bookModel.updateOne({_id:req.body.bookId}, {$push:{comments : response[0]._id}})
        res.status(200).json(response);

    }catch (error) {
        res.json(error);
    }
}

async function saveImage(req,res,next){
    console.log("Request FIle", req.file);

    req.body.userId = mongoose.Types.ObjectId(req.body.userId);
    await userModel.updateOne({_id: req.body.userId}, {$push: {profileImages: req.file.path}})
     res.json({
         "message": "Images Saved",
         path: req.file.path
     })
     res.status(200).json(response);

 }

 async function getAllBooks(req, res, next) {
    try {
        const pageNo = req.query.pageNo;
        const pageSize = req.query.pageSize;

        const skip = ((pageNo-1) * pageSize)|| 0;

        const limit = req.query.limit || 10;
        console.log(`limit & skip: ${limit} ${skip}`);
        let response = await bookModel.find({}).skip(skip).limit(limit);
        res.json(response);
      
    } catch (error) {
        res.status(500).json(error);
    }
}


module.exports = {
    createUser,
    createBook,
    addComments,
    saveImage,
    getAllBooks
}