"use client";

import React, { useState } from "react";
import Button from "./Button";
import { Basket, Fav } from "@/icons";
import { BookProps } from "@/types";

export default function BookCard({ book }: { book: BookProps }) {
  const [isFav, setIsFav] = useState(false);
  const [isBought, setIsBought] = useState(false);

  return (
    <div className="w-[28rem] h-72 p-4 rounded-lg flex justify-between max-sm:gap-6 bg-bgc">
      <div className="h-full">
        <img src={book?.cover} className="h-full min-w-fit rounded-md" />
      </div>
      <div className="flex flex-col max-sm:gap-2 gap-4 items-start justify self-end w-52">
        <p className="line-clamp-1">{book?.name}</p>
        <p className="text-sm max-sm:line-clamp-3 line-clamp-2 text-dis">
          {book?.description}
        </p>
        <div className="flex h-10 gap-6 font-medium">
          <p>
            <span className="mr-0.5">$</span>
            {book?.price.toFixed(2)}
          </p>
          <div className="text-dis max-sm:hidden block">
            <div className="px-1">
              <span className="mr-0.5">$</span>
              {book?.offer_price.toFixed(2)}
            </div>
            <div className="h-[1px] bg-dis -translate-y-[11px] rounded-full"></div>
          </div>
        </div>
        <div className="flex gap-2.5">
          <Button
            onClick={() => setIsBought(!isBought)}
            icon={<Basket />}
            className={`${
              !isBought ? "max-sm:circle" : "max-sm:circleClicked"
            } square border-[1px]`}
            name="Add to Basket"
          />
          <Button
            onClick={() => setIsFav(!isFav)}
            className={`${
              !isFav ? "max-sm:circle" : "max-sm:circleClicked"
            } square border-[1px] max-sm:flex hidden`}
            icon={
              <Fav
                className={
                  !isFav ? "scale-90 fill-[#3217]" : "scale-100 fill-current"
                }
              />
            }
            name=""
          />
        </div>
      </div>
    </div>
  );
}
