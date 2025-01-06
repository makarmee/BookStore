import React from "react";
import Heading from "./shared/Heading";
import BooksSlider from "./shared/BookSlider";
import { books } from "@/data/books";

export default function ForYou() {
  return (
    <section className="max-sm:mt-10 mt-20 sm:px-8 max-sm:pl-6">
      <Heading content="Recommended for You" />
      <section className="overflow-x-auto relative">
        <BooksSlider books={books} sectionName="recommended" />
      </section>
    </section>
  );
}
