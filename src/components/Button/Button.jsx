import React from "react";

const Button = ({ text, onClick, className, disabled, type }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`px-2 py-1.5 flex-1 rounded-md ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
