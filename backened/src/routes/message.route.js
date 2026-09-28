import express from "express";
import { getAllContacts } from "../controllers/message.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
    
    getMessagesByUserId,
    sendMessage,getChatPartners
} from "../controllers/message.controller.js";
import arcjet from "@arcjet/node";
import { arcjetProtection } from "../middleware/arc.middleware.js";

const router = express.Router();
router.use(arcjetProtection,protectRoute);
router.get("/contacts", getAllContacts);
 router.get("/chats", getChatPartners);
 router.get("/:id", getMessagesByUserId);
router.post("/:id", sendMessage);
export default router;