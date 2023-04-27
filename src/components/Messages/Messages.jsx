import React from "react";
import Message from "../Message/Message";

const Messages = () => {
  return (
    <div className="bg-gray-200 p-4 h-[520px] overflow-y-auto overflow-x-hidden message flex flex-col gap-3">
      {[0, 1, 2,].map((item, i) => (
        <Message />
      ))}
    </div>
  );
};

export default Messages;
