import Link from "next/link";
import React from "react";
import Button from "../shared/Button";
import { Basket } from "@/icons";

export default function Menu() {
  return (
    <nav className="flex justify-between w-full h-9 gap-6 items-center">
      <div className="max-sm:me-6 md:me-16 min-h-5 min-w-5">
        <img src="/nav/Menu.svg" className="w-full h-full" />
      </div>
      <div className="bg-zinc-200 rounded-md w-72 flex flex-row py-2 h-9 me-auto">
        <img src="/nav/Search.svg" className="mx-4" />
        <input
          placeholder="What are you looking for ?"
          className="bg-transparent w-full"
        />
      </div>
      <Link href="#" className="h-5 min-w-5 max-sm:hidden">
        <img src="/nav/Account.svg" className="w-full h-full" />
      </Link>
      <Link href="#" className="h-5 min-w-5 max-sm:hidden">
        <img src="/nav/Favorite.svg" className="w-full h-full" />
      </Link>
      <Button
        className="max-sm:circle square"
        icon={<Basket />}
        name="Basket"
      />
    </nav>
  );
}
