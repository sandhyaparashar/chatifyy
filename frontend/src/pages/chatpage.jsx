import React from 'react'
import { useAuthStore } from '../store/useAuthStore'

function ChatPage() {
  const { logout, isLoggingOut } = useAuthStore();

  return (
    <div className="z-10">
      Chatpage
      <button 
        onClick={logout} 
        disabled={isLoggingOut}
        className="px-4 py-2 bg-red-500 text-white rounded disabled:opacity-50"
      >
        {isLoggingOut ? "Logging out..." : "Logout"}
      </button>
    </div>
  );
}

export default ChatPage