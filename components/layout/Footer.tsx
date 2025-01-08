import React from "react";
import FooterLink from "./FooterLink";
import Link from "next/link";
import Button from "../shared/Button";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-between gap-40 sm:gap-24 pt-8 w-full max-sm:p-4 max-sm:bg-[linear-gradient(120deg,#fc0,#FEAF38)]">
      <div className="flex sm:justify-center justify-between sm:px-8 max-sm:px-6 md:items-end items-center max-sm:hidden flex-col-reverse md:flex-row md:gap-12 gap-24">
        <div className="flex flex-col items-start md:gap-10 gap-20">
          <img src="Logo.svg" className="h-24 mx-auto md:mx-0 sm:scale-75" />
          <ul className="flex lg:gap-10 gap-6">
            <Link href="#">About</Link>
            <Link href="#">Features</Link>
            <Link href="#">Pricing</Link>
            <Link href="#">Gallery</Link>
            <Link href="#">Team</Link>
          </ul>
        </div>
        <div className="max-w-[28rem] h-28 flex flex-col justify-between">
          <p>
            Subscribe to stay tuned for new product and latest updates.
            Let&apos;s do it!
          </p>
          <div className="flex w-full">
            <input
              type="text"
              placeholder="Enter your email address"
              className="w-full bg-bgc border-gen border-2 rounded-tl-lg rounded-bl-lg pl-6"
            />
            <Button
              name="Subscribe"
              className="rounded-tl-none rounded-bl-none square"
            />
          </div>
        </div>
      </div>
      <FooterLink />
    </footer>
  );
}
