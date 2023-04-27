import { exploreData } from "@/pages";
import Image from "next/image";
import React from "react";

type Props = { item: exploreData };

function SmallCard({ item }: Props) {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-lg cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      {/* left */}
      <div className="relative h-16 aspect-square">
        <Image className="rounded-lg" fill src={item.img} alt="" />
      </div>
      <div>
        <h2>{item.location}</h2>
        <h3 className="text-gray-500">{item.distance}</h3>
      </div>
    </div>
  );
}

export default SmallCard;
