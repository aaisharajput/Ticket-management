import mongoose from "mongoose";
const profileSchema = new mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    } ,
    address:{
        address:{
            type:String
        },
        city:{
            type:String,
            required:true
        } ,
        state:{
            type:String,
            required:true
        } ,
        zipcode:{
            type:Number,
            required:true
        } ,
    } ,
    contact:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    resolve_issue:{
        type:Number,
        default:0
    },
    rating:{
        type:Number,
        default:0
    },
    reviews:{
        type:[String]
    }
});

export const ProfileModel=mongoose.model("profile",profileSchema);
