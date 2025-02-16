import React from "react";
import ChatInput from "./chat-input";

function Chat() {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="grow"></div>
      <footer className="p-6">
        <ChatInput />
      </footer>
    </div>
  );
}

export default Chat;
