import React from "react";
import { Chat, Sidebar } from "../components";

const Homepage = () => {
  return (
    <div className="w-full flex items-center justify-center h-screen overflow-hidden">
      <div className="w-full h-full flex items-start overflow-hidden">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Homepage;
