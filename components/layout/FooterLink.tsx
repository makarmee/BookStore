import React from "react";
import Link from "next/link";

export default function FooterLink() {
  return (
    <div className="flex justify-between border-t-2 items-center h-16 px-8 sm:px-12">
      <ul className="flex gap-12">
        <Link href="">Privacy Policy</Link>
        <Link href="">Terms of Use</Link>
        <Link href="">Sales & Refunds</Link>
        <Link href="">Legal</Link>
      </ul>
      <ul className="flex gap-12">
        <Link href="">
          <img src="_instagram.svg" className="h-6 w-6" />
        </Link>
        <Link href="">
          <img src="_google.svg" className="h-6 w-6" />
        </Link>
        <Link href="">
          <img src="_facebook.svg" className="h-6 w-6" />
        </Link>
      </ul>
    </div>
  );
}
