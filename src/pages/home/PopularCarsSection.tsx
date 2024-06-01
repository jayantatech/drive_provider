import ContentWrapper from "@/components/contentWrapper/ContentWrapper";
import VehicleSwitchBox from "@/components/vehicleSwitchBox/VehicleSwitchBox";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import VehicleSlider from "@/components/vehicleSlider/VehicleSlider";

type allVehicles = "cars" | "bikes";
const PopularCarsSection = ({
  titleMain,
  titleBody,
  titleDescription,
  vehicleModes,
  selectItems,
}: {
  titleMain: string;
  titleBody: string;
  titleDescription: string;
  vehicleModes: allVehicles[];
  selectItems: {
    placeHolder: string;
    selectLabel: string;
    selectItems: string[];
  };
}) => {
  return (
    <div className="w-full h-auto my-[40px]">
      <ContentWrapper>
        <div className="flex flex-col gap-2">
          <div className="pb-5 w-full py-2 flex flex-col lg:flex-row items-center justify-center h-[120px] max-md:h-[210px] max-lg:h-[160px] bg-yellsdow-400">
            <SectionTitle
              titleMain={titleMain}
              titleBody={titleBody}
              titleDescription={titleDescription}
            />
            <div className="w-full h-full lg:w-[60%] flex items-end justify-end max-lg:items-center  max-lg:justify-center">
              <VehicleSwitchBox
                vehicleModes={vehicleModes}
                selectItems={selectItems}
              />
            </div>
          </div>
          <div className="w-full items-center justify-between max-lg:justify-evenly">
            <VehicleSlider />
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default PopularCarsSection;
