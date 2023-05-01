import React, { useState } from "react";
import Button from "../Button/Button";
import { VscSignOut } from "react-icons/vsc";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../assets/chat.json";
import Lottie from "lottie-react";
import DeleteModal from "../Modals/DeleteModal";

const Navbar = () => {
  const { logOut, user } = UserAuth();
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

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
  return (
    <>
      <div className="w-full h-[70px] flex items-center justify-between px-4 sticky top-0">
        <div className="flex-1 max-w-full sticky top-0">
          <Lottie animationData={logo} loop={true} />
        </div>
        <div className="flex-2 flex items-center justify-end">
          <div className="flex items-center gap-1">
            <img
              src={user?.photoURL}
              alt={user?.displayName}
              className="w-8 h-8 rounded-full object-cover border"
            />
            <span className="truncate">{user?.displayName}</span>
          </div>
          <Button
            onClick={handleLogout}
            text={<VscSignOut size={20} />}
            className="text-red-400 cursor-pointer"
          />
        </div>
      </div>
      <DeleteModal show={openModal} setShow={setOpenModal} />
    </>
  );
};

export default Navbar;
