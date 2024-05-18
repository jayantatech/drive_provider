"use client";
import React, { useEffect, useState } from "react";

type Type = {
  number: string;
  title: string;
  description: string;
};

const WhyUsBox = ({ number, title, description }: Type) => {
  const [activeHover, setActiveHover] = useState<boolean>(false);

  return (
    <div
      className="flex gap-6 w-full h-[110px] max-md:h-auto max-md:gap-3 items-center justify-center max-lg:justify-start"
      onMouseEnter={() => setActiveHover(true)}
      onMouseLeave={() => setActiveHover(false)}
    >
      <div
        className={`w-[82px] h-[82px] rounded-full flex items-center justify-center text-[36px] font-[Poppins] transition-all duration-200 text-color_main font-semibold ${
          activeHover ? "bg-white" : "bg-black_light"
        }`}
      >
        <span>{number}</span>
      </div>
      <div className=" w-[78%] max-md:w-[70%] h-full ">
        <h3 className=" text-[22px] font-semibold font-[Roboto] text-white pb-1">
          {title}
        </h3>
        <p className="font-[Poppins] text-[#CDCDCD]">{description}</p>
      </div>
    </div>
  );
};

export default WhyUsBox;
