import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import VehicleComponentBox from "@/components/vehicleComponentBox/VehicleComponentBox";

const AlternativeCarsSection = () => {
  return (
    <div className="w-full h-auto max-lg:h-auto rounded-[6px] shadow-lg bg-white p-4 max-lg:p-2 my-4 border-2">
      <div>
        <h3 className="text-[22px] max-lg:text-[20px] font-raleway font-bold pb-2">
          Alternative Suggestions{" "}
        </h3>
        <p className="text-[15px] font-openSans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, et.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, et.
        </p>
      </div>
      <div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full h-[440px] flex items-center justify-center"
        >
          <CarouselContent className="flex flex-nowrap">
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem key={index} className="flex-none">
                <VehicleComponentBox />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[20px] h-[40px] rounded-[6px] -translate-x-3 text-white bg-color_main hover:text-color_main hover:border-color_main" />
          <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[20px] h-[40px] rounded-[6px] translate-x-3 text-white bg-color_main hover:text-color_main hover:border-color_main" />
        </Carousel>
      </div>
    </div>
  );
};

export default AlternativeCarsSection;
