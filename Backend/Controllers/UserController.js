import { MessageObj } from "./MutualController.js";

export const emptyTicket=(req,res)=>{
    MessageObj(res,401,"Empty Tickets!!",null,false,null)
}

export const pswdChangeSuccessfully=(req,res)=>{
    MessageObj(res,200,"Password changed Successfully")
}

export const addedSuccess=(req,res)=>{
    MessageObj(res,200,"Added Successfully")
}

export const sendCartItems=(req,res)=>{
    const {data}=req;
   
    if (data.length != 0) {
        MessageObj(res,200,"fetched Cart products",null,false,data)
    } else {
        MessageObj(res,401,"Cart is empty!!")
    }
} 

export const sendOrderBillDetails=(req,res)=>{
    const {data}=req;
   
    if (data.length != 0) {
        MessageObj(res,200,"fetched Cart products",null,false,data)
    } else {
        MessageObj(res,401,"Bill is empty!!")
    }
} 

export const sendContactDetails=(req,res)=>{
    const {data}=req;
   
    if (data.length != 0) {
        MessageObj(res,200,"contact details",null,false,data)
    } else {
        MessageObj(res,401,"contact is empty!!")
    }
} 

export const sendMyOrder=(req,res)=>{
    const {data}=req;
   
    if (data.length != 0) {
        MessageObj(res,200,"fetched My Order",null,false,data)
    } else {
        MessageObj(res,401,"Order is empty!!")
    }
} 
 
export const sendAmount=(req,res)=>{
    const {data}=req;

    if (data.length > 0) {
        MessageObj(res,200,"fetched amount details",null,false,data)
    } else {
        MessageObj(res,401,"Cart is empty!!")
    }
}  

export const sendSeller=(req,res)=>{
const {data}=req;

if (data.length > 0) {
    MessageObj(res,200,"Empty Seller!!",null,false,data)
} else {
    MessageObj(res,401,"Empty Seller!!")
}
}

export const sendUpdate=(req,res)=>{
    const {data}=req;

    if(data.modifiedCount)
        MessageObj(res,200,"updated successfully!!")
    else
        MessageObj(res,401,"Limit Reached")       
}

export const deletedSuccess=(req,res)=>{
    MessageObj(res,200,"Deleted Successfully!!")
}