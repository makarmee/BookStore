import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  name: string;
  className?: string;
}

export default function Button({ children, name, className }: ButtonProps) {
  return (
    <button
      className={`bg-yellow-400 h-9 text-white px-4 rounded-lg flex items-center ${className}`}
    >
      <span>{children}</span>
      <span className="p-6">{name}</span>
    </button>
  );
}
