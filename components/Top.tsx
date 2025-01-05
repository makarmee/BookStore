import React from "react";
import Heading from "./shared/Heading";
import Cart from "./shared/Cart";

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
        <div className="flex gap-10 w-fit">
          <Cart
            img="books-3"
            title="The Time Has Come"
            des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis interdum urna. Mauris semper dapibus massa a faucibus. Donec mollis elit enim, sed vehicula leo fringilla vel."
            prices={[27.89, 30.99]}
          />{" "}
          <Cart
            img="books-1"
            title="I Want a Better Catastrophe"
            des="Mauris volutpat porttitor purus. Nam vitae elit ac ipsum efficitur lacinia. Maecenas porttitor, metus vel rutrum eleifend, diam eros iaculis tellus, et vestibulum erat nisi at sapien."
            prices={[26.99, 29.99]}
          />
          <Cart
            img="books-4"
            title="My Goverment Meants to Kill Me"
            des="In egestas dui non neque posuere, et facilisis metus elementum. Vestibulum vel magna eget odio mattis sodales at nec libero. Interdum et malesuada fames ac ante ipsum primis in faucibus."
            prices={[25.89, 27.99]}
          />
        </div>
        <button className="rounded-full w-9 h-9 max-sm:hidden block bg-bgc drop-shadow absolute right-1 top-1/2 -translate-y-1/2 z-10">
          <img src="arrow.svg" className="mx-auto" />
        </button>
      </section>
    </section>
  );
}
