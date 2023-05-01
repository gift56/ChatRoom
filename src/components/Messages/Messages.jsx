import React, { useState, useEffect } from "react";
import Message from "../Message/Message";
import { UserChat } from "../../context/ChatsContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = UserChat();

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unsub();
    };
  }, [data.chatId]);

  console.log(messages);

  return (
    <div className="bg-gray-200 dark:bg-darkBg p-4 h-[520px] overflow-y-auto overflow-x-hidden message flex flex-col gap-3 transition-all duration-300">
      {messages?.map((m) => (
        <Message key={m.id} chat={m} />
      ))}
    </div>
  );
};

export default Messages;
