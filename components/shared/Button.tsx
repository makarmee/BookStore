import React from "react";

interface ButtonProps {
  icon?: React.ReactNode;
  name?: string;
  className?: string;
  onClick?: () => void;
}

export default function Button({
  icon,
  name,
  className,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center font-semibold ${className} p-2 px-4 h-9`}
    >
      <span
        className={`${
          !className?.includes("circleClicked") ? "max-sm:text-txt" : ""
        } text-bgc max-w-9 max-h-9`}
      >
        {icon}
      </span>
      <span
        className={`${
          className?.includes("vis") ? "flex" : "hidden"
        } sm:flex px-2`}
      >
        {name}
      </span>
    </button>
  );
}
