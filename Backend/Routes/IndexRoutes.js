import express from "express";
const Router=express.Router();

import {checkAccountExistance,checkEmailExistance,verifyEmail,login,generateTokenToverify,signUp,verifyOtp,confirmEmailOtp,updateStatus,forgotPswd,generateOTP,sendOTPonMail} from "../services/IndexService.js";
import { authVerify } from "../services/mutualService.js";
import {successStatus,otpVerified,mailSendSuccessfully,signUpSuccess,logInSuccess} from "../Controllers/IndexController.js";
// import {render404} from "../Controllers/MutualController.js";

Router.route("/login").post(checkEmailExistance,login,verifyEmail,logInSuccess)

Router.route("/signup").post(checkAccountExistance,signUp,generateTokenToverify,signUpSuccess);

Router.post("/verifyOtp",authVerify,verifyOtp,updateStatus,successStatus)

Router.post("/verifyEmailOtp",authVerify,confirmEmailOtp,otpVerified)

Router.route("/forgotPassword").post(forgotPswd,generateOTP,sendOTPonMail,mailSendSuccessfully);

// Router.get("*",render404);

export {Router as IndexRoutes}; 