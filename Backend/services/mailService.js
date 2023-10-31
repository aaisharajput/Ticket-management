import nodemailer from "nodemailer";
import { EmailConfiguration } from "../ConfigEnv.js";
let transporter = nodemailer.createTransport({
  service:'gmail',
  auth: {
    user:EmailConfiguration.Email, // generated ethereal user
    pass: EmailConfiguration.Password, // generated ethereal password
  },
});

function sendMailOtp(subject,OTP,email,callback){

  let info={
    from:EmailConfiguration.Email,
    to:email,
    subject:subject,
    text:"verify your email",
    html:"<p>OTP is "+OTP+" . Please don't share it.</p>",
  }

  transporter.sendMail(info,callback);
}

function pswdChangedMail(email,callback){

  let info={
    from:EmailConfiguration.Email,
    to:email,
    subject:"TicketService - Change Password",
    text:"Your password has changed successfully",
  }

  transporter.sendMail(info,callback);
}

function pswdForgotMail(email,callback){

  let info={
    from:EmailConfiguration.Email,
    to:email,
    subject:"TicketService - Forgot Password",
    text:"Click the link to change your password",
    html:`<a href='http://localhost:3000/forgetmail/${email}'>click here... </a>`,
  }

  transporter.sendMail(info,callback);
}


export default{sendMailOtp,pswdChangedMail,pswdForgotMail}