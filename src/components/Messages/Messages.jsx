import React, { useState, useEffect } from "react";
import Message from "../Message/Message";
import { UserChat } from "../../context/ChatsContext";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = UserChat();

  return (
    <div className="bg-gray-200 p-4 h-[520px] overflow-y-auto overflow-x-hidden message flex flex-col gap-3">
      {[0, 1, 2].map((item, i) => (
        <Message key={i} />
      ))}
    </div>
  );
};

export default Messages;
