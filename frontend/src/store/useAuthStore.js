import {create} from 'zustand';
export const useAuthStore = create((set) => ({
    authUser: {name:"jammy",_id:123, age:25},
    isLogin: false,
    isLoading: false,
    login: () => {
        console.log("we just logged in");
        set({isLogin: true, isLoading:true});
    },
}));