import React from "react";

const Chats = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-start w-full gap-2 hover:bg-gray-300 px-4 p-2 cursor-pointer">
        <img
          src="https://images.pexels.com/photos/10152592/pexels-photo-10152592.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="user_image"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="w-[90%] flex flex-col gap-1 justify-start items-start bg-red-300">
          <h4 className="text-base font-normal">Jane Foster</h4>
          <p>Hello you have a new message...</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
