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
      <div>
        <p>Hello my na is john...</p>
        <img
          src="https://images.pexels.com/photos/10152592/pexels-photo-10152592.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="posted_image"
          className="object-cover border"
        />
        <span>just now</span>
      </div>
    </div>
  );
};

export default Message;
