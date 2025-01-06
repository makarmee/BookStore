"use client";

import React from "react";
import Heading from "./Heading";
import { NewsProps } from "@/types";

export default function NewsCard({ news }: { news: NewsProps }) {
  return (
    <section className="max-sm:w-[490px] w-[580px] flex justify-between gap-11 p-5 rounded-xl bg-bgc items-center">
      <div className="w-fit pl-4">
        <Heading className="text-base" content={news.title} />
        <div className="h-0.5 w-14 my-5 bg-gen"></div>
        <p className="text-sm line-clamp-4">{news.description}</p>
      </div>
      <div className="min-w-fit">
        <img src={news.img} className="w-full h-full" />
        <p></p>
      </div>
    </section>
  );
}
