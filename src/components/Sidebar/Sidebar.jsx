import React from "react";
import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";
import Chats from "../Chats/Chats";

const Sidebar = () => {
  return (
    <div className="w-full lg:w-[25%] border-r bg-white  h-screen ">
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
};

export default Sidebar;
