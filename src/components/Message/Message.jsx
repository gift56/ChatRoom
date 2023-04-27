import React from "react";

const Message = () => {
  return (
    <div className="flex gap-5">
      <div>
        <img
          src="https://images.pexels.com/photos/10152592/pexels-photo-10152592.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="user_image"
          className="w-8 h-8 rounded-full object-cover border"
        />
      </div>
      <div className={`flex flex-col gap-3 relative max-w-[80%]`}>
        <div>
        <p className="bg-red-400">Hello my na is john...</p>
        <img
          src="https://images.pexels.com/photos/10152592/pexels-photo-10152592.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="posted_image"
          className="object-cover border w-20 h-20 rounded-md"
        />
        </div>
        <span>just now</span>
      </div>
    </div>
  );
};

export default Message;
