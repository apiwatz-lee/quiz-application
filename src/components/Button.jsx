import React from "react";

const Button = ({ onClick, children }) => {
  return (
    <button
      className=" mb-2 p-2 bg-orange-400 rounded-md w-[300px] h-[50px] border-none cursor-pointer font-medium hover:bg-gray-700 hover:text-white"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
