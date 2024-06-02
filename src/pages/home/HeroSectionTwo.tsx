import ContentWrapper from "@/components/contentWrapper/ContentWrapper";
import HeroSearchBox from "@/components/heroSearchBox/HeroSearchBox";
import { heroCar } from "@/contants/img/cars/img";
import Image from "next/image";

const HeroSectionTwo = () => {
  return (
    <div className="w-full h-[840px] max-lg:h-[710px] max-md:h-[960px] bg-red-500 relative">
      <div className="w-full h-full relative">
        <Image src={heroCar} alt="hero image" layout="fill" objectFit="cover" />
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex items-center">
        <div className="absolute inset-0 bg-black opacity-45 z-10"></div>
        <ContentWrapper>
          <div className="relative w-full h-[420px] max-md:h-[310px] flex items-center justify-center flex-col z-20">
            <div className="relative xl:w-[70%] max-lg:w-[84%] max-md:w-full h-full text-center z-20 flex flex-col items-center justify-center">
              <h1 className="hero_title max-md:py-2">
                Experience the Thrill: <br /> Drive{" "}
                <span className="bg-color_main p-1 rounded-[6px] mr-1">
                  {" "}
                  Your Dream Car Today{" "}
                </span>{" "}
              </h1>
              <p className="main_description">
                Affordable rentals for every journey. Choose from a wide range
                of vehicles to suit your needs, whether it's a weekend getaway
                or a business trip.
              </p>
              <div className="w-full h-auto p-2 gap-4 flex items-center justify-center mt-6">
                <button className="h-[40px] w-[154px] bg-color_main hover:scale-105 transition-all duration-200 text-white button_main text-[17px] rounded-[6px]">
                  Find Vehicle
                </button>
                <button className="h-[40px] w-[154px] border border-color_main text-white button_main text-[17px] rounded-[6px] hover:scale-105 transition-all ease-in duration-200">
                  Find Vehicle
                </button>
              </div>
            </div>
          </div>
        </ContentWrapper>
      </div>
      <div className=" absolute bottom-0 left-0 w-full h-auto flex justify-center items-baseline my-6 max-lg:my-4 z-30">
        <HeroSearchBox isBoxTabs={true} />
      </div>
    </div>
  );
};

export default HeroSectionTwo;
