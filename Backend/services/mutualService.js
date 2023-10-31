import jwt from 'jsonwebtoken';
import { SecretKey } from '../ConfigEnv.js';

export const authVerify=(req,res,next)=>{
   // let {token} =req.body;
   const token=req.headers["authorization"].split(" ")[1];
   let Response;
    if (!token) {
         Response={
            Status:440,
            Message:"Token is not provided"
        }
        return res.status(440).json(Response);
      }

      try {
        const decoded = jwt.verify(token,SecretKey, process.env.JWT_SECRET_KEY); 
        req.JWTDetails = decoded;
        next();
        return;
      } catch (err) {
         Response={
            Status:400,
            Message:"Error: "+err.message,
            Login:false
        }
        return res.json(Response);
      }
}  

export const generateToken=(res,user)=> {
    const userDetails={username:user.username,email:user.email,user_id:user.userId,login:user.login};
  const token = jwt.sign(userDetails,SecretKey, process.env.JWT_SECRET_KEY, {
     expiresIn: "2h", // expires in 2 hours
  });
  // res.cookie("UserId","token") 

  return token;
}