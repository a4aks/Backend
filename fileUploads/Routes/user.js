const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const userController = require('../Controllers/user');
const multer = require('multer');

// const diskStorage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         console.log(__dirname);
//         cb(null, `${__dirname}/public`)
//     },
//     filename: function (req, file, cb) {
//         console.log(file);
//         const ext = file.mimetype.split("/")[1];
//         //jpeg
//         if (ext != 'jpeg') { cb(new Error("format not accept")) }
//         cb(null, `/public-${file.fieldname}-${Date.now()}.${ext}`);
//     }
// })

// const upload = multer({
//     storage: diskStorage
// });

app.use(bodyParser.json([]));

module.exports = app;