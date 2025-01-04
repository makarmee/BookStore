import React from "react";
import Cart from "./shared/Cart";
import Heading from "./shared/Heading";

export default function ForYou() {
  return (
    <section className="mt-20 px-8 sm:px-12">
      <Heading content="Recommended for You" />
      <section className="overflow-x-auto relative">
        <div className="flex gap-10 w-fit">
          <Cart
            img="books-5"
            title="Pride and Protest"
            des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis interdum urna. Mauris semper dapibus massa a faucibus. Donec mollis elit enim, sed vehicula leo fringilla vel."
            prices={[15.5, 18.5]}
          />
          <Cart
            img="books-2"
            title="Forget a Mentor, Find a Sponser"
            des="Mauris volutpat porttitor purus. Nam vitae elit ac ipsum efficitur lacinia. Maecenas porttitor, metus vel rutrum eleifend, diam eros iaculis tellus, et vestibulum erat nisi at sapien."
            prices={[29.99, 32.99]}
          />
          <Cart
            img="books-6"
            title="The Midnight Library"
            des="In egestas dui non neque posuere, et facilisis metus elementum. Vestibulum vel magna eget odio mattis sodales at nec libero. Interdum et malesuada fames ac ante ipsum primis in faucibus."
            prices={[25.89, 27.99]}
          />
        </div>
        <button className="rounded-full w-9 h-9  bg-bgc drop-shadow absolute right-1 top-1/2 -translate-y-1/2 z-10">
          <img src="arrow.svg" className="mx-auto" />
        </button>
      </section>
    </section>
  );
}
