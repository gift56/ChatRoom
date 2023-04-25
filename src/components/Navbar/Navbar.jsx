import React from "react";
import Button from "../Button/Button";
import { VscSignOut } from "react-icons/vsc";

const Navbar = () => {
  return (
    <div className="w-full h-[70px] flex items-center justify-between px-4 sticky top-0">
      <h1 className="text-xl font-bold select-none">Chat Room</h1>
      <div className="flex items-center justify-end gap-2">
        <div className="flex items-center gap-2">
          <img src="" alt="" />
          <span>Gifted world</span>
        </div>
        <Button
          text={<VscSignOut size={20} />}
          className="text-red-400 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Navbar;
