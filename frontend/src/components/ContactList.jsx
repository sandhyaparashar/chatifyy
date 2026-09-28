import { useEffect } from "react";
import { useChatStore } from "../store/useChatStore"; 
import { useSocketStore } from "../store/useSocketStore";
import UserLoadingSkeleton from "./UserLoadingSkeleton";

function ContactList() {
  // We extract the exact variable names you defined in your useChatStore
  const { allContacts, getAllContacts, isUserLoading, setSelectedUser } = useChatStore();
  const { onlineUsers } = useSocketStore();
  
  // Fetch the contacts when this component loads
  useEffect(() => {
    getAllContacts(); 
  }, [getAllContacts]);
  
  if (isUserLoading) return <UserLoadingSkeleton />;
  
  return (
    <>
      {allContacts?.map((contact) => {
        // 1. Dynamic check to see if this user is online right now
        const isOnline = onlineUsers.includes(contact._id);

        return (
          <div
            key={contact._id}
            className="bg-cyan-500/10 p-4 rounded-lg cursor-pointer hover:bg-cyan-500/20 transition-colors"
            onClick={() => setSelectedUser(contact)}
          >
            <div className="flex items-center gap-3">
              
              {/* 2. Apply the dynamic green dot class */}
              <div className={`avatar ${isOnline ? "online" : ""}`}>
                <div className="size-12 rounded-full">
                  <img 
                    src={contact.profilePic || "/avatar.png"} 
                    alt={contact.fullName} 
                  />
                </div>
              </div>
              
              <h4 className="text-slate-200 font-medium">
                {contact.fullName}
              </h4>
              
            </div>
          </div>
        );
      })}
    </>
  ); 
}

export default ContactList;