"use client";
import { list } from "postcss";
import React, { useState } from "react";
import Button from "./Button";
import { Basket, Fav } from "@/icons";

interface CartProps {
  img: string;
  title: string;
  des: string;
  prices: any;
}

export default function Cart({ img, title, des, prices }: CartProps) {
  const [isFav, setIsFav] = useState(false);
  return (
    <div className="w-[28rem] h-72 p-4 rounded-lg flex justify-between max-sm:gap-6 bg-bgc">
      <div className="h-full">
        <img src={img + ".png"} className="h-full min-w-fit rounded-md" />
      </div>
      <div className="flex flex-col max-sm:gap-2 gap-4 items-start justify self-end w-52">
        <p className="line-clamp-1">{title}</p>
        <p className="text-sm max-sm:line-clamp-3 line-clamp-2 text-dis">
          {des}
        </p>
        <div className="flex h-10 gap-6 font-medium">
          <p>
            <span className="mr-0.5">$</span>
            {prices[0].toFixed(2)}
          </p>
          <div className="text-dis max-sm:hidden block">
            <div className="px-1">
              <span className="mr-0.5">$</span>
              {prices[1].toFixed(2)}
            </div>
            <div className="h-[1px] bg-dis -translate-y-[11px] rounded-full"></div>
          </div>
        </div>
        <div className="flex gap-2.5">
          <Button children={<Basket />} name="Add to Basket" px="px-2" />
          <Button
            onClick={() => setIsFav(!isFav)}
            px="px-0"
            className="h-9 w-9 max-sm:inline-flex hidden"
            children={
              <Fav
                // fill="#3217"
                // line="transparent"
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
