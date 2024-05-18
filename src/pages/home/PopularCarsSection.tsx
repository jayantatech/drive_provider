import ContentWrapper from "@/components/contentWrapper/ContentWrapper";
import CarComponentBox from "@/components/carComponentBox/CarComponentBox";
import VehicleSwitchBox from "@/components/vehicleSwitchBox/VehicleSwitchBox";

const PopularCarsSection = () => {
  return (
    <div className="my-[98px] h-[950px] ">
      <ContentWrapper>
        <div className="flex flex-col gap-2">
          <div className="pb-5 w-full h-[120px] py-2 flex ">
            {" "}
            <div className=" w-[60%]">
              {" "}
              <h2 className="text-[26px] font-bold font-[Roboto]">
                The Most <span className="text-blue_main"> Popular </span> Cars
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus ad nobis temporibus? Nam fuga magnam porro dolorum,
                dicta voluptatibus reprehenderit.
              </p>
            </div>
            <div className=" w-[40%] h-full flex items-center justify-end">
              <VehicleSwitchBox vehicleModes={["cars", "bikes"]} />
            </div>
          </div>
          <div className=" w-full h-[420px] p-2 flex gap-2 xl:gap-4 items-center justify-between max-lg:justify-evenly flex-wrap">
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
