import "dotenv/config";
 import express from "express";
 import cookieParser from "cookie-parser";



import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import { ENV } from "./lib/env.js";



const app = express();



const PORT = ENV.PORT || 5001;
app.use(express.json()) //req.body
app.use(cookieParser())

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);



app.listen(PORT, "0.0.0.0",() => {
    console.log("Server running on port:", PORT)
    connectDB()
});