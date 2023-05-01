import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";
import Chats from "../Chats/Chats";
import { HiMoon, HiOutlineSun } from "react-icons/hi";

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
  onWindowMatch();
  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;

      default:
        localStorage.removeItem("theme");
        onWindowMatch();
        break;
    }
  }, [theme]);

  const renderThemeChangerIcon = () => {
    if (theme === "dark") {
      return (
        <button
          type="button"
          className="text-darkColor"
          onClick={() => setTheme("light")}
        >
          <HiOutlineSun fontSize={17} />
        </button>
      );
    } else {
      return (
        <button
          type="button"
          className="text-darkColor"
          onClick={() => setTheme("dark")}
        >
          <HiMoon fontSize={16} />
        </button>
      );
    }
  };
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
