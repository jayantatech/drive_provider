import ContentWrapper from "@/components/contentWrapper/ContentWrapper";
import HeroSearchBox from "@/components/heroSearchBox/HeroSearchBox";
import { heroSectionTitle } from "@/utils/constants";
import Image from "next/image";

export const HeroSection = () => {
  const imageCar: string =
    "https://cdn.pixabay.com/photo/2020/09/06/07/37/car-5548242_960_720.jpg";
  return (
    <ContentWrapper>
      <div className="min-w-full h-[590px] max-lg:h-[440px] max-md:h-[580px] rounded-[10px] my-3 overflow-hidden shadow-lg relative">
        <div className="absolute w-full h-full left-0 top-0 z-0">
          <Image
            alt="heroImage"
            src={imageCar}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className=" w-full h-full relative flex items-center justify-center">
          <div
            className=" rounded-[10px] w-[70%] max-lg:w-[620px] h-[270px] max-lg:h-[180px] max-md:h-[270px] max-md:w-[95%] z-20 items-start justify-center px-6 max-md:px-[12px] max-lg:px-4 flex max-lg:mt-[-160px] max-md:mt-[-230px] mt-[-240px] text-center flex-col gap-3 
            bg-black bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 text-white max-md:hidden"
          >
            <h1 className=" text-[48px] max-lg:text-[28px] max-md:text-[26px] font-[Roboto] font-extrabold">
              {heroSectionTitle?.title}
            </h1>
            <span className=" px-8 max-md:px-2">
              <p className="text-[16px] max-lg:text-[14px] font-[Poppins]">
                {heroSectionTitle?.description}
              </p>
            </span>
          </div>
          <div className=" absolute bottom-0 left-0 w-full h-auto flex justify-center items-baseline my-6 max-lg:my-4">
            <HeroSearchBox />
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};
