import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-500px xlg:h-[600px] 2xl:h-[700px]">
      <Image
        src="/GettyImages-1234731223.jpg"
        alt="Banner"
        fill
        className="object-cover"
      />
      <div className="absolute top-1/2 w-full text-center font-bold">
        {/* <p className="text-3xl text-red-400 ">
          Not sure of where to go? Perfect.
        </p> */}
        <button className="text-purple-500 bg-white px-10 py-4 rounded-full shadow-md font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          I'm flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
