import ContentWrapper from "@/components/contentWrapper/ContentWrapper";
import EmailInputBox from "@/components/emailInputBox/EmailInputBox";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import { achievements } from "@/contants/Contants";
import { Item } from "@radix-ui/react-dropdown-menu";
import React from "react";
import { FaCar } from "react-icons/fa";
import { TbCaretLeft, TbCaretRight, TbRoad } from "react-icons/tb";

const SpecialOffSection = () => {
  return (
    <div className="bg-[#313235] py-20 max-md:py-10">
      <ContentWrapper>
        <div className="w-full h-[320px] max-md:h-auto max-lg:flex-col max-lg:h-[520px] max-md:min-h-[690px] flex gap-3 flex-row">
          <div className="w-3/5 max-lg:w-full">
            <div>
              <SectionTitle
                titleMain="GET "
                titleBody="SPECIAL 25% OFF"
                isTitleBodyWhite={true}
                titleDescription="Enjoy a limited-time offer of 25% off on all car rentals. Whether it's a weekend getaway or a business trip, save big and drive in comfort. Book today and hit the road with extra savings!"
              />
              <span className="flex items-center max-lg:justify-center text-[24px] text-color_main py-4">
                <TbCaretRight />
                <TbCaretRight />
                <TbCaretRight />
                <span className="text-white">
                  <FaCar />
                </span>
                <TbCaretLeft />
                <TbCaretLeft />
                <TbCaretLeft />
              </span>
            </div>
            <div className="w-full h-auto p-2 my-2">
              <EmailInputBox />
              <p className="py-2 font-openSans text-[13px] font-semibold text-white">
                {" "}
                <b>desclamer</b> Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quo, tempore? Exercitationem nemo at ab
                tempora cum similique, neque molestias possimus?
              </p>
            </div>
          </div>
          <div className="w-2/5 h-full max-lg:w-full  mx-auto flex items-center justify-center flex-row flex-wrap max-lg:flex-row gap-4">
            {achievements?.map((item) => (
              <div
                className="w-[170px] h-[140px] bg-[#000] text-white shadow-lg p-2 flex items-center justify-center flex-col rounded-[4px] transition-all duration-200 hover:scale-105"
                key={item.title}
              >
                <span className="text-[28px] max-md:text-[32px] font-openSans font-bold text-color_main">
                  {item?.title}
                </span>
                <span className="text-[14px] font-raleway font-semibold">
                  {item?.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default SpecialOffSection;
