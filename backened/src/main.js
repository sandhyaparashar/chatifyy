import "dotenv/config";
import express from "express";
import { app, server } from "../socket/socket.js";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import { ENV } from "./lib/env.js";




app.use(
  cors({
    origin:[
       "http://localhost:5173",
       "https://chatifyy-l3md-32ozymaa4-disco5.vercel.app"
    ],
             
    credentials: true,
  })
);

const PORT = ENV.PORT || 5001;
app.use(express.json({ limit: "10mb" })); 
app.use(express.urlencoded({ limit: "10mb", extended: true }));


app.use(cookieParser())

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

server.listen(PORT, "0.0.0.0", () => {
    console.log("Server running on port:", PORT)
    connectDB()
});