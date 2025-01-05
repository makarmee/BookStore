import React from "react";
import Menu from "./Menu";

export default function Header() {
  return (
    <header className="flex justify-between flex-column items-end max-sm:h-24 h-20 max-sm:pb-4 pb-2 sm:px-8 max-sm:px-6 bg-bgc">
      <Menu />
    </header>
  );
}
