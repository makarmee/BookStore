import React from "react";
import Heading from "./shared/Heading";
import { books } from "@/data/books";
import BooksSlider from "./shared/BookSlider";

export default function Top() {
  return (
    <section className="max-sm:mt-5 mt-20 sm:px-8 max-sm:pl-6">
      <Heading content="Top Sellers" />
      <select className="h-9 max-sm:mx-0 m-2 mb-5 w-44 px-4 border-[1px] rounded-lg max-sm:bg-bgm bg-bgc">
        <option value="horror">Fiction</option>
        <option value="romance">Romance</option>
        <option value="mystery">Mystery</option>
        <option value="horror">Horror</option>
      </select>
      <section className="overflow-x-auto relative">
        <BooksSlider books={books} sectionName="top" />
      </section>
    </section>
  );
}
