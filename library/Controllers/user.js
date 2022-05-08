
const sectionModel = require('../Models/section');
const bookModel = require('../Models/book');
const author = require('../Models/author');

async function createSection(req,res,next){
    try{
        let response = await sectionModel.insertMany([req.body]);
        res.status(200).json(response)

    }catch (error) {
        res.json(error);
    }
}

async function createbook(req,res,next){
    try{
        req.body.sectionId = mongoose.Types.ObjectId(req.body.sectionId);
        let response = await bookModel.insertMany([req.body]);
        await sectionModel.updateOne({_id:req.body.sectionId}, {$push:{books:response[0]._id}})
        console.log(response)
        res.status(200).json(response)
    }catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {
    createSection,
    createbook
}