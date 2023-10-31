// const URL="https://localhost:44394/api";
const URL="http://localhost:3000";
function PayloadDetailsWithToken(payload,link){
    return new Promise(async(resolve,reject)=>{
        try {
            const tokenDetails = JSON.parse(localStorage.getItem('tokenDetails'));
            const response = await fetch(URL+link, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${tokenDetails.token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            })
            let result = await response.json();
            return resolve(result);
        } catch (error) {
            return reject(error);
        }
    })  
}

function PayloadDetails(payload,link){
    return new Promise(async(resolve,reject)=>{
        try {
            const response = await fetch(URL+link, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            })
            let result = await response.json();
            return resolve(result);
        } catch (error) {
            return reject(error);
        }
    })    
}

export async function login(data) {
    const payload = {
        username: data.username,
        email:data.email,
        password: data.password,
    };
    try {
        const result=await PayloadDetails(payload,"/Visitor/login")
            document.cookie=`tokenDetails=${result.Token};expires:1`;
        localStorage.setItem('tokenDetails', JSON.stringify({token:result.Token,username:result.Username,login:result.Login,email:result.Email}));
        return {status:result.Status,message:result.Message};
    } catch (error) {
        console.log(error);
    }

}

export async function verifyEmail(email){
    const payload = {
        username:"Guest",
        email:email
    };
    try {
        const result=await PayloadDetails(payload,"/Visitor/forgotPassword") 
        localStorage.setItem('tokenDetails', JSON.stringify({token:result.Token,login:result.Login}));
        document.cookie=`tokenDetails=${result.Token}`;
        return {
            status:result.Status,
            message:result.Message
        }
    } catch (error) {
        console.log(error);
    }

}

export async function signup(data) {
    const payload = {
        username: data.username+" "+data.last,
        email: data.email,
        password: data.password
    };

    try {
        const result=await PayloadDetails(payload,"/Visitor/signup") 
        localStorage.setItem('tokenDetails', JSON.stringify({token:result.Token,login:result.Login}));
        document.cookie=`tokenDetails=${result.Token}`;
        return {
            status: result.Status,
            message:result.Message,
        };
    } catch (error) {
        console.log(error);
    }  
}

export async function verifyOTP(otp){
    
    const payload = {
        otp: otp
    };

    try {
        const result=await PayloadDetailsWithToken(payload,"/Visitor/verifyOtp")
        return {
            status:result.Status,
            message:result.Message
           }    
    } catch (error) {
        console.log(error);
    }    
}

export async function verifyEmailOTP(otp){
    const payload = {
        otp: otp
    };

    try {
        const result=await PayloadDetailsWithToken(payload,"/Visitor/verifyEmailOtp")
        
        return {
            status:result.Status,
            message:result.Message
        }  
    } catch (error) {
        console.log(error);
    }   

}

export function logout() {
    localStorage.removeItem("tokenDetails");
}

export async function fetchProduct(Limit) {
    const payload = { Limit };
    console.log(document.cookie)
    try {
        const result=await PayloadDetails(payload,"/User/loadProduct")
        return result;
    } catch (error) {
        console.log(error)
    }
}

export async function changePassword(password) {
    const payload = {
        password,
    };

    try {
        const result=await PayloadDetailsWithToken(payload,"/User/changePswd")
        return {
            status:result.Status,
            message:result.Message
           }    
    } catch (error) {
        console.log(error);
    }    
}

export async function cartItems() { 
    try {
        const result=await PayloadDetailsWithToken({},"/User/cart")
        return result; 
    } catch (error) {
        console.log(error);
    }  
}

export async function orderProducts(status) {
    const payload = {
        orderStatus:status
    };
    
    try {
        const result=await PayloadDetailsWithToken(payload,"/User/myorder")
        return {
            status:result.Status,
            message:result.Message,
            data:result.Data
        }
    } catch (error) {
        console.log(error);
    } 
}

export async function orderBillDetails(oid,pid) {
   const payload = {
        orderId:oid,
        productId:pid
    };
    
    try {
        const result=await PayloadDetailsWithToken(payload,"/User/orderBillDetails")
        return {
            status:result.Status,
            message:result.Message,
            data:result.Data
        } 
    } catch (error) {
        console.log(error);
    } 
}

export async function contactDetails(oid) {
    const payload = {
        orderId:oid
        };
        try {
            const result=await PayloadDetailsWithToken(payload,"/User/contactDetails")
            return {
                status:result.Status,
                message:result.Message,
                data:result.Data
            };  
        } catch (error) {
            console.log(error);
        }    
}

export async function amountPay(){

    try {
        const result=await PayloadDetailsWithToken({},"/User/amountToPay")
        return result;   
    } catch (error) {
        console.log(error);
    } 
}

export async function sellerList(){
    try {
        const result=await PayloadDetailsWithToken({},"/User/sellerList")
        return {
            status:result.Status,
            message:result.Message,
            data:result.Data
        }; 
    } catch (error) {
        console.log(error);
    } 
}

export async function deliveryLocation(data){
    const payload = {
        city:data.city,
        address:data.hno+" "+data.address,
        state:data.state,
        pincode:data.pincode,
        phoneNumber:data.phoneNo,
        alterPhoneNumber:data.alter_phoneNo,
    };
    try {
        const result=await PayloadDetailsWithToken(payload,"/User/userAddress")
        return {
            status:result.Status,
            message:result.Message
        }; 
    } catch (error) {
        console.log(error);
    } 
}

export async function updatePaymentStatus(data){    
    const payload = {
        transactionId:data.transactionID,
        addressId:data.addressID,
        paymentStatus:data.paymentStatus,
        paymentMode:data.paymentMode,
        amount:data.amount
    };
    try {
        const result=await PayloadDetailsWithToken(payload,"/User/orderDetails")
        return {
            status:result.Status,
            message:result.Message
        };  
    } catch (error) {
        console.log(error);
    } 
}

export async function AddToCart(id) {
        const payload = {
            productId: id,
        };
        try {
            const result=await PayloadDetailsWithToken(payload,"/User/addToCart")
            return {
                status:result.Status,
                message:result.Message
            };
        } catch (error) {
            console.log(error);
        }  
}

export async function IncDescQuantity(cart_id,operation) {
    const payload = {
        cartId: cart_id,
        operation:operation
    };
    try {
        const result=await PayloadDetailsWithToken(payload,"/User/changeQuantity")
        return {
            status:result.Status,
            message:result.Message,
        };
    } catch (error) {
        console.log(error);
    } 
   
}

export async function deleteProducts(id) {
        const payload = {
            productId: id,
        };
        try {
            const result=await PayloadDetailsWithToken(payload,"/User/deleteProduct")
            return {
                status:result.Status,
                message:result.Message
            };    
        } catch (error) {
            console.log(error);
        }        
}