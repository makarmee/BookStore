import React from "react";
import Menu from "./Menu";

export default function Header() {
  return (
    <header className="flex justify-between flex-column items-end h-20 pb-2 px-8 sm:px-12">
      <Menu />
    </header>
  );
}
