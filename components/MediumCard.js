import Image from "next/image";
import React from "react";

const MediumCard = ({ img, title }) => {
  return (
    <div className="cursor-pointer hover:scale-105 transistion transform duration-300 ease-out">
      <div className="relative h-80 w-80">
        <Image src={img} alt="Banner" fill className="rounded-xl" sizes={80} />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
};

export default MediumCard;
