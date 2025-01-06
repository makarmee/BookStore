"use client";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Autoplay, Keyboard, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import NewsCard from "./NewsCard";
import { NewsProps } from "@/types";
import SliderBtns from "./SliderBtns";

export default function NewsSlider({ news }: { news: NewsProps[] }) {
  return (
    <div className="relative">
      <SliderBtns prev={"prevEl"} next={"nextEl"} />

      <Swiper
        navigation={{
          prevEl: ".prevEl",
          nextEl: ".nextEl",
        }}
        slidesPerView="auto"
        modules={[Navigation, Keyboard, Autoplay]}
        autoplay={false}
        className="mySwiper"
        spaceBetween={40}
        loop={false}
      >
        {news?.map((news: NewsProps) => (
          <SwiperSlide key={news?.title} style={{ width: "auto" }}>
            <div key={news.id}>
              <NewsCard news={news} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
