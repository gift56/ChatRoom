import React from "react";
import { BsCameraVideoFill, BsThreeDots } from "react-icons/bs";
import { FiUserPlus } from "react-icons/fi";
import { BiImageAdd, BiSend } from "react-icons/bi";
import { IoMdAttach } from "react-icons/io";
import Messages from "../Messages/Messages";
import CustomizeInput from "../inputs/CustomizeInput";
import Button from "../Button/Button";

const Chat = () => {
  return (
    <div className="w-[85%] flex flex-col h-screen">
      <div className="flex w-full items-center justify-between gap-4 bg-slate-300 shadow-sm h-14 px-5 flex-none">
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
      <div className="h-14 w-full bg-white p-4 flex-none flex items-center justify-between gap-2">
        <CustomizeInput
          type="text"
          name="reply"
          // value={values.reply}
          // onChange={handleChange}
          // onBlur={handleBlur}
          placeholder="Send a message..."
          className="bg-white h-[40px] w-full outline-none text-base text-gray-500 placeholder:text-gray-500"
        />
        <div className="flex items-center gap-3 justify-end">
          <span>
            <IoMdAttach />
          </span>
          <div>
            <CustomizeInput
              type="file"
              name="file"
              // value={values.file}
              // onChange={handleChange}
              className="hidden"
              accept="image/*"
              id="file"
            />
            <label htmlFor="file" className="cursor-pointer">
              <BiImageAdd />
            </label>
          </div>
          <Button text={<BiSend />} className="" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
