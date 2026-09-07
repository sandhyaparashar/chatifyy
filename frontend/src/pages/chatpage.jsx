import React from 'react'
import { useChatStore } from '../store/useChatStore';
import ProfileHeader from '../components/ProfileHeader';
import  ActiveTabSwitch  from "../components/ActiveTabSwitch";

import ChatList from '../components/ChatList';
import ContactList from '../components/ContactList';
import ChatContainer from "../components/ChatContainer";
import NoConversationPlaceholder from "../components/NoConversationPlaceholder";
import BorderAnimationContainer from "../components/BorderAnimatedcontainer.jsx"
function ChatPage(){
  const {activeTab, selectedUser} = useChatStore();
  return (
    <div className="relative w-full max-w-6xl h-[800px]">
      <BorderAnimationContainer>
        <div className="w-80 bg-slate-800/50 backdrop-blur-sm flex flex-col">
        <ProfileHeader/>
        <ActiveTabSwitch/>
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {activeTab === "chats" ?  <ChatList /> :<ContactList />}
          </div>
          </div>
          {/*Rightside*/}
          <div className="flex-1 flex-col bg-slate-900/50 backdrop-blur-sm">

          {selectedUser ? <ChatContainer/> : <NoConversationPlaceholder />}

          </div>
      </BorderAnimationContainer>
    </div>
  )
}

export default ChatPage