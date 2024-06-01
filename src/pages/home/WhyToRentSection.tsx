import ContentWrapper from "@/components/contentWrapper/ContentWrapper";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import { SlCalender } from "react-icons/sl";
import { FaBusinessTime } from "react-icons/fa";
import { MdConnectingAirports } from "react-icons/md";
import { TbRoad } from "react-icons/tb";
import { BiSolidGroup } from "react-icons/bi";
import { BiTrip } from "react-icons/bi";

const WhyToRentSection = () => {
  return (
    <ContentWrapper>
      <div className="flex items-center justify-center w-full h-[340px] max-lg:h-[480px] max-md:h-[410px] mb-8 flex-col gap-2">
        <div className="w-[750px] h-[130px] text-center max-md:w-full max-md:h-[140px] max-md:text-center">
          <SectionTitle
            isTitleBodyWhite={true}
            titleMain="Why To"
            titleDescription="Mollit voluptatem perspiciatis convallis elementum corporis quo veritatis aliquid blandit, blandit torquent, odit placeat. Adipiscing repudiandae eius cursus? Nostrum magnis maxime curae placeat."
            titleBody="rent a Vechile"
          />
        </div>
        <div
          className="w-full h-full flex items-center justify-center xl:gap-8 max-lg:flex-col gap-3 max-lg:h-[310px] max-md:h-[270px]
        "
        >
          <div className="xl:w-1/2 w-full flex items-center justify-between gap-2 max-lg:justify-evenly">
            <div className="w-[170px] h-[140px] max-md:h-[120px] bg-[#313235] text-white shadow-lg p-2 flex items-center justify-center flex-col rounded-[4px] transition-all duration-200 hover:scale-105">
              <TbRoad className=" text-[64px] text-color_main" />
              <span className="text-[16px] max-md:text-[14px] font-raleway font-semibold">
                Vacation Travel{" "}
              </span>
              <span className="text-[12px] font-raleway font-semibold">
                17 Cars Available
              </span>
            </div>
            <div className="w-[170px] h-[140px] max-md:h-[120px] bg-[#313235] text-white shadow-lg p-2 flex items-center justify-center flex-col rounded-[4px] transition-all duration-200 hover:scale-105">
              <FaBusinessTime className=" text-[64px] text-color_main" />
              <span className="text-[16px] max-md:text-[14px] font-raleway font-semibold">
                Business Trips{" "}
              </span>
              <span className="text-[12px] font-raleway font-semibold">
                17 Cars Available
              </span>
            </div>
            <div className="w-[170px] h-[140px] max-md:h-[120px] bg-[#313235] text-white shadow-lg p-2 flex items-center justify-center flex-col rounded-[4px] transition-all duration-200 hover:scale-105">
              <MdConnectingAirports className=" text-[64px] text-color_main" />
              <span className="text-[16px] max-md:text-[13px] font-raleway font-semibold">
                Airport Transfers{" "}
              </span>
              <span className="text-[12px] font-raleway font-semibold">
                17 Cars Available
              </span>
            </div>
          </div>
          <div className="xl:w-1/2 w-full flex items-center justify-between gap-2 max-lg:justify-evenly">
            <div className="w-[170px] h-[140px] max-md:h-[120px] bg-[#313235] text-white shadow-lg p-2 flex items-center justify-center flex-col rounded-[4px] transition-all duration-200 hover:scale-105">
              <BiSolidGroup className=" text-[64px] text-color_main" />
              <span className="text-[16px] max-md:text-[14px] font-raleway font-semibold">
                Group Outings{" "}
              </span>
              <span className="text-[12px] font-raleway font-semibold">
                17 Cars Available
              </span>
            </div>
            <div className="w-[170px] h-[140px] max-md:h-[120px] bg-[#313235] text-white shadow-lg p-2 flex items-center justify-center flex-col rounded-[4px] transition-all duration-200 hover:scale-105">
              <SlCalender className=" text-[64px] scale-[.82] text-color_main" />
              <span className="text-[16px] max-md:text-[14px] font-raleway font-semibold">
                Group Outings{" "}
              </span>
              <span className="text-[12px] font-raleway font-semibold">
                17 Cars Available
              </span>
            </div>
            <div className="w-[170px] h-[140px] max-md:h-[120px] bg-[#313235] text-white shadow-lg p-2 flex items-center justify-center flex-col rounded-[4px] transition-all duration-200 hover:scale-105">
              <BiTrip className=" text-[64px] text-color_main" />
              <span className="text-[16px] max-md:text-[14px] font-raleway font-semibold">
                Road Trips{" "}
              </span>
              <span className="text-[12px] font-raleway font-semibold">
                17 Cars Available
              </span>
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default WhyToRentSection;
