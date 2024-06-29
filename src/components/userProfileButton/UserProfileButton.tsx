"use client";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { FaCircleChevronLeft } from "react-icons/fa6";

export const UserProfileButton = ({
  userImage,
}: {
  userImage: string | StaticImageData;
}) => {
  const [activeProfile, setActiveProfile] = useState(false);

  useEffect(() => {
    // console.log("activeProfile value:", activeProfile);
  }, [activeProfile]);

  const profileClicked = () => {
    setActiveProfile((prevActiveProfile) => !prevActiveProfile);
  };
  return (
    <div
      className=" relative w-[46px] h-[46px] max-lg:w-[50px] max-lg:h-[50px] border-[3px] rounded-full cursor-pointer"
      onClick={() => profileClicked()}
    >
      <span
        className={`absolute bottom-0 right-0 transition-all duration-200 z-10 text-white ${
          activeProfile ? "rotate-90" : "-rotate-90"
        }`}
      >
        <FaCircleChevronLeft className="text-[18px] max-lg:text-[16px] text-white" />
      </span>
      <div className=" w-full h-full scale-105 overflow-hidden rounded-full">
        {userImage ? (
          <Image src={userImage} alt="image data" width={50} height={50} />
        ) : null}
      </div>
    </div>
  );
};
