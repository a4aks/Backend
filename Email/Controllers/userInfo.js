
const userModel = require('../Models/userInfo');
const emailService = require('../Notification/EmailService');

async function createUser(req, res, next){
    try{
        console.log("Req Body :", req.body)
        let userInfo = req.body;
        let response = await userModel.insertMany([userInfo]);
        let responseEmail = await emailService.sendMail({
            from: '"Ashish Sinha" <ashish@unthinkable.co>', // sender address
            to: `${response[0].email}`, // list of receivers
            subject: `Welcome to the Masai School ${response[0].firstName, response[0].lastName}`, // Subject line
            text: "Hello world", // plain text body
            html: `<b> Hi ${response[0].firstName, response[0].lastName} Please Confirm your Email Address.</b>`, // html body
         })
         console.log(responseEmail);
         res.send(true);
    }
    catch(error){
       res.json(error);
    }
}

module.exports = {
    createUser
}