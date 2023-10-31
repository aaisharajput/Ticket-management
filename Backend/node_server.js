import express from "express";
import cors from 'cors';
import {init} from './Models/db.js';
import {UsersRoute} from "./Routes/UsersRoute.js";
import {IndexRoutes} from "./Routes/IndexRoutes.js";

const app = express();
const port = 3000;
app.use(express.static('./images'));
app.use(express.static('./items'));
app.use(express.static('./codes'));
app.use(express.static('./'));
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.use('/Visitor',IndexRoutes);
app.use('/User',UsersRoute);

init().then((result)=>{
    console.log(result)
    app.listen(port,()=>{console.log("port no.: ",port);});
}).catch(err=>console.log(err))

