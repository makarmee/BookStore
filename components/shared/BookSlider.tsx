"use client";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Autoplay, Keyboard, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import BookCard from "./BookCard";
import { BookProps } from "@/types";
import SliderBtns from "./SliderBtns";

export default function BooksSlider({
  books,
  sectionName,
}: {
  books: BookProps[];
  sectionName: string;
}) {
  return (
    <div className="relative">
      <SliderBtns prev={"prevEl" + sectionName} next={"nextEl" + sectionName} />

      <Swiper
        navigation={{
          prevEl: ".prevEl" + sectionName,
          nextEl: ".nextEl" + sectionName,
        }}
        slidesPerView="auto"
        modules={[Navigation, Keyboard, Autoplay]}
        autoplay={false}
        className="mySwiper"
        spaceBetween={40}
        loop={false}
      >
        {books?.map((book: BookProps) => (
          <SwiperSlide key={book?.name} style={{ width: "auto" }}>
            <div key={book.id}>
              <BookCard book={book} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
