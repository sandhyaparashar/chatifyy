import { create } from "zustand";
import { io } from "socket.io-client";
import { useAuthStore } from "./useAuthStore.js"; 

// Dynamically check if we are in development or production
const BASE_URL = import.meta.env.MODE === "development" 
  ? "http://localhost:5001" 
  : "https://chatifyy-bptv.onrender.com"; 

export const useSocketStore = create((set, get) => ({
  socket: null,
  onlineUsers: [],

  connectSocket: () => {
    const { authUser } = useAuthStore.getState(); 
    
    if (!authUser || get().socket?.connected) return; 

    const socket = io(BASE_URL, {
      query: {
        userId: authUser._id,
      },
    });
    socket.connect();

    set({ socket: socket });

    socket.on("getOnlineUsers", (userIds) => {
      set({ onlineUsers: userIds });
    });
  },

  disconnectSocket: () => {
    if (get().socket?.connected) get().socket.disconnect();
  },
}));