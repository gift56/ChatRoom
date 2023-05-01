import React, { useEffect, useRef } from "react";
import { UserAuth } from "../../context/AuthContext";
import { UserChat } from "../../context/ChatsContext";

const Message = ({ chat }) => {
  const { user } = UserAuth();
  const { data } = UserChat();

  const ref = useRef();
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  return (
    <div
      ref={ref}
      className={`flex gap-5 ${
        chat.senderId === user.uid ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div>
        <img
          src={chat.senderId === user.uid ? user.photoURL : data.user.photoURL}
          alt="user_image"
          className="w-10 h-10 rounded-full object-cover border"
        />
      </div>
      <div className={`flex flex-col gap-1 relative lg:max-w-[50%] max-w-full`}>
        <div
          className={`w-full p-4 flex flex-col gap-2  ${
            chat.senderId === user.uid
              ? "rounded-tl-xl rounded-bl-xl rounded-br-xl items-end justify-end bg-primary text-white"
              : "rounded-tr-xl rounded-bl-xl rounded-br-xl bg-white/70 bg-slate-800"
          }`}
        >
          <p className="w-full">{chat.text}</p>
          {chat.img && (
            <div className="w-full flex items-center gap-1 flex-wrap">
              <img
                src={chat.img}
                alt={chat.img}
                className="object-cover border w-80 h-80 rounded-md"
              />
            </div>
          )}
        </div>
        <span
          className={`text-xs text-gray-500 ${
            chat.senderId === user.uid ? "text-end" : "text-start"
          } w-full`}
        >
          just now
        </span>
      </div>
    </div>
  );
};

export default Message;
