import { Car_Three } from "@/contants/img/cars/img";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

type Props = {
  pageTitle: string;
  pageLink: string;
  sectionBackgroundImage: StaticImport;
};

const PageTitleSection = ({
  pageTitle,
  pageLink,
  sectionBackgroundImage,
}: Props) => {
  return (
    <div className="w-full h-[340px] max-lg:h-[280px] max-md:h-[240px] bg-fuchsia-300 relative flex items-center justify-center">
      <div className="w-[40%] max-lg:w-[60%] max-md:w-full h-[210px] max-md:h-[140px] bg-blasdck absolute z-20 flex items-center justify-center flex-col ">
        <h1 className="text-[52px] max-lg:text-[42px] max-md:text-[36px] font-raleway font-extrabold text-white">
          {pageTitle}
        </h1>
        <div>
          <div className="text-white text-[18px] max-lg:text-[16px] font-semibold font-raleway flex items-center justify-center">
            <span className="hover:text-color_main">
              <Link href={"/"}>Home</Link>
            </span>
            <MdOutlineKeyboardArrowRight className="text-[22px]" />{" "}
            <Link href={`${pageLink}`}>
              <span className="text-color_main">{pageTitle}</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full h-full relative">
        <div className="w-full bg-black h-full z-10 absolute opacity-70"></div>
        <Image
          src={sectionBackgroundImage}
          alt="page hero image"
          layout="fill"
          objectFit="cover"
          className="w-0"
        />
      </div>
    </div>
  );
};

export default PageTitleSection;
