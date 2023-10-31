import mongoose from "mongoose";

export const init= function(){
    return new Promise(async(resolve,reject)=>{
        try{
            await mongoose.connect('mongodb://127.0.0.1:27017/TicketManagement')
            return resolve("Connected!!");
        }catch(err){
            return reject(err);
        }        
    })
}