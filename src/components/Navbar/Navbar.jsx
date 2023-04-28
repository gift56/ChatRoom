import React from "react";
import Button from "../Button/Button";
import { VscSignOut } from "react-icons/vsc";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = () => {
  const { logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
      toast.success("Logged out Successfully!", {
        toastId: 1,
        autoClose: 1500,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full h-[70px] flex items-center justify-between px-4 sticky top-0">
      <h1 className="text-xl font-bold select-none">Chat Room</h1>
      <div className="flex items-center justify-end">
        <div className="flex items-center gap-1">
          <img
            src="https://images.pexels.com/photos/10152592/pexels-photo-10152592.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="user_image"
            className="w-8 h-8 rounded-full object-cover border"
          />
          <span>Gift will...</span>
        </div>
        <Button
          onClick={handleLogout}
          text={<VscSignOut size={20} />}
          className="text-red-400 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Navbar;
