import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";
import Chats from "../Chats/Chats";
import { HiMoon, HiOutlineSun } from "react-icons/hi";
import { UserAuth } from "../../context/AuthContext";
import DeleteModal from "../Modals/DeleteModal";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../assets/chat.json";
import Lottie from "lottie-react";
import Button from "../Button/Button";
import { VscSignOut } from "react-icons/vsc";

const Sidebar = ({ setOpenChat }) => {
  const { logOut, user } = UserAuth();
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
      toast.success("Logged out Successfully!", {
        toastId: 1,
        autoClose: 1500,
        position: "bottom-right",
      });
    } catch (error) {
      console.log(error);
    }
  };
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
          className="text-gray-400"
          onClick={() => setTheme("light")}
        >
          <HiOutlineSun fontSize={20} />
        </button>
      );
    } else {
      return (
        <button
          type="button"
          className="text-gray-400"
          onClick={() => setTheme("dark")}
        >
          <HiMoon fontSize={20} />
        </button>
      );
    }
  };
  return (
    <div className="w-full lg:w-[30%] border-r bg-white h-screen flex items-start justify-start relative z-20 lg:z-0">
      <div className="h-full bg-gray-800 p-3 flex flex-col justify-between items-center">
        <div className="w-[30px] max-w-full sticky top-0">
          <Lottie
            animationData={logo}
            loop={true}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col gap-5 items-center">
          {renderThemeChangerIcon()}
          <img
            src={user?.photoURL}
            alt={user?.displayName}
            className="w-8 h-8 rounded-full object-cover border"
          />
          <Button
            onClick={() => setOpenModal(true)}
            text={<VscSignOut size={20} />}
            className="text-red-400 cursor-pointer"
          />
        </div>
      </div>
      <div className="w-full">
        <Navbar />
        <Search setOpenChat={setOpenChat} />
        <Chats setOpenChat={setOpenChat} />
      </div>
      <DeleteModal
        show={openModal}
        setShow={setOpenModal}
        handleLogout={handleLogout}
      />
    </div>
  );
};

export default Sidebar;
