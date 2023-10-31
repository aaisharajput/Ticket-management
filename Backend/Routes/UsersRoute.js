import express from "express";
const Router=express.Router();

import { loadTickets } from "../services/UserService.js";
import { emptyTicket } from "../Controllers/UserController.js";
Router.route("/loadTickets").post(loadTickets,emptyTicket);

export {Router as UsersRoute};

