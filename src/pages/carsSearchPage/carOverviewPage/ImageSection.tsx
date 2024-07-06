import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Black_Car } from "@/contants/img/cars/img";
import { LuImagePlus } from "react-icons/lu";

export default function ImageSection() {
  return (
    <Carousel className="w-full">
      <div className="absolute right-4 bottom-6 w-[110px] h-[34px] bg-white rounded-[6px] z-50 flex items-center justify-center gap-1">
        <LuImagePlus className="text-[18px] text-color_main" />
        <span className="text-[15px] font-openSans font-semibold">
          {"13"} Photos
        </span>
      </div>
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="w-full h-[458px] max-lg:h-[340px] max-md:h-[240px] bg-red-200 rounded-[6px] overflow-hidden relative">
              <Image
                src={Black_Car}
                alt="Car_Image_Slider"
                layout="fill"
                objectFit="center"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-8 top-1/2 transform -translate-y-1/2 w-[20px] h-[40px] rounded-[6px] -translate-x-6 text-white bg-color_main hover:text-color_main hover:border-color_main" />
      <CarouselNext className="absolute right-8 top-1/2 transform -translate-y-1/2 w-[20px] h-[40px] rounded-[6px] translate-x-6 text-white bg-color_main hover:text-color_main hover:border-color_main" />
    </Carousel>
  );
}
