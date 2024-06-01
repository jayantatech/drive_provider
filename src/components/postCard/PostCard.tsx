"use client";
import { useEffect, useState } from "react";
import { CgHashtag } from "react-icons/cg";
import { MdOutlineCalendarMonth } from "react-icons/md";

const PostCard = () => {
  const [activeHover, setActiveHover] = useState<boolean>(false);
  useEffect(() => {
    console.log(activeHover);
  }, [activeHover]);
  return (
    <div
      className={`w-[380px] h-[348px]  max-lg:h-[294px] max-lg:w-[240px] max-md:h-[264px]  transition-all duration-300 max-md:w-[90%] p-6 max-lg:p-2 rounded-[6px] border-[2px] border-[#e5eaee] ${
        activeHover ? "bg-black" : "bg-white"
      }`}
      onMouseEnter={() => setActiveHover(true)}
      onMouseLeave={() => setActiveHover(false)}
    >
      <div className="w-full h-[40px] max-lg:h-[32px] flex flex-center justify-start pt-3 gap-1 ">
        <CgHashtag className="text-[18px] text-color_main " />
        <span
          className={`text-[13px] font-raleway font-bold hover:text-color_main transition-all duration-150 cursor-pointer ${
            activeHover ? "text-white" : null
          }`}
        >
          Technology
        </span>
      </div>
      <div className="w-full h-[88px] max-lg:h-[54px] my-2">
        <h4
          className={`text-[24px] font-bold font-raleway max-lg:text-[16px] transition-all duration-150 ${
            activeHover ? "text-white" : " text-black"
          }`}
        >
          {" "}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </h4>
      </div>
      <p
        className={`w-full h-[88px] max-lg:h-[118px] font-openSans text-[16px] max-lg:text-[14px]  max-md:h-[88px] transition-all duration-150 ${
          activeHover ? "text-white" : "text-[#071c1f]"
        }`}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore tenetur
        accusamus molestias maiores nulla tempore explicabo!
      </p>
      <div className="w-full h-[58px] max-lg:h-[38px] my-2 max-md:py-1 flex items-center justify-between border-t-[1px] border-[#e5eaee] max-md:h-[48px]">
        <div className="flex gap-1">
          <MdOutlineCalendarMonth className="text-[18px] text-color_main " />
          <span
            className={`text-[13px] font-raleway font-bold hover:text-color_main transition-all duration-150 cursor-pointer  ${
              activeHover ? "text-white" : "text-black"
            }`}
          >
            March 23, 2024
          </span>
        </div>
        <div className="flex gap-1">
          <span className="text-[13px] font-raleway font-bold hover:text-color_main transition-all duration-150 cursor-pointer text-color_main">
            Read More{" "}
          </span>
        </div>{" "}
      </div>
    </div>
  );
};

export default PostCard;
