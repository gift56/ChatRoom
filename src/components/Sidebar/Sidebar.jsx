import React from "react";
import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";
import Chats from "../Chats/Chats";

const Sidebar = ({ setOpenChat }) => {
  return (
    <div className="w-full lg:w-[25%] border-r bg-white h-screen flex items-start">
      <div className="w-full">
        <Navbar />
        <Search setOpenChat={setOpenChat} />
        <Chats setOpenChat={setOpenChat} />
      </div>
    </div>
  );
};

export default Sidebar;
