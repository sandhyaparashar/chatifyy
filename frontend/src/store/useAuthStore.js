import {create} from "zustand";
import { axiosInstance } from "../lib/axios";

import toast from "react-hot-toast";
import { LogIn, LogOut } from "lucide-react";
export const useAuthStore = create((set) => ({
    authUser:null,
    isCheckingAuth:true,
    isSigningUp:false,
    isLoggingIn: false,
    checkAuth: async () => {
    try{
        const res = await axiosInstance.get("/auth/check")
        set({authUser: res.data})
    }catch(error){
       console.log("error in authCheck:", error)
       set({authUser:null})
    }finally{
        set({isCheckingAuth: false});
    }
},
    SignUp: async (data) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post("/auth/signup", data);
      set({ authUser: res.data });
      toast.success("Account created successfully");
    } catch (error) {
      // Safely get the error, then pass THAT to the toast
      const errorMessage = error.response?.data?.message || "Something went wrong creating the account.";
      toast.error(errorMessage); 
    } finally {
      set({ isSigningUp: false });
    }
  },
  
  login: async (data) => {
    set({ isLoggingIn: true });
    try {
      const res = await axiosInstance.post("/auth/login", data);
      set({ authUser: res.data });
      toast.success("Login successfully");
    } catch (error) {
      // Safely get the error, then pass THAT to the toast
      const errorMessage = error.response?.data?.message || "Something went wrong logging in.";
      toast.error(errorMessage);
    } finally {
      set({ isLoggingIn: false });
    }
  },
  logout: async () => {
  set({ isLoggingOut: true });
  try {
    await axiosInstance.post("/auth/logout");
    set({ authUser: null });
    toast.success("Logged out successfully");
  } catch (error) {
    const message = error.response?.data?.message || "Error logging out";
    toast.error(message);
    console.log("Logout error:", error);
  } finally {
    set({ isLoggingOut: false });
  }
},
    
}));