import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: [
      "http://localhost:5173",                  // Local frontend (Vite)
      "https://chatifyy-l3md.vercel.app",
          "https://chatifyy-l3md-9a1bw19je-disco5.vercel.app"    
    ],
    methods: ["GET", "POST"],
    credentials: true,
  },
});

export { app, io, server };