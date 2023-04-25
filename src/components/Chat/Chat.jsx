import React from "react";
import { BsCameraVideoFill, BsThreeDots } from "react-icons/bs";
import { FiUserPlus } from "react-icons/fi";

const Chat = () => {
  return (
    <div className="w-[85%]">
      <div className="flex w-full items-center justify-between gap-4 bg-slate-300 shadow-sm h-14 px-5">
        <h4 className="text-xl font-medium">Jane Foster</h4>
        <div className="flex items-center justify-end gap-4">
          <span>
            <BsCameraVideoFill
              size={18}
              className="text-gray-600 cursor-pointer dark:text-gray-300"
            />
          </span>
          <span>
            <FiUserPlus size={18} className="text-gray-600 cursor-pointer dark:text-gray-300" />
          </span>
          <span>
            <BsThreeDots size={18} className="text-gray-600 cursor-pointer dark:text-gray-300" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Chat;
