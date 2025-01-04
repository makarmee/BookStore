import { list } from "postcss";
import React from "react";
import Button from "./Button";

interface CartProps {
  img: string;
  title: string;
  des: string;
  prices: any;
}

export default function Cart({ img, title, des, prices }: CartProps) {
  return (
    <div className="w-[28rem] h-72 p-4 rounded-lg flex justify-between">
      <div>
        <img src={img + ".png"} className="h-full rounded-md" />
      </div>
      <div className="flex flex-col gap-4 items-start self-end w-52">
        <p className="line-clamp-1">{title}</p>
        <p className="text-sm line-clamp-2 text-dis">{des}</p>
        <div className="flex h-10 gap-6">
          <p>${prices[0].toFixed(2)}</p>
          <p className="line-through text-dis">${prices[1].toFixed(2)}</p>
        </div>
        <Button
          children={<img src="nav/icon.svg" />}
          name="Add to Basket"
          nameClass="p-2"
        />
      </div>
    </div>
  );
}
