import React, { useState } from "react";
import { Chat, Sidebar } from "../components";

const Homepage = ({ theme, setTheme }) => {
  const [openChat, setOpenChat] = useState(false);
  return (
    <div className="w-full flex relative items-center justify-center h-screen overflow-hidden">
      <div className="w-full h-full flex items-start overflow-hidden">
        <Sidebar setOpenChat={setOpenChat} setTheme={setTheme} theme={theme} />
        <Chat show={openChat} setShow={setOpenChat} />
      </div>
    </div>
  );
};

export default Homepage;
