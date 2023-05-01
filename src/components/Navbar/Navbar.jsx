import React from "react";
import { UserAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = UserAuth();

  return (
    <>
      <div className="w-full h-[70px] flex items-center justify-between px-4 sticky top-0">
        <h2 className="text-2xl font-bold">Chats</h2>
        <div className="flex-2 flex items-center justify-end">
          <div className="flex items-center gap-1">
            <span className="truncate">{user?.displayName}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
