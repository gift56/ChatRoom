import React from "react";
import Message from "../Message/Message";

const Messages = () => {
  return (
    <div className="bg-gray-200 p-4">
      {[0, 1, 2, 3, 4, 5].map((item, i) => (
        <Message />
      ))}
    </div>
  );
};

export default Messages;
