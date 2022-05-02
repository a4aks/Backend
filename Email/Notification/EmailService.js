const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "5fcd4bea819ebe",
      pass: "71ecd901fbffb7"
    }
  });

  module.exports = transport;