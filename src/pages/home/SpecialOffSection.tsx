import ContentWrapper from "@/components/contentWrapper/ContentWrapper";
import EmailInputBox from "@/components/emailInputBox/EmailInputBox";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import { homeTitles } from "@/contants/Contants";
import { Car_People } from "@/contants/img/cars/img";
import Image from "next/image";
import React from "react";
import { FaCar } from "react-icons/fa";
import { TbCaretLeft, TbCaretRight, TbRoad } from "react-icons/tb";

const SpecialOffSection = () => {
  return (
    <div className="bg-[#313235] relative py-20 max-md:py-10">
      <div className="w-full h-full absolute top-0 left-0 bg-black flex items-center justify-center overflow-hidden z-0">
        <div className="relative w-full h-full">
          <div className="relative top-0 left-0 w-full h-full bg-black z-10 opacity-[0.42] max-md:opacity-55"></div>
          <Image
            src={Car_People}
            alt="Footer image"
            layout="fill"
            objectFit="cover"
            className="w-full h-full z-0"
          />
        </div>
      </div>
      <div className="relative z-10">
        <ContentWrapper>
          <div className="w-full h-[320px] max-md:h-[420px] max-lg:flex-col max-lg:h-[260px] flex gap-3 flex-row">
            <div className="w-[50%] bg-cysdan-400 max-lg:w-full lg:pr-4">
              <div>
                <SectionTitle
                  titleMain={homeTitles.seventh_Section.mainTitleWord}
                  titleBody={homeTitles.seventh_Section.mainTitleBody}
                  isTitleBodyWhite={true}
                  titleDescription={homeTitles.seventh_Section.description}
                  customClass={{
                    titleMain: "font-openSans text-[40px]",
                    titleBody: "font-openSans text-[40px]",
                    titleDescription: "text-[15px]",
                  }}
                />
                <span className="flex items-center max-lg:justify-center text-[20px] text-color_main py-4">
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
                  <span className="font-bold text-[14px]">Desclamer:</span>{" "}
                  {homeTitles.seventh_Section.desclamer}
                </p>
              </div>
            </div>
          </div>
        </ContentWrapper>
      </div>
    </div>
  );
};

export default SpecialOffSection;
