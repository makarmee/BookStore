import React from "react";
import Button from "./shared/Button";
import Heading from "./shared/Heading";

export default function Hero() {
  return (
    <section className="hidden md:flex items-center mt-20 justify-between px-8 sm:px-12 md:gap-6 gap-12">
      <div className="w-3/5 lg:w-1/2 flex flex-col lg:gap-12 gap-6 items-start">
        <Heading
          content="New Releases This Week"
          className="lg:text-5xl text-4xl"
        />
        <p className="w-3/4 md:w-full">
          It is time to update your reading list with some of the latest and
          greatest releases in the literary world. From heart-pumping thrillers
          to captivating memoirs, this week&apos;s new releases offer something
          for everyone
        </p>
        <Button className="square" name="Subscribe" />
      </div>
      <div className="relative flex items-center scale-[85%] lg:scale-100">
        <img
          src="Books-1.png"
          className="w-72 shadow-[0_10px_28px_-16px] shadow-red-900"
        />
        <img
          src="Books-2.png"
          className="w-64  shadow-[0_10px_28px_-16px] shadow-teal-900 xl:-ml-32 lg:-ml-40 -ml-48 -translate-y-2 -z-10"
        />
        <img
          src="Books-3.png"
          className="w-56 shadow-[0_10px_28px_-16px] shadow-sky-900 xl:-ml-28  lg:-ml-36 -ml-44 -translate-y-2 -z-20"
        />
      </div>
    </section>
  );
}
