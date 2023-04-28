import React, { useState, useEffect } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { UserAuth } from "../../context/AuthContext";

const Chats = ({ setOpenChat }) => {
  const [chats, setChats] = useState([]);
  const { user } = UserAuth();

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", user.uid), (doc) => {
        setChats(doc.data());
      });
      return () => {
        unsub();
      };
    };

    user.uid && getChats();
  }, [user.uid]);

  return (
    <div className="w-full h-[450px] overflow-y-auto overflow-x-hidden chats">
      {Object.entries(chats)?.map((chat) => (
        <div
          key={chat[0]}
          onClick={() => setOpenChat(true)}
          className="flex items-center justify-start w-full gap-2 hover:bg-gray-200 px-4 p-2 cursor-pointer transition-all duration-300"
        >
          <div className="lg:w-[20%]">
            <img
              src={chat[1].userInfo.photoURL}
              alt={chat[1].userInfo.displayName}
              className="w-12 h-12 rounded-full object-cover"
            />
          </div>
          <div className="w-[80%] flex flex-col gap-1 justify-start items-start">
            <h4 className="text-base font-normal">
              {chat[1].userInfo.displayName}
            </h4>
            <p className="text-sm text-gray-500">
              {chat[1].userInfo.lastMessage?.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
