import React, { useState } from "react";

const Message = ({ chat, id }) => {
  const [owner, setOwner] = useState(true);
  return (
    <div className={`flex gap-5 ${owner ? "flex-row" : "flex-row-reverse"}`}>
      <div>
        <img
          src="https://images.pexels.com/photos/10152592/pexels-photo-10152592.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="user_image"
          className="w-10 h-10 rounded-full object-cover border"
        />
      </div>
      <div className={`flex flex-col gap-1 relative max-w-[50%]`}>
        <div
          className={`w-full bg-red-400 p-4 flex flex-col gap-2  ${
            owner
              ? "rounded-tr-xl rounded-bl-xl rounded-br-xl"
              : "rounded-tl-xl rounded-bl-xl rounded-br-xl items-end justify-end"
          }`}
        >
          <p className="">Hello my na is john...</p>
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
            owner ? "text-start" : "text-end"
          } w-full`}
        >
          just now
        </span>
      </div>
    </div>
  );
};

export default Message;
