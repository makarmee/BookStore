import React from "react";
import FooterLink from "./FooterLink";
import Link from "next/link";
import Button from "../shared/Button";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-between gap-40 pt-8 w-full max-sm:p-4 max-sm:bg-[linear-gradient(120deg,#fc0,#FEAF38)]">
      <div className="flex justify-between sm:px-8 max-sm:px-6 items-end sm:items-center max-sm:hidden flex-col md:flex-row sm:gap-24">
        <div className="md:flex flex-col items-start gap-10 sm:hidden">
          <img src="Logo.svg" className="h-24" />
          <ul className="flex gap-10">
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
