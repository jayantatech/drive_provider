import Image from "next/image";
import logo from "../../../public/logoipsum-297 (2).svg";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import { IoMdCall } from "react-icons/io";
import { MdAddLocation, MdEmail } from "react-icons/md";
import { footerContants } from "@/contants/Contants";

const Footer = () => {
  return (
    <div className="bg-black py-14">
      <ContentWrapper>
        <div className="w-full h-[290px] max-lg:h-[580px] max-md:h-auto flex flex-row max-lg:flex-wrap xl:gap-10">
          <div className="w-1/4 max-lg:w-2/4 max-md:w-full max-lg:h-[240px] flex flex-col gap-2 max-md:h-[220px]">
            <div className="w-full h-[30px] flex items-center justify-start border-l-[2px] border-color_main mb-3">
              <span className="text-[16px] font-raleway font-semibold text-white pl-2">
                {" "}
                About Drive Provider
              </span>
            </div>
            <div className="py-2">
              <Image alt="Footer Logo" src={logo} width={180} height={70} />{" "}
            </div>
            <p className="text-[15px] font-openSans text-[#fff]">
              {footerContants?.aboutDescription}
            </p>
          </div>
          <div className="w-1/4 h-auto max-lg:h-[240px] max-lg:w-2/4 max-md:w-full  flex flex-col gap-2">
            <div className="w-full h-[30px] flex items-center justify-start border-l-[2px] border-color_main mb-3">
              <span className="text-[16px] font-raleway font-semibold text-white pl-2">
                {" "}
                Contact Information
              </span>
            </div>
            <p className="text-[15px] font-openSans text-[#fff]">
              {footerContants?.contactInformation.contactDescription}
            </p>
            <div className="w-full h-auto  py-1">
              <div className="flex items-center justify-start gap-2 my-1">
                <IoMdCall className="text-[22px] text-color_main" />
                <span className="font-openSans text-[15px] text-[#fff]">
                  {footerContants?.contactInformation.phone}
                </span>
              </div>

              <div className="flex items-center justify-start gap-2 my-1">
                <MdEmail className="text-[22px] text-color_main" />
                <span className="font-openSans text-[15px] text-[#fff]">
                  {footerContants?.contactInformation.email}{" "}
                </span>
              </div>
              <div className="flex items-center justify-start gap-2 my-1">
                <MdAddLocation className="text-[22px] text-color_main" />
                <span className="font-openSans text-[15px] text-[#fff]">
                  {footerContants?.contactInformation.location}
                </span>
              </div>
            </div>
          </div>
          <div className="w-1/4 h-auto max-lg:h-[240px] max-lg:w-2/4 max-md:w-full flex flex-col gap-2">
            <div className="w-full h-[30px] flex items-center justify-start border-l-[2px] border-color_main mb-3">
              <span className="text-[16px] font-raleway font-semibold text-white pl-2">
                {" "}
                Cars{" "}
              </span>
            </div>
            <ul className="text-[15px] font-openSans">
              {footerContants?.cars?.map((item) => (
                <li className="pb-1.5 cursor-pointer hover:text-color_main font-semibold  transition-all duration-200 text-[#fff]">
                  {item}{" "}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-1/4 h-auto max-lg:h-[240px] max-lg:w-2/4 max-md:w-full  flex flex-col gap-2">
            <div className="w-full h-[30px] flex items-center justify-start border-l-[2px] border-color_main mb-3">
              <span className="text-[16px] font-raleway font-semibold text-white pl-2">
                {" "}
                Cars By Price{" "}
              </span>
            </div>
            <ul className="text-[15px] font-openSans">
              {footerContants?.CarsByPrice?.map((item) => (
                <li className="pb-1.5 cursor-pointer hover:text-color_main font-semibold  transition-all duration-200 text-[#fff]">
                  {item}{" "}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Footer;
