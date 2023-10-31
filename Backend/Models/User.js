import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
    } ,
    email:{
        type:String,
        require:true,
        unique:true
    } ,
    pswd:{
        type:String,
        require:true
    } ,
    role:{
        type:String,
        require:true,
        default:"Fresher"
    },
    verified:{
        type:Number,
        require:true,
        default:0
    } ,
    mail_token:{
        type:Number,
    } 
});

export const UserModel=mongoose.model("User",userSchema);
