import mongoose from "mongoose";
const ticketSchema = new mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    title:{
        type:String,
        required:true
    } ,
    description:{
        type:String,
        required:true
    },
    priority:{
        type:Number,
        required:true,
        default:3
    } ,
    assign_to:{
        department:{
            type:String,
            required: true
        },
        person:{
            type:String,
            default:"NA"
        },
    },
    type:{
        type:String,
        default:"public"
    },
    t_status:{
        status:{
            type:String,
            default:"Open"
        },
        resolve_by:{
            type:[String],
            default:[]
        }
    },
    date:{
        type:Date,
        default:Date.now
    },
    media:{
        type:String
    }
});

export const TicketModel=mongoose.model("ticket",ticketSchema);
