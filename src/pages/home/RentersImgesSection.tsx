import ContentWrapper from "@/components/contentWrapper/ContentWrapper";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import Image from "next/image";

const RentersImgesSection = () => {
  return (
    <div className="py-12">
      <ContentWrapper>
        <div className="w-full h-[810px] max-md:h-[980px] max-lg:h-[820px] gap-2 max-lg:gap-1 flex flex-col items-center justify-between">
          <div className="w-[750px] h-[130px] text-center max-md:w-full max-md:h-[140px] max-md:text-center pb-4">
            <SectionTitle
              titleMain="Previous"
              titleBody="Renters' Rides"
              titleDescription="Explore our gallery featuring vehicles rented by our customers. See the variety and quality of cars that have made their journeys memorable and enjoyable."
            />
          </div>
          <div className="w-full h-[280px] max-lg:h-[480px] max-md:h-[560px] flex flex-row max-lg:flex-col p-1">
            <div className=" w-full max-lg:w-full h-full grid grid-cols-3 gap-2 ">
              <div className="col-span-1 max-md:col-span-3 h-full relative shadow-lg rounded-[6px] overflow-hidden">
                <Image
                  src="https://cdn.pixabay.com/photo/2014/09/07/22/34/car-race-438467_960_720.jpg"
                  alt="Traveler 1"
                  className="w-full h-72 object-cover "
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="col-span-1 max-md:col-span-3 h-full relative rounded-[6px] overflow-hidden shadow-lg">
                <Image
                  src="https://cdn.pixabay.com/photo/2016/11/22/20/10/dog-1850465_1280.jpg"
                  alt="Traveler 1"
                  className="w-full object-cover "
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="col-span-1 max-md:col-span-3 h-full relative rounded-[6px] overflow-hidden shadow-lg">
                <Image
                  src="https://cdn.pixabay.com/photo/2016/11/22/23/44/porsche-1851246_1280.jpg"
                  alt="Traveler 1"
                  className="w-full object-cover "
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
          <div className="w-full h-[calc(100%-248px)] max-lg:h-[calc(100%-480px)] max-md:h-[calc(100%-560px)] flex items-center justify-center flex-row gap-2 p-1 max-md:flex-col">
            <div className="w-[40%] max-md:w-full h-full relative overflow-hidden rounded-[6px] shadow-lg">
              <Image
                src="https://cdn.pixabay.com/photo/2015/06/05/15/02/audi-798530_1280.jpg"
                alt="Traveler 1"
                className="w-full h-72 object-cover rounded-[6px]"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="w-[60%] max-md:w-full h-full relative bg-pink-500 overflow-hidden rounded-[6px] shadow-lg">
              <Image
                src="https://cdn.pixabay.com/photo/2014/03/28/00/18/car-299772_1280.jpg"
                alt="Traveler 1"
                className="w-full h-72 object-cover rounded-[6px]"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default RentersImgesSection;
