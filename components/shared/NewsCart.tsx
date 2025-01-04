import React from "react";
import Heading from "./Heading";

interface NewsProps {
  title: string;
  des: string;
  img: string;
}

export default function NewsCart({ title, des, img }: NewsProps) {
  return (
    <section className="w-[580px] flex justify-between gap-11 p-5 rounded-xl">
      <div className="w-fit pl-4">
        <Heading className="text-base" content={title} />
        <div className="h-0.5 w-14 my-5 bg-gen"></div>
        <p className="text-sm line-clamp-4">{des}</p>
      </div>
      <div className="min-w-fit">
        <img src={img + ".png"} className="w-full h-full" />
        <p></p>
      </div>
    </section>
  );
}
