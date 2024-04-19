import React from "react"
import ChatMessage from "./ChatMessage";

const LiveChatContainer = (props) => {
  return (
    <div className="w-full h-full border rounded-xl">
      <div className="border-b px-6 py-3">
        <h1 className="text-[#0f0f0f]">Live Chat</h1>
      </div>
      <div>
        <ChatMessage/>
      </div>
    </div>
  )
};

export default LiveChatContainer;
