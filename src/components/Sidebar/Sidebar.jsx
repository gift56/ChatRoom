import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";
import Chats from "../Chats/Chats";

const Sidebar = ({ setOpenChat }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );
  
  const element = document.documentElement;
  function onWindowMatch() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }
  return (
    <div className="w-full lg:w-[25%] border-r bg-white h-screen flex items-start justify-start">
      <div className=""></div>
      <div className="w-full">
        <Navbar />
        <Search setOpenChat={setOpenChat} />
        <Chats setOpenChat={setOpenChat} />
      </div>
    </div>
  );
};

export default Sidebar;
