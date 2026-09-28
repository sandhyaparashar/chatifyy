import { create } from "zustand";
import { io } from "socket.io-client";
import { useAuthStore } from "./useAuthStore.js"; // Adjust this import to match your auth store!

// Your backend URL (we saw it running on 5001 in your terminal)
const BASE_URL = "http://localhost:5001"; 

export const useSocketStore = create((set, get) => ({
  socket: null,
  onlineUsers: [],

  connectSocket: () => {
    // 1. Get the currently logged-in user
    const { authUser } = useAuthStore.getState(); 
    
    // 2. If not logged in, or already connected, do nothing
    if (!authUser || get().socket?.connected) return; 

    // 3. Connect to the backend socket server
    const socket = io(BASE_URL, {
      query: {
        userId: authUser._id,
      },
    });
    socket.connect();

    set({ socket: socket });

    // 4. Listen for the online users list from the backend
    socket.on("getOnlineUsers", (userIds) => {
      set({ onlineUsers: userIds });
    });
  },

  disconnectSocket: () => {
    // Disconnect when the user logs out
    if (get().socket?.connected) get().socket.disconnect();
  },
}));