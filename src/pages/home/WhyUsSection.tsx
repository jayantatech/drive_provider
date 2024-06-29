import ContentWrapper from "@/components/contentWrapper/ContentWrapper";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import WhyUsBox from "@/components/whyUsBox/WhyUsBox";
import {
  BackgroundOne,
  CarKey,
  Car_for_Why_Us,
} from "@/contants/img/others/img";
import Image from "next/image";
import WhyToRentSection from "./WhyToRentSection";
import { homeTitles } from "@/contants/Contants";

const WhyUsSection = () => {
  return (
    <div className="bg-black w-full py-[98px] max-lg:py-[60px] max-lg:h-auto flex items-center justify-center relative overflow-hidden flex-col">
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-[0.36] scale-105">
        <Image
          src={BackgroundOne}
          layout="fill"
          alt="background image"
          objectFit="cover"
        />
      </div>
      <div className="w-full h-auto z-10 ">
        <WhyToRentSection />
      </div>
      <div>
        <div className="relative z-10 w-full">
          <ContentWrapper>
            <div className="w-full h-[488px] max-lg:h-auto flex gap-[20px] max-lg:gap-20 max-lg:flex-col">
              <div className="w-1/2 max-lg:w-full h-full flex items-center justify-center">
                <Image
                  src={Car_for_Why_Us}
                  width={620}
                  height={280}
                  className="rounded-[6px]"
                  alt="home key"
                />
              </div>
              <div className="w-1/2 max-lg:w-full h-full flex flex-col gap-3">
                <div className="w-full h-auto">
                  <SectionTitle
                    titleMain={homeTitles.third_Sub_Section.mainTitleWord}
                    titleBody={homeTitles.third_Sub_Section.mainTitleBody}
                    isTitleBodyWhite={true}
                    titleDescription={homeTitles.third_Sub_Section.description}
                  />
                </div>
                <div className="w-full h-[380px] py-2 flex flex-col gap-3">
                  {homeTitles.third_Sub_Section.keyPoints.map((item) => (
                    <WhyUsBox
                      number={item.number}
                      title={item.title}
                      description={item.description}
                    />
                  ))}
                </div>
              </div>
            </div>
          </ContentWrapper>
        </div>
      </div>
    </div>
  );
};

export default WhyUsSection;
