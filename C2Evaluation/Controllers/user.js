const UserModel = require('../Models/user');
const BranchModel = require('../Models/Branch');
const MasterModel = require('../Models/MasterAccount');
const SavingAccountModel = require('../Models/SavingAccount');
const { default: mongoose } = require('mongoose');

async function createUser(req, res, next) {
    //fetch info from request body
    try {
        console.log("req.body", req.body);
        let userDetail = req.body;
        let response = await UserModel.insertMany([userDetail]);
        let branch = await BranchModel.find({});
        let masterAccount = {
            userId: response[0]._id,
            branchId:branch[0]._id,
            balance: 0,
            createdAt:response[0].createdAt,
            updatedAt: response[0].updatedAt,
        }
        await MasterModel.insertMany([masterAccount]);
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

async function createSavingAccount(req, res, next) {
    //fetch info from request body
    try {
        console.log("req.body", req.body);
        let userId = req.params.userId;
        let userDetail = req.body;
        let master = await MasterModel.find({userId:userId});
        let response = await SavingAccountModel.insertMany([userDetail]);
        let branch = await BranchModel.find({});
        let balance = Number(master[0].balance) + Number(response[0].balance);
        console.log(balance)
        let masterAccount = {
            userId: userId,
            branchId:branch[0]._id,
            balance: balance,
            createdAt:response[0].createdAt,
            updatedAt: response[0].updatedAt,
        }
        await MasterModel.updateOne({userId:userId},{masterAccount})
        res.json(response);
    } 
    catch (error) {
        res.json(error);
    }
}

module.exports = {
    createUser,
    createBranch,
    createSavingAccount
}