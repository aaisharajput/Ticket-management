
import { TicketModel } from "../Models/Ticket.js";


export const loadTickets = async (req, res, next) => {
    console.log(req.cookies);
    // let { Limit } = req.body;
    try {
        const product = await TicketModel.find({});
        if (product.length > 0) {
            const Response = {
                Status: 200,
                Message: "Ticket detailes fetched",
                Data: product,
            };
            res.status(200).json(Response);
        } else {
            next();
            return;
        }
    } catch (err) {
        const Response = { Status: 400, Message: "Error: " + err, Data: null };
        res.status(400).json(Response);
    }
};

