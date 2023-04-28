import React, { useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import { UserChat } from "../../context/ChatsContext";

const Message = ({ chat }) => {
  const { user } = UserAuth();
  const { data } = UserChat();

  return (
    <div className={`flex gap-5 ${chat.senderId === user.uid  ? "flex-row" : "flex-row-reverse"}`}>
      <div>
        <img
          src={chat.senderId === user.uid ? user.photoURL : data.user.photoURL}
          alt="user_image"
          className="w-10 h-10 rounded-full object-cover border"
        />
      </div>
      <div className={`flex flex-col gap-1 relative max-w-[50%]`}>
        <div
          className={`w-full p-4 flex flex-col gap-2  ${
            chat.senderId === user.uid 
              ? "rounded-tr-xl rounded-bl-xl rounded-br-xl bg-white/70"
              : "rounded-tl-xl rounded-bl-xl rounded-br-xl items-end justify-end bg-primary text-white"
          }`}
        >
          <p className="w-full">Hello my na is john...</p>
          <div className="w-full flex items-center gap-1 flex-wrap">
            <img
              src="https://images.pexels.com/photos/10152592/pexels-photo-10152592.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="posted_image"
              className="object-cover border w-20 h-20 rounded-md"
            />
          </div>
        </div>
        <span
          className={`text-xs text-gray-500 ${
            chat.senderId === user.uid  ? "text-start" : "text-end"
          } w-full`}
        >
          just now
        </span>
      </div>
    </div>
  );
};

export default Message;
