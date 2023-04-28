import React, { useState, useEffect } from "react";
import Message from "../Message/Message";
import { UserChat } from "../../context/ChatsContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = UserChat();

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "chats", data.chatId), () => {
      doc.exists() && setMessages(doc.data());
    });

    return () => {};
  }, []);

  return (
    <div className="bg-gray-200 p-4 h-[520px] overflow-y-auto overflow-x-hidden message flex flex-col gap-3">
      {[0, 1, 2].map((item, i) => (
        <Message key={i} />
      ))}
    </div>
  );
};

export default Messages;
