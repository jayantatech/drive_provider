import ContentWrapper from "@/components/contentWrapper/ContentWrapper";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import TestimonialBox from "@/components/testimonialBox/TestimonialBox";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { LiaCommentsSolid } from "react-icons/lia";

const TestimonialsSection = () => {
  return (
    <div className="py-[20px] max-md:py-0 bg-[#F2F6F7] relative overflow-hidden ">
      <ContentWrapper>
        <div className="w-full h-[680px] max-md:h-auto gap-4 flex flex-col my-20">
          <div className="w-full h-[184px] max-lg:h-[190px] max-md:h-[220px] flex items-center justify-center max-lg:flex-col xl:flex-col my-2">
            <div className="w-[750px] h-[150px] text-center max-lg:h-[188px] max-lg:w-full max-md:w-full max-md:h-[210px] max-md:text-center pb-2">
              <SectionTitle
                titleMain="Customer "
                titleBody="Experiences"
                titleDescription="
              Discover what our customers have to say about their car rental experiences with us. Read their testimonials to learn why they trust us for smooth, reliable, and enjoyable journeys every time."
              />
              <button className="h-[34px] lg:w-[180px] w-[140px] bg-red-500 rounded-[6px] button_main text-white text-[14px] mt-4 max-md:mt-2">
                Book One
              </button>
            </div>
          </div>
          <div className="w-full h-[440px] max-md:h-[540px] flex items-center justify-center relative">
            <div className="w-[64%] max-md:w-full h-[310px]  p-2 flex items-center justify-center flex-col gap-2 z-10">
              <p className="text-center font-openSans text-[20px] font-medium">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
                amet in aperiam maiores obcaecati, autem nisi optio! Accusamus
                laudantium earum quasi repellendus corporis nulla ratione.
              </p>
              <div className="flex items-center justify-center flex-col gap-1">
                <span className="text-[18px] font-raleway font-bold">
                  Jay Biswas
                </span>
                <span className="text-[13px] font-openSans font-medium">
                  Rented audi x338H
                </span>
              </div>
            </div>
            <span className="absolute">
              <LiaCommentsSolid className="text-[154px] opacity-10 text-color_main" />
            </span>
            <div className="w-[70px] h-[70px] bg-orange-200 rounded-[6px] absolute top-12 left-20 overflow-hidden shadow-lg hover:scale-105 transition-all duration-150  z-20 max-md:top-0 max-md:left-0">
              <Image
                src={
                  "https://cdn.pixabay.com/photo/2018/11/08/23/52/man-3803551_1280.jpg"
                }
                className="scale-125"
                alt="user image"
                objectFit="cover"
                layout="fill"
              />
            </div>
            <div className="w-[70px] h-[70px] bg-orange-200 rounded-[6px] absolute top-16 right-20 overflow-hidden shadow-lg hover:scale-105 transition-all duration-150 z-20 max-md:bottom-10 max-md:left-[70%]">
              <Image
                src={
                  "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_1280.jpg"
                }
                className="scale-125"
                alt="user image"
                objectFit="cover"
                layout="fill"
              />
            </div>
            <div className="w-[70px] h-[70px] bg-orange-200 rounded-[6px] absolute bottom-20 left-60 overflow-hidden shadow-lg hover:scale-105 transition-all duration-150 z-20 max-md:bottom-[10%] max-md:right-[70%]">
              <Image
                src={
                  "https://cdn.pixabay.com/photo/2022/01/23/08/29/indian-woman-6960124_1280.jpg"
                }
                className="scale-125"
                alt="user image"
                objectFit="cover"
                layout="fill"
              />
            </div>
            <div className="w-[70px] h-[70px] bg-orange-200 rounded-[6px] absolute bottom-10 right-28 overflow-hidden shadow-lg hover:scale-105 transition-all duration-150 z-20 max-md:bottom-[10%] max-md:right-[70%]">
              <Image
                src={
                  "https://cdn.pixabay.com/photo/2020/06/20/16/13/male-5321547_1280.jpg"
                }
                alt="user image"
                objectFit="cover"
                layout="fill"
              />
            </div>
            <div className="w-[70px] h-[70px] bg-orange-200 rounded-[6px] absolute top-[7%] right-[50%] overflow-hidden shadow-lg hover:scale-105 transition-all duration-150 z-20 ">
              <Image
                src={
                  "https://cdn.pixabay.com/photo/2023/01/07/05/19/woman-7702570_1280.jpg"
                }
                className="scale-125"
                alt="user image"
                objectFit="cover"
                layout="fill"
              />
            </div>
            <div className="w-[70px] h-[70px] bg-orange-200 rounded-[6px] absolute bottom-[17%] right-[30%] overflow-hidden shadow-lg hover:scale-105 transition-all duration-150 z-20 max-md:bottom-[4%] max-md:left-[40%]">
              <Image
                src={
                  "https://cdn.pixabay.com/photo/2016/10/26/17/33/effect-1772029_1280.jpg"
                }
                className="scale-125"
                alt="user image"
                objectFit="cover"
                layout="fill"
              />
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};
export default TestimonialsSection;
{
  /* <div className="flex-grow flex items-center justify-evenly max-md:flex-col max-md:py-4 max-md:gap-4">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full h-[330px] flex items-center justify-center"
            >
              <CarouselContent className="flex flex-nowrap">
                {Array.from({ length: 6 }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="flex-none w-1/3 flex items-center justify-center"
                  >
                    <TestimonialBox />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[20px] h-[40px] rounded-[6px] -translate-x-6 text-white bg-color_main hover:text-color_main hover:border-color_main" />
              <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[20px] h-[40px] rounded-[6px] translate-x-6 text-white bg-color_main hover:text-color_main hover:border-color_main" />
            </Carousel>
          </div> */
}
