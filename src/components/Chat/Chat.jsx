import React from "react";
import { BsCameraVideoFill, BsThreeDots } from "react-icons/bs";
import { FiUserPlus } from "react-icons/fi";
import Messages from "../Messages/Messages";

const Chat = () => {
  return (
    <div className="w-[85%]">
      <div className="flex w-full items-center justify-between gap-4 bg-slate-300 shadow-sm h-14 px-5">
        <h4 className="text-xl font-medium">Jane Foster</h4>
        <div className="flex items-center justify-end gap-4">
          <span>
            <BsCameraVideoFill
              size={18}
              className="text-gray-600 cursor-pointer"
            />
          </span>
          <span>
            <FiUserPlus size={18} className="text-gray-600 cursor-pointer " />
          </span>
          <span>
            <BsThreeDots size={18} className="text-gray-600 cursor-pointer" />
          </span>
        </div>
      </div>
      <Messages />
      <div>Input</div>
    </div>
  );
};

export default Chat;
