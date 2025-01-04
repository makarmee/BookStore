import React from "react";
import Heading from "./shared/Heading";
import NewsCart from "./shared/NewsCart";

export default function News() {
  return (
    <section className="mt-28 mb-32 px-8 sm:px-12">
      <Heading content="News" />
      <section className="overflow-x-auto relative">
        <div className="flex gap-5 w-fit">
          <NewsCart
            img="news-1"
            title="The Books You Need to Read in 2023"
            des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nunc eros, hendrerit ac pulvinar non, sagittis in dui. Mauris placerat vehicula nibh, vel posuere magna pellentesque rutrum. Morbi nec fringilla mauris. Morbi commodo neque nec odio finibus varius."
          />
          <NewsCart
            img="news-2"
            title="February's Best Children's Books"
            des="Praesent tempor fringilla dui, eget ultrices ante tempus lacinia. Nulla bibendum erat vel porta fringilla. Sed tortor lacus, pellentesque eu lacinia nec, posuere at nisl. Aliquam erat volutpat. Aliquam urna nulla, lacinia accumsan imperdiet eget, tempus sed sem. Sed ornare enim nulla, eget auctor ante tristique at."
          />
          <NewsCart
            img="news-3"
            title="What to Read Next After Damascus Station"
            des="Morbi sit amet sapien at ipsum sollicitudin suscipit. Pellentesque et felis quis massa efficitur tristique sit amet quis nunc. Integer ultrices urna vitae dui sagittis suscipit. Nam et odio molestie, varius metus non, rutrum lacus. Ut laoreet velit velit, sed placerat ipsum sagittis in. Maecenas scelerisque magna mauris, vitae finibus ante euismod eleifend."
          />
          <NewsCart
            img="news-4"
            title="The Best Dark Academia Books"
            des="Phasellus eu est condimentum, venenatis leo vel, vestibulum massa. Phasellus volutpat lacinia justo ac porttitor. Aliquam erat volutpat. Praesent non rhoncus ligula. Sed blandit, erat quis congue sagittis, ante sapien tristique nibh, vitae aliquam felis libero at ipsum. Quisque vulputate, dui vitae dignissim dapibus, urna est pretium enim, fermentum tempus augue risus nec felis."
          />
        </div>
        <button className="rounded-full w-9 h-9  bg-bgc drop-shadow absolute right-1 top-1/2 -translate-y-1/2 z-10">
          <img src="arrow.svg" className="mx-auto" />
        </button>
      </section>
    </section>
  );
}
