
export const render404=(req,res)=>{
    res.redirect("/not_found");
}

export const MessageObj=(res,Status,Message,Token=null,Login=false,Data=null)=>{
    const Response={Status,Message,Token,Login,Data}
    res.status(Status).json(Response);
}