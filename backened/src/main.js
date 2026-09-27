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
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, curl, or Postman)
      if (!origin) return callback(null, true);

      // Check if origin is localhost or any Vercel deployment of your project
      const allowedPatterns = [
        /^http:\/\/localhost:\d+$/,
        /\.vercel\.app$/, // Allows all your .vercel.app subdomains
      ];

      const isAllowed = allowedPatterns.some((pattern) => pattern.test(origin));

      if (isAllowed) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
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