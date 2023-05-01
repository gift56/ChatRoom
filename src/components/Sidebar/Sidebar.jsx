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

const Sidebar = ({ setOpenChat, theme, setTheme }) => {
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

  const renderThemeChangerIcon = () => {
    if (theme === "dark") {
      return (
      <button
          type="button"
          className="text-gray-400 outline-none border-none"
          onClick={() => setTheme("light")}
        >
          <HiOutlineSun fontSize={20} />
        </button>
      );
    } else {
      return (
        <button
          type="button"
          className="text-gray-400 outline-none border-none"
          onClick={() => setTheme("dark")}
        >
          <HiMoon fontSize={20} />
        </button>
      );
    }
  };
  return (
    <>
      <div className="w-full lg:w-[30%] border-r bg-white dark:border-slate-500 dark:bg-slate-800 h-screen flex items-start justify-start relative z-20 lg:z-0 transition-all duration-300">
        <div className="h-full bg-gray-800 p-3 flex flex-col justify-between items-center border-gray-500 border-r">
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
      </div>
      <DeleteModal
        show={openModal}
        setShow={setOpenModal}
        handleLogout={handleLogout}
      />
    </>
  );
};

export default Sidebar;
