"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaCircleChevronLeft } from "react-icons/fa6";

export const UserProfileButton = ({ userInfo }: { userInfo: object }) => {
  const [activeProfile, setActiveProfile] = useState(false);

  useEffect(() => {
    console.log("activeProfile value:", activeProfile);
  }, [activeProfile]);

  const profileClicked = () => {
    setActiveProfile((prevActiveProfile) => !prevActiveProfile);
  };
  return (
    <div
      className=" relative w-[55px] h-[55px] max-lg:w-[50px] max-lg:h-[50px] rounded-[5px] border-[3px] border-blue_main cursor-pointer overflow-hidden "
      onClick={() => profileClicked()}
    >
      <span
        className={`absolute bottom-0 right-0 transition-all duration-200 z-10 text-white ${
          activeProfile ? "rotate-90" : "-rotate-90"
        }`}
      >
        <FaCircleChevronLeft className="text-[18px] max-lg:text-[16px] " />
      </span>
      <div className=" w-full h-full scale-105 rounded-[2px] overflow-hidden">
        {userInfo?.image ? (
          <Image
            src={userInfo?.image}
            alt="image data"
            width={60}
            height={60}
          />
        ) : null}
      </div>
    </div>
  );
};
