import ContentWrapper from "@/components/contentWrapper/ContentWrapper";
import { aboutTitles } from "@/contants/Contants";
import { Car_Forth } from "@/contants/img/cars/img";
import { Signature } from "@/contants/img/others/img";
import Image from "next/image";

const AboutInfoSeciton = () => {
  return (
    <div className="my-16">
      <ContentWrapper>
        <div className="w-ful h-[444px] max-md:h-[910px] max-lg:h-[780px] bg-fucsdfhsia-400 flex items-center justify-center max-lg:justify-start gap-4 max-lg:flex-col">
          <div className="w-[50%] max-lg:w-full h-full max-lg:h-[44%] bg-gresdfen-400 relative p-4 ">
            <div className="w-full h-full bg-color_main -translate-x-6 translate-y-6 rounded-[6px] overflow-hidden"></div>
            <Image
              src={Car_Forth}
              alt="about car image"
              layout="fill"
              objectFit="cover"
              className=" rounded-[6px] scale-95"
            />
          </div>
          <div className="w-[50%] max-lg:w-full max-lg:h-auto max-lg:py-3 h-full px-2 bg-indsdfigo-800">
            <h3 className="text-[44px] max-lg:text-[34px] max-md:text-[28px] font-extrabold text-color_main font-raleway">
              {aboutTitles.hero_Main_Section.mainTitleBody}
            </h3>
            <div className="flex gap-1 flex-col">
              <p className="text-[16px] font-openSans font-semibold">
                {" "}
                {aboutTitles.hero_Main_Section.description}
              </p>
              <p className="text-[16px] font-openSans">
                {" "}
                {aboutTitles.hero_Main_Section.descriptionPartOne}
              </p>
              <p className="text-[16px] font-openSans">
                {aboutTitles.hero_Main_Section.descriptionPartTwo}
              </p>
            </div>
            <div className="w-full h-[108px] max-md:h-[194px] bg-rsded-400 my-4 py-2 px-3 rounded-[6px] border-color_main flex items-center justify-start flex-row border-2 bg-white shadow-lg max-md:flex-col gap-2 ">
              <div className="flex items-center justify-centr flex-row gap-3 w-[50%] h-full bg-indisdgo-800 max-md:w-full max-md:h-[50%] bg-fusdchsia-500">
                <div className="w-[82px] h-[82px] bg-slatsdfe-200 rounded-[10px] relative overflow-hidden shadow-md">
                  <Image
                    src={
                      "https://cdn.pixabay.com/photo/2018/11/08/23/52/man-3803551_1280.jpg"
                    }
                    alt="founder image"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="">
                  <h4 className="text-[24px] font-raleway font-bold">
                    Jay Biswas
                  </h4>
                  <span className=" text-[14px] font-openSans font-semibold">
                    Founder of DriveProvider
                  </span>
                </div>
              </div>
              <div className="w-[50%] h-full bg-fucsdfhsia-600 relative overflow-hidden md:border-l-2 max-md:border-t-2 border-color_main max-md:w-full max-md:h-[50%]">
                <Image
                  src={Signature}
                  alt="signature"
                  layout="fill"
                  objectFit="cover"
                  className="scale-125"
                />
              </div>
            </div>
            <p className="text-[15px] font-bold text-center">
              Need any help ? Call us now{" "}
              <span className="text-color_main">+123-456-7890</span> or
              <a href="mailto:hello@awesomesite.com">
                <span className="text-color_main"> hello@awesomesite.com</span>
              </a>
            </p>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default AboutInfoSeciton;
