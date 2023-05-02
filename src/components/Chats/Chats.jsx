import React, { useState, useEffect } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { UserAuth } from "../../context/AuthContext";
import { UserChat } from "../../context/ChatsContext";

const Chats = ({ setOpenChat }) => {
  const [chats, setChats] = useState([]);
  const { user } = UserAuth();
  const { dispatch } = UserChat();

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

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  return (
    <div className="w-full h-[450px] overflow-y-auto overflow-x-hidden">
      {Object.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => (
          <div
            key={chat[0]}
            onClick={() => {
              setOpenChat(true);
              handleSelect(chat[1].userInfo);
            }}
            className="flex items-center justify-start w-full gap-2 hover:bg-gray-200 dark:hover:bg-slate-600 px-4 p-2 cursor-pointer transition-all duration-300"
          >
            <div className="lg:w-[20%]">
              <img
                src={chat[1].userInfo.photoURL}
                alt={chat[1].userInfo.displayName}
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
            <div className="w-[80%] flex flex-col justify-start items-start">
              <h4 className="text-base font-medium">
                {chat[1].userInfo.displayName}
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {chat[1].lastMessage?.text}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Chats;
