import { avatar_Team } from "@/contants/img/others/img";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";

const OurTeamCard = ({
  name,
  jobRole,
  socialLinks,
  profileImage,
}: {
  name: string;
  jobRole: string;
  profileImage?: string | StaticImageData;
  socialLinks?: { faceBook?: string; linkedin?: string; twitter?: string };
}) => {
  return (
    <div className="w-[280px] h-[380px] border-2 border-[#e5eaee] rounded-[6px] overflow-hidden shadow-lg bg-cyasdn-300 ">
      <div className="w-full h-[68%] rounded-[6px] relative overflow-hidden">
        <Image
          src={profileImage || avatar_Team}
          layout="fill"
          objectFit="cover"
          alt="team member image"
          className="p-3 rounded-[10px]"
        />
      </div>
      <div className="w-full h-[32%] bg-black py-2">
        <div className="w-full h-auto flex items-center justify-center flex-col py-1 text-white">
          <h4 className="text-[17px] font-raleway font-bold">{name}</h4>
          <span className="text-[13px] font-openSans font-semibold">
            {jobRole}
          </span>
        </div>
        {socialLinks ? (
          <div className="w-full h-[44px] flex items-center justify-center text-[26px] gap-4">
            <div className="w-[60%] flex bg-white h-full  items-center justify-evenly rounded-[6px] border-2 border-color_main text-[26px] ">
              {" "}
              {socialLinks.faceBook ? (
                <FaFacebookSquare className="cursor-pointer transition-all duration-150 hover:text-color_main hover:scale-110" />
              ) : null}
              {socialLinks.twitter ? (
                <FaSquareXTwitter className="cursor-pointer transition-all duration-150 hover:text-color_main hover:scale-110" />
              ) : null}
              {socialLinks.linkedin ? (
                <FaLinkedin className="cursor-pointer transition-all duration-150 hover:text-color_main hover:scale-110" />
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default OurTeamCard;
