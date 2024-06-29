import ContentWrapper from "@/components/contentWrapper/ContentWrapper";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import Image from "next/image";
import ClientReviewBox from "@/components/clientReviewBox/ClientReviewBox";

// slider code import
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { homeTitles, userTestimonials } from "@/contants/Contants";
userTestimonials;
const TestimonialsNewSection = () => {
  return (
    <div className="py-16 bg-[#F2F6F7]">
      <ContentWrapper>
        <div className="w-full h-[460px] max-lg:h-[524px] max-md:h-[680px] flex flex-row max-md:flex-col-reverse gap-4 relative">
          <div className="w-1/2 max-md:w-full max-md:h-[390px] max-lg:w-1/3 h-full relative">
            <Image
              src={
                "https://images.pexels.com/photos/1131575/pexels-photo-1131575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt="User Info Section"
              objectFit="cover"
              layout="fill"
              className="rounded-[8px]"
            />
          </div>
          <div className="w-1/2 max-lg:w-2/3 h-full flex items-start justify-start gap-2 flex-col max-md:w-full">
            <div className="w-full h-[220px] max-md:h-auto flex items-start justify-start text-start lg:px-2">
              <SectionTitle
                titleMain={homeTitles.fifth_Section.mainTitleWord}
                customClass={{
                  titleMain: "lg:text-[33px] max-lg:text-start",
                  titleDescription:
                    "max-lg:text-start max-lg:-translate-x-6 max-md:translate-x-0",
                }}
                titleBody={homeTitles.fifth_Section.mainTitleBody}
                titleDescription={homeTitles.fifth_Section.description}
              />
            </div>
          </div>
          <div className="w-[720px] h-[260px] max-md:w-full max-md:h-[240px] max-lg:w-[620px] max-lg:h-[304px] absolute right-0 max-md:top-[34%] bottom-4 flex items-center justify-end px-2">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full h-full flex items-center justify-center"
            >
              <CarouselContent className="flex items-center justify-start lg:flex-nowrap gap-10">
                {userTestimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="flex-none">
                    <ClientReviewBox
                      userName={testimonial.userName}
                      userReview={testimonial.userReview}
                      userRatings={testimonial.userRatings}
                      userImage={testimonial.userImage}
                      socialMedia={testimonial.socialMedia}
                      rentedCar={testimonial.rentedCar}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default TestimonialsNewSection;
