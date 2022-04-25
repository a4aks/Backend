const UserModel = require('../Models/user');
const BranchModel = require('../Models/Branch');
const { default: mongoose } = require('mongoose');

async function createUser(req, res, next) {
    //fetch info from request body
    try {
        console.log("req.body", req.body);
        let userDetail = req.body;
        let response = await UserModel.insertMany([userDetail]);
        res.json(response);

    } 
    catch (error) {
        res.json(error);
    }
}

async function createBranch(req, res, next) {
    //fetch info from request body
    try {
        console.log("req.body", req.body);
        let userDetail = req.body;
        let response = await BranchModel.insertMany([userDetail]);
        res.json(response);

    } 
    catch (error) {
        res.json(error);
    }
}

module.exports = {
    createUser,
    createBranch
}