import React from "react";
import Link from "next/link";

export default function FooterLink() {
  return (
    <div className="flex flex-col md:flex-row justify-between text-center max-sm:border-none border-t-2 border-zinc-200 items-center h-fit gap-5 md:h-16 px-8 sm:px-12 max-sm:text-white max-sm:py-0 sm:py-6">
      <ul className="flex max-sm:flex-col gap-12 max-sm:gap-3 max-sm:text-lg">
        <Link href="#" className="max-sm:hidden">
          Privacy Policy
        </Link>
        <Link href="#" className="sm:hidden">
          Contacts
        </Link>
        <Link href="#">Terms of Use</Link>
        <Link href="#" className="max-sm:hidden">
          Sales & Refunds
        </Link>
        <Link href="#" className="sm:hidden">
          Privacy Policy
        </Link>
        <Link href="#" className="max-sm:hidden">
          Legal
        </Link>
        <Link href="#" className="sm:hidden">
          FAQ
        </Link>
      </ul>
      <ul className="flex gap-12 ">
        <Link href="#">
          <img
            src="_instagram.svg"
            className="h-6 w-6 max-sm:brightness-[100]"
          />
        </Link>
        <Link href="#">
          <img src="_google.svg" className="h-6 w-6 max-sm:brightness-[100]" />
        </Link>
        <Link href="#">
          <img
            src="_facebook.svg"
            className="h-6 w-6 max-sm:brightness-[100]"
          />
        </Link>
      </ul>
    </div>
  );
}
