import { card } from "@/pages";
import Image from "next/image";
import React from "react";

type Props = { item: card };

function MediumCard({ item }: Props) {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-80 aspect-square">
        <Image className="rounded-xl" fill src={item.img} alt="" />
      </div>
      <h3 className="text-2xl mt-3">{item.title}</h3>
    </div>
  );
}

export default MediumCard;
