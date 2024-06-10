import ContentWrapper from "@/components/contentWrapper/ContentWrapper";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import { FiSend } from "react-icons/fi";
import { MdDashboardCustomize } from "react-icons/md";
import { MdElectricCar } from "react-icons/md";
import { MdDoubleArrow } from "react-icons/md";

const OurKeyPoints = () => {
  return (
    <div className="py-[94px] bg-black">
      <ContentWrapper>
        <div className="w-full h-[434px] max-lg:h-auto flex gap-[74px] max-lg:gap-2 max-md:gap-[74px] max-lg:flex-col ">
          <div className="w-1/2 max-lg:w-full h-full flex items-center justify-center gap-2 flex-col ">
            <div className="w-full h-[202px] max-md:h-auto ">
              <SectionTitle
                isTitleBodyWhite={true}
                titleMain="Dedicated"
                customClass={{
                  titleMain: "text-[33px]",
                }}
                titleBody="
 to Excellence and Client Satisfaction"
                titleDescription="At CarProvider.com, excellence drives us. Whether in Kolkata or Bengaluru, we strive to provide superior car rental services, ensuring our clients are not just satisfied but thrilled with their experience"
              />
            </div>
            <div className="w-full h-[308px] pt-3">
              <div className="w-full h-auto py-3 flex items-center justify-start gap-2  border-dashed border-b border-[#e5eaee] text-white">
                <span className="w-[40px] h-[40px]  flex items-center justify-center flex-1">
                  <FiSend className="text-[24px] text-color_main" />
                </span>
                <p className="font-openSans text-[16px] font-medium h-auto w-[90%]">
                  Our solutions are designed to streamline your operations,
                  leading to higher productivity and lower costs.
                </p>
              </div>
              <div className="w-full h-auto py-3 flex items-center justify-start gap-2  border-dashed border-b border-[#e5eaee] text-white">
                <span className="w-[40px] h-[40px] flex items-center justify-center flex-1">
                  <MdDashboardCustomize className="text-[24px] text-color_main" />
                </span>
                <p className="font-openSans text-[16px] font-medium h-auto w-[90%]">
                  We understand your unique needs and provide customized rental
                  options, ensuring you get the perfect vehicle for your
                  requirements.
                </p>
              </div>
              <div className="w-full h-auto py-3 flex items-center justify-start gap-2  border-dashed border-b border-[#e5eaee] text-white">
                <span className="w-[40px] h-[40px]  flex items-center justify-center flex-1">
                  <MdElectricCar className="text-[24px] text-color_main " />
                </span>
                <p className="font-openSans text-[16px] font-medium h-auto w-[90%]">
                  Choose from our diverse range of well-maintained, high-quality
                  vehicles, ensuring comfort and reliability for every trip.
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/2 h-full max-lg:w-full max-md:h-[510px]">
            <div className="w-full h-full p-6 max-md:p-3 border-2 border-dashed border-[#e5eaee] shadow-md flex flex-col items-center justify-between">
              <div className="w-full h-[110px] max-md:h-[152px] py-2 flex items-start flex-row justify-start gap-2">
                <div className="w-[44px] h-[36px]">
                  <MdDoubleArrow className="text-[32px] text-color_main" />
                </div>
                <div>
                  <h4 className="text-[22px] font-raleway font-bold text-white">
                    Our Mission
                  </h4>
                  <p className="text-[16px] font-openSans text-[#ffffffc2]">
                    A clear statement of your agency's mission and core values,
                    highlighting what drives your work and commitment to
                    clients.
                  </p>
                </div>
              </div>
              <div className="w-full h-[110px] max-md:h-[152px] py-2 flex items-start flex-row justify-start gap-2">
                <div className="w-[44px] h-[36px] ">
                  <MdDoubleArrow className="text-[32px] text-color_main" />
                </div>
                <div>
                  <h4 className="text-[22px] font-raleway font-bold text-white">
                    Our Mission
                  </h4>
                  <p className="text-[16px] font-openSans text-[#ffffffc2]">
                    A clear statement of your agency's mission and core values,
                    highlighting what drives your work and commitment to
                    clients.
                  </p>
                </div>
              </div>
              <div className="w-full h-[110px] max-md:h-[152px] py-2  flex items-start flex-row justify-start gap-2">
                <div className="w-[44px] h-[36px]">
                  <MdDoubleArrow className="text-[32px] text-color_main" />
                </div>
                <div>
                  <h4 className="text-[22px] font-raleway font-bold text-white">
                    Our Mission
                  </h4>
                  <p className="text-[16px] font-openSans text-[#ffffffc2]">
                    A clear statement of your agency's mission and core values,
                    highlighting what drives your work and commitment to
                    clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default OurKeyPoints;
