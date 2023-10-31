import bcrypt from "bcrypt";
import {UserModel} from '../Models/User.js';
import sendEmail from "./mailService.js";
import { generateToken } from "./mutualService.js";

// req.headers["x-access-token"]

export const checkAccountExistance=async (req,res,next)=>{
    const {email}=req.body;
    try{
        const user=await UserModel.findOne({email:email})
        if(user!=null){
            const Response={
                Status:400,
                Message:"Account already exist!! Try another email"
            }
            res.status(400).json(Response);
        }else{
            next();
            return;
        }
    }catch(err){
        const Response={
            Status:400,
            Message: "error: " + err
        }
        res.status(400).json(Response);
    }
}

export const signUp= async(req,res,next)=>{
    const {username,email,password,role}=req.body;
    const otp=Math.floor(Math.random() * 1000000);
   
    try {
        const hash=await bcrypt.hash(password, 10);
        await UserModel.create({username:username,email:email,pswd:hash,role:role,mail_token:otp})
        const Result=await send_mail("ApnaBazaar: Email Verification",otp,email)
        if(Result.Status==200){
            next();
            return;
         }

    } catch (err) {
        const Response={
            Status:400,
            Message: "error: " + err
        }
        res.status(400).json(Response);
    }           
}

export const generateTokenToverify=(req,res,next)=>{
    const {username,email}=req.body;
    const userData={
        username:username,
        email:email,
        userId:0,
        login:false
       }
        let token=generateToken(res,userData);
        req.Token=token;
        next();
        return;
}

export const checkEmailExistance=async (req,res,next)=>{
    const {email}=req.body;
    try{
        const data=await UserModel.findOne({email:email})
        if(data!=null){
            req.data=data;
            next();
            return;
        }else{
            const Response={
                Status:400,
                Message:"Email is not registerd. Signup first!!"
            }
            res.status(400).json(Response);
        }
    }catch(err){
        const Response={
            Status:400,
            Message: "error: " + err
        }
        res.status(400).json(Response);
    }
}

export const login=async(req,res,next)=>{   
    // console.log(req.cookies)
    const {email,password}=req.body;
    const {verified,pswd,username,_id}=req.data;
    let Response;

    try {
        if(verified==1){
            const result=await bcrypt.compare(password,pswd);
            if(result==true){                       
                const user={username:username,email:email,userId:_id,login:true}
                const token=generateToken(res,user);
                Response={Status:200,Username:username,Email:email,Login:true,Token:token,Message:"save your token"}
                res.status(200).json(Response);
            }else{
                Response={
                    Status:400,
                    Message :"Incorrect Password. Try again!!"
                }
                res.status(400).json(Response);
            }
        }else{
            next();
            return;
        }

    } catch (err) {
        Response={
            Status:400,
            Message:err
        }
        res.status(400).json(Response)
    }
}

export const verifyEmail=async(req,res,next)=>{
    console.log("verified")
    const {email}=req.body;
    const {username,_id}=req.data;
    try{
        const otp=Math.floor(Math.random() * 1000000);
        await UserModel.updateOne({ email: email },{mail_token: otp})
        await send_mail("ApnaBazaar: Email Verification",otp,email)
        const user={username:username,email:email,userId:_id.toString(),login:true}
        req.Token=generateToken(res,user);
        next()
        return;
    }catch(err){
        const Response={
            Status:400,
            Message:err.message
        }
        res.status(400).json(Response);
    }
    
}

export const send_mail=(subject,OTP,email)=>{
   return new Promise((resolve,reject)=>{
        sendEmail.sendMailOtp(subject,OTP,email,(err)=>{
            let Response;
            if(err){
                 Response={
                    Status:400,
                    Message:"Something went wrong. Verification process stopped."+err
                }       
                return reject(Response);         
            }else{
                 Response={
                    Status:200,
                    Message:"Verify user mail."
                }
                return resolve(Response);
            }
        });
    }) 
}

export const verifyOtp=async(req,res,next)=>{
    const {otp} =req.body;
    const email=req.JWTDetails.email;
    let Response;
    try{
        const mailotp=await UserModel.findOne({"email" : email},{"mail_token": 1})
        if(mailotp.mail_token==otp){
            next();
            return;
        }else{
            Response={
                Message:"OTP is not matched",
                Status:400
            }
            res.status(400).json(Response);
        }
    }catch(err){
        Response={
            Status:400,
            Message:"Invalid user!!"+err
        }
        res.status(400).json(Response);
    }       
}

export const updateStatus=async (req,res,next)=>{
    let Response;
    const email=req.JWTDetails.email;
    try{
        await UserModel.updateOne({ email: email },{verified: 1})
        next();
        return;        
    }catch(err){
        Response={
            Status:400,
            Message:"Invalid user!!"+err
        }
        res.json(Response);
    }
}

export const confirmEmailOtp=async(req,res,next)=>{
    const {otp}=req.body;
    let Response;
    const {email}=req.JWTDetails;
 
    try{
        const data=await UserModel.findOne({email:email})
        if(data!=null){
            if(otp==data.mail_token){
                next();
                return;
            }else{
                Response={Status:400,Message:"OTP is not matched"}
            }
        }else{
            Response={Status:400,Message:"Invalid user!!"}
        }
    }catch(err){
        Response={
            Status:400,
            Message:+err.message
        }
        res.status(400).json(Response);
    }
 }

export const forgotPswd=async(req,res,next)=>{
    const {email}=req.body;
    let Response;

    try{
       const data=await UserModel.findOne({email:email})
       if(data!=null){
        req.data=data;
        next();
        return;
    }else{
        Response={Status:400,Message:"Invalid Email/Email is not registerd",Token:null,Login:false}
        res.status(400).json(Response);
    }
    }catch(err){
        Response={Status:400,Message:err.message,Token:null,Login:false}
        res.status(400).json(Response);
    }
}

export const generateOTP=async(req,res,next)=>{
    const {email}=req.body;
    try{
        const otp=Math.floor(Math.random() * 1000000);
        await UserModel.updateOne({ email: email },{mail_token: otp})
        await send_mail("ApnaBazaar: Forgot password",otp,email)
        next();
        return;

    }catch(err){
        Response={Status:400,Message:err.message,Token:null,Login:false}
        res.status(400).json(Response);
    }
}

export const sendOTPonMail=(req,res,next)=>{
    const {email}=req.body;
    const {data}=req;
    const user={
        username:data.username,
        email:email,
        userId:data._id,
        login:false
    }
    req.Token=generateToken(res,user);
    next();
    return;
}