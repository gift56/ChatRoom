import React from "react";
import { BsCameraVideoFill, BsThreeDots } from "react-icons/bs";
import { FiUserPlus } from "react-icons/fi";
import { BiImageAdd, BiSend } from "react-icons/bi";
import { IoMdAttach } from "react-icons/io";
import { MdArrowBack } from "react-icons/md";
import Messages from "../Messages/Messages";
import CustomizeInput from "../inputs/CustomizeInput";
import Button from "../Button/Button";

const Chat = ({ show, setShow }) => {
  return (
    <div
      className={`lg:w-[85%] flex flex-col h-screen absolute top-0 w-full lg:relative lg:right-0 ${
        show ? "right-0" : "right-[-100%]"
      }`}
    >
      <div className="flex w-full items-center justify-between gap-4 bg-white shadow-sm h-14 px-5 flex-none">
        <div className="flex items-center justify-start gap-2">
          <span onClick={() => setShow(false)} className="lg:hidden">
            <MdArrowBack className="text-gray-500" size={20} />
          </span>
          <img
            src="https://images.pexels.com/photos/10152592/pexels-photo-10152592.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            className="w-10 h-10 rounded-full object-cover border"
            alt="profile_pitcure"
          />
          <h4 className="md:text-xl text-base font-medium">Jane Foster</h4>
        </div>
        <div className="flex items-center justify-end gap-4">
          <span>
            <BsCameraVideoFill
              size={18}
              className="text-gray-600 cursor-pointer hover:text-primary transition-all duration-300"
            />
          </span>
          <span>
            <FiUserPlus
              size={18}
              className="text-gray-600 cursor-pointer hover:text-primary transition-all duration-300"
            />
          </span>
          <span>
            <BsThreeDots
              size={18}
              className="text-gray-600 cursor-pointer hover:text-primary transition-all duration-300"
            />
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
            <IoMdAttach size={23} className="text-gray-500" />
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
              <BiImageAdd size={23} className="text-gray-500" />
            </label>
          </div>
          <Button
            text={<BiSend size={25} />}
            className="bg-primary text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
