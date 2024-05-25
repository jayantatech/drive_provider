import ContentWrapper from "@/components/contentWrapper/ContentWrapper";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import WhyUsBox from "@/components/whyUsBox/WhyUsBox";
import { BackgroundOne, CarKey } from "@/contants/img/others/img";
import Image from "next/image";
import WhyToRentSection from "./WhyToRentSection";

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
                  src={CarKey}
                  width={620}
                  height={280}
                  className=""
                  alt="home key"
                />
              </div>
              <div className="w-1/2 max-lg:w-full h-full flex flex-col gap-3">
                <div className="w-full h-auto">
                  <SectionTitle
                    titleMain="Why"
                    titleBody="Choose Us"
                    isTitleBodyWhite={true}
                    titleDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum placeat id eius asperiores voluptate necessitatibus."
                  />
                </div>
                <div className="w-full h-[380px] py-2 flex flex-col gap-3">
                  <WhyUsBox
                    number={"01"}
                    title="24/7 Work Process"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quo laudantium aliquam"
                  />
                  <WhyUsBox
                    number={"02"}
                    title="24/7 Work Process"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quo laudantium aliquam nesciunt"
                  />
                  <WhyUsBox
                    number={"03"}
                    title="24/7 Work Process"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quo laudantium aliquam nesciunt"
                  />
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
