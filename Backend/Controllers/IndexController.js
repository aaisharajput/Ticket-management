import { MessageObj } from "./MutualController.js"

export const successStatus=(req,res)=>{
    MessageObj(res,200,"Mail Verified!!")  
}

export const otpVerified=(req,res)=>{
    MessageObj(res,200,"OTP Verified")    
}

export const mailSendSuccessfully=(req,res)=>{
    const {Token}=req;
    MessageObj(res,200,"Otp is send on your email, verify first to recover the password",Token,false)    
}

export const signUpSuccess=(req,res)=>{
    const {Token}=req;
    MessageObj(res,200,"OTP is send on Your Email.Enter OTP to verify your mail",Token,false)    
}

export const logInSuccess=(req,res)=>{
    const {Token}=req;
    MessageObj(res,401,"Email is not verified. Otp is send on your email, verify first",Token,false)
}