import ContentWrapper from "@/components/contentWrapper/ContentWrapper";
import CarComponentBox from "@/components/carComponentBox/CarComponentBox";
import VehicleSwitchBox from "@/components/vehicleSwitchBox/VehicleSwitchBox";

const PopularCarsSection = () => {
  return (
    <div className="my-[98px] h-auto ">
      <ContentWrapper>
        <div className="flex flex-col gap-2">
          <div className="pb-5 w-full py-2 flex flex-col lg:flex-row">
            <div className="w-full lg:w-[60%] mb-4 lg:mb-0">
              <h2 className="text-[26px] font-bold font-[Roboto]">
                The Most <span className="text-color_main">Popular</span> Cars
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus ad nobis temporibus? Nam fuga magnam porro dolorum,
                dicta voluptatibus reprehenderit.
              </p>
            </div>
            <div className="w-full lg:w-[40%] flex items-center justify-end">
              <VehicleSwitchBox vehicleModes={["cars", "bikes"]} />
            </div>
          </div>
          <div className="w-full p-2 flex flex-wrap gap-2 xl:gap-4 items-center justify-between max-lg:justify-evenly">
            <CarComponentBox />
            <CarComponentBox />
            <CarComponentBox />
            <CarComponentBox />
            <CarComponentBox />
            <CarComponentBox />
            <CarComponentBox />
            <CarComponentBox />
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default PopularCarsSection;
