'use strict';
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const sendEmail = async (options) => {
  let transporter = nodemailer.createTransport({
    service: process.env.SMTP_HOST,
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const message = {
    from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  const info = await transporter.sendMail(message, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Message sent: %s', info.messageId);
    }
  });
};

module.exports = sendEmail;
