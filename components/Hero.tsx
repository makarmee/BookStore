import React from "react";
import Button from "./shared/Button";
import Heading from "./shared/Heading";

export default function Hero() {
  return (
    <section className="hidden md:flex items-center mt-20 justify-between px-8 sm:px-12">
      <div className="w-1/2 flex flex-col gap-12 items-start">
        <Heading
          content="New Releases This Week"
          className="text-5xl font-sem"
        />
        <p className="w-3/4">
          It is time to update your reading list with some of the latest and
          greatest releases in the literary world. From heart-pumping thrillers
          to captivating memoirs, this week&apos;s new releases offer something
          for everyone
        </p>
        <Button name="Subscribe" />
      </div>
      <div className="relative flex items-center">
        <img
          src="books-1.png"
          className="w-72 shadow-[0_10px_28px_-16px] shadow-red-900"
        />
        <img
          src="books-2.png"
          className="w-64  shadow-[0_10px_28px_-16px] shadow-teal-900 -ml-32 -translate-y-2 -z-10"
        />
        <img
          src="books-3.png"
          className="w-56 shadow-[0_10px_28px_-16px] shadow-sky-900 -ml-28 -translate-y-2 -z-20"
        />
      </div>
    </section>
  );
}
