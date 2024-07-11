import React from "react";

type ButtonProps = {
  text: string;
};

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="bg-black h-9 w-22 border border-black text-white text-sm hover:text-emerald-900  hover:border-black py-2 px-4 rounded transition-colors duration-300 ease-in-out hover:bg-emerald-100">
      {text}
    </button>
  );
};

export default Button;
