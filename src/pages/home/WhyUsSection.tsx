import ContentWrapper from "@/components/contentWrapper/ContentWrapper";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import WhyUsBox from "@/components/whyUsBox/WhyUsBox";
import { CarKey } from "@/contants/img/others/img";
import Image from "next/image";
import { FaCar } from "react-icons/fa6";

const WhyUsSection = () => {
  return (
    <div className=" bg-black w-full py-[88px] max-lg:py-[60px] max-lg:h-auto  flex items-center justify-center">
      <ContentWrapper>
        <div className=" w-full h-[488px] max-lg:h-auto flex gap-[20px] max-lg:gap-20 max-lg:flex-col ">
          <div className="w-1/2 max-lg:w-full h-full flex items-center justify-center ">
            <Image
              src={CarKey}
              width={620}
              height={280}
              className=""
              alt="home key"
            />
          </div>
          <div className="w-1/2 max-lg:w-full h-full  flex flex-col gap-3 bg-green-500">
            {/* <div className="flex items-start gap-1 flex-col w-full h-[88px] max-md:h-[78px] pl-4"></div> */}
            <SectionTitle
              titleMain="Why"
              titleBody="Choose Us"
              isTitleBodyWhite={true}
              titleDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum placeat id eius asperiores voluptate necessitatibus."
            />

            <div className=" w-full h-[380px] py-2 flex flex-col gap-3">
              <WhyUsBox
                number={"01"}
                title="24/7 Work Process
"
                description="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quo laudantium aliquam "
              />
              <WhyUsBox
                number={"02"}
                title="24/7 Work Process
"
                description="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quo laudantium aliquam nesciunt"
              />
              <WhyUsBox
                number={"03"}
                title="24/7 Work Process
"
                description="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quo laudantium aliquam nesciunt"
              />
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default WhyUsSection;
