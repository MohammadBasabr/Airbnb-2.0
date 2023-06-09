import React from "react";
import Image from "next/image";

type Props = {};

function Banner({}: Props) {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] xl:h-[1200px] 2xl:[1400px]">
      <Image
        fill
        style={{ objectFit: "cover" }}
        src="https://links.papareact.com/0fm"
        alt=""
          />
          <div className="absolute top-1/2 w-full text-center">
              <p className="text-sm sm:text-lg">Not sure where to go? Perfect...</p>
              <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full
              font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">I am flexible</button>
          </div>
    </div>
  );
}

export default Banner;
