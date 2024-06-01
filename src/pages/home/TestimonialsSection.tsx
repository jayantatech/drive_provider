import ContentWrapper from "@/components/contentWrapper/ContentWrapper";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import TestimonialBox from "@/components/testimonialBox/TestimonialBox";
import { GoCodeReview } from "react-icons/go";

const TestimonialsSection = () => {
  return (
    <ContentWrapper>
      <div className="w-full h-[480px] max-md:h-auto gap-2 flex flex-col my-20">
        <div className="w-full h-[120px] max-lg:h-[160px] flex items-center justify-center max-lg:flex-col xl:flex-col">
          <div className="w-[750px] h-[130px] text-center max-md:w-full max-md:h-[140px] max-md:text-center pb-2">
            <SectionTitle
              titleMain="Customer "
              titleBody="Experiences"
              titleDescription="
              Discover what our customers have to say about their car rental experiences with us. Read their testimonials to learn why they trust us for smooth, reliable, and enjoyable journeys every time."
            />
          </div>
          <div className="w-[40%] max-lg:w-full h-full flex items-end justify-end max-lg:items-center max-lg:justify-center xl:w-full xl:items-center xl:justify-center">
            <button className="h-[34px] lg:w-[180px] w-[140px] bg-red-500 rounded-[6px] button_main text-white text-[14px]">
              Book One
            </button>
          </div>
        </div>
        <div className="flex-grow flex items-center justify-evenly max-md:flex-col max-md:py-4 max-md:gap-4">
          <TestimonialBox />
          <TestimonialBox />
          <TestimonialBox />
        </div>
      </div>
    </ContentWrapper>
  );
};
export default TestimonialsSection;
