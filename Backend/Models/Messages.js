import mongoose from "mongoose";
const messageSchema = new mongoose.Schema({
    receiver_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    ticket_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    messages:{
        sender_id:{
            type:mongoose.Schema.Types.ObjectId,
            required:true
        },
        message:{
            type:String
        },
        date:{
            type:Date,
            default:Date.now
        },
        message_type:{
            type:String
        }
    }
   
});

export const ChatModel=mongoose.model("message",messageSchema);
