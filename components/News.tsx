import React from "react";
import Heading from "./shared/Heading";
import { news } from "@/data/news";
import NewsSlider from "./shared/NewsSlider";

export default function News() {
  return (
    <section className="max-sm:my-10 mt-28 mb-32 sm:px-8 max-sm:pl-6 max-sm:">
      <Heading content="News" />
      <section className="overflow-x-auto relative">
        <NewsSlider news={news} />
      </section>
    </section>
  );
}
