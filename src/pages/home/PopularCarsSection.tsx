import ContentWrapper from "@/components/contentWrapper/ContentWrapper";
import CarComponentBox from "@/components/carComponentBox/CarComponentBox";
import VehicleSwitchBox from "@/components/vehicleSwitchBox/VehicleSwitchBox";
import SectionTitle from "@/components/sectionTitle/SectionTitle";

const PopularCarsSection = () => {
  return (
    <div className="my-[98px] h-auto ">
      <ContentWrapper>
        <div className="flex flex-col gap-2">
          <div className="pb-5 w-full py-2 flex flex-col lg:flex-row items-center justify-center h-[120px] max-md:h-[210px] max-lg:h-[160px] bg-yellsdow-400">
            <SectionTitle
              titleMain="our"
              titleBody="recent posts"
              titleDescription=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam quam quasi facere aperiam sequi. Autem reiciendis nobis numquam magni tenetur!"
            />
            <div className="w-full h-full lg:w-[40%] flex items-start justify-end max-lg:items-center  max-lg:justify-center ">
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
