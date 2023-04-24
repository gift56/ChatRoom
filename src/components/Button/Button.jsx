import React from "react";

const Button = ({ text, handleClick, className, disabled }) => {
  return (
    <button
      disabled={disabled}
      className={`px-2 py-1.5 flex-1 rounded-md ${className}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
