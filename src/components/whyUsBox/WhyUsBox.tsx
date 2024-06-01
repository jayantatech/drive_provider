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
      className="flex gap-6 w-full h-[100px] max-md:h-auto max-md:gap-3 items-center justify-center max-lg:justify-start "
      onMouseEnter={() => setActiveHover(true)}
      onMouseLeave={() => setActiveHover(false)}
    >
      <div
        className={`w-[82px] h-[82px] rounded-[6px] flex items-center justify-center  transition-all duration-200 text-color_main why_choose_number ${
          activeHover ? "bg-white" : "bg-black_light"
        }`}
      >
        <span>{number}</span>
      </div>
      <div className=" w-[78%] max-md:w-[78%] h-full flex items-start justify-center flex-col ">
        <h3 className="why_choose_title text-white pb-1">{title}</h3>
        <p className="sub_description ">{description}</p>
      </div>
    </div>
  );
};

export default WhyUsBox;
