import React from "react";
import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";

const Sidebar = () => {
  return (
    <div className="w-[25%] border-r bg-white  h-screen ">
      <Navbar />
      <Search />
      
    </div>
  );
};

export default Sidebar;
