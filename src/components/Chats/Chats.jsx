import React from "react";

const Chats = () => {
  return (
    <div className="w-full h-[450px] overflow-y-auto overflow-x-hidden chats">
      {[0, 1, 2, 3, 4,].map((item, i) => (
        <div
          key={i}
          className="flex items-center justify-start w-full gap-2 hover:bg-gray-200 px-4 p-2 cursor-pointer transition-all duration-300"
        >
          <div className="w-[20%]">
            <img
              src="https://images.pexels.com/photos/10152592/pexels-photo-10152592.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="user_image"
              className="w-12 h-12 rounded-full object-cover"
            />
          </div>
          <div className="w-[80%] flex flex-col gap-1 justify-start items-start">
            <h4 className="text-base font-normal">Jane Foster</h4>
            <p className="text-sm text-gray-500">
              Hello you have a new message...
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
