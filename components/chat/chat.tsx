import React from "react";
import ChatInput from "./chat-input";

function Chat() {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="grow"></div>
      <footer className="p-4 fixed bottom-0 left-0 w-full">
        <ChatInput />
      </footer>
    </div>
  );
}

export default Chat;
