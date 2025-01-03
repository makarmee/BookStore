import Link from "next/link";
import React from "react";
import Button from "../shared/Button";

export default function Menu() {
  return (
    <nav className="flex justify-between w-full h-9 gap-6 items-center">
      <div className="me-16 h-5">
        <img src="nav/menu.svg" className="w-full h-full" />
      </div>
      <div className="bg-slate-200 rounded-md w-72 flex flex-row py-2 h-9 me-auto">
        <img src="nav/search.svg" className="mx-4" />
        <input
          placeholder="What are you looking for ?"
          className="bg-transparent w-full"
        />
      </div>
      <Link href="" className="h-5">
        <img src="nav/account.svg" className="w-full h-full" />
      </Link>
      <Link href="" className="h-5">
        <img src="nav/favorite.svg" className="w-full h-full" />
      </Link>
      <Button
        children={<img src="nav/icon.svg" className="h-5" />}
        name="Basket"
      />
    </nav>
  );
}
