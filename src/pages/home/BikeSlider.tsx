import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CarComponentBox from "@/components/carComponentBox/CarComponentBox";
import ContentWrapper from "@/components/contentWrapper/ContentWrapper";

function BikeSlider() {
  return (
    <ContentWrapper>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full  h-[440px] flex items-center justify-center px-2"
      >
        <CarouselContent className="flex flex-nowrap gap-1">
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem key={index} className="flex-none">
              <CarComponentBox />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[20px] h-[40px] rounded-[6px] -translate-x-4 text-white bg-color_main hover:text-color_main hover:border-color_main" />
        <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[20px] h-[40px] rounded-[6px] translate-x-4 text-white bg-color_main hover:text-color_main hover:border-color_main" />
      </Carousel>
    </ContentWrapper>
  );
}

export default BikeSlider;
