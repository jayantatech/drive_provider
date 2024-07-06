import { LuCalendar } from "react-icons/lu";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { MdSpeed } from "react-icons/md";
import { PiSeat } from "react-icons/pi";
import {
  IoCheckmarkDoneCircleOutline,
  IoLocationOutline,
} from "react-icons/io5";
import { GiGearStick } from "react-icons/gi";
import { BsFuelPump, BsGear } from "react-icons/bs";
import { LiaCarSideSolid } from "react-icons/lia";

const OverviewCarInfo = () => {
  return (
    <div className="w-full h-[284px] max-lg:h-[284px] max-md:h-auto rounded-[6px] shadow-lg bg-white p-4 max-lg:px-3 py-2 my-4 border-2">
      <h3 className="text-[22px] max-lg:text-[20px] font-raleway font-bold pb-2">
        Car Overview
      </h3>
      <div className="w-full h-[210px] flex items-center flex-row gap-[58px] max-md:gap-0 max-lg:gap-[22px] max-md:flex-col max-md:h-auto">
        <div className="w-1/2 max-md:w-full h-full flex flex-col items-center justify-between ">
          <div className="w-full h-[36px] flex items-center justify-between">
            <div className="flex items-center justify-start gap-2">
              <LuCalendar className="text-[16px] max-lg:text-[15px]" />
              <span className="text-[15px] max-lg:text-[14px] font-openSans font-medium text-[#465166]">
                Manufacturing Year
              </span>
            </div>
            <p className="text-[15px] max-lg:text-[14px] font-openSans font-semibold">
              {"2023"}
            </p>
          </div>
          <div className="w-full h-[36px] flex items-center justify-between">
            <div className="flex items-center justify-start gap-2">
              <LiaCarSideSolid className="text-[16px] max-lg:text-[15px]" />

              <span className="text-[15px] max-lg:text-[14px] font-openSans font-medium text-[#465166]">
                Car Make
              </span>
            </div>
            <p className="text-[15px] max-lg:text-[14px] font-openSans font-semibold">
              {"Toyota"}
            </p>
          </div>
          <div className="w-full h-[36px] flex items-center justify-between">
            <div className="flex items-center justify-start gap-2">
              <AiOutlineDoubleRight className="text-[16px] max-lg:text-[15px]" />

              <span className="text-[15px] max-lg:text-[14px] font-openSans font-medium text-[#465166]">
                Car Model
              </span>
            </div>
            <p className="text-[15px] max-lg:text-[14px] font-openSans font-semibold">
              {"Corolla"}
            </p>
          </div>
          <div className="w-full h-[36px] flex items-center justify-between">
            <div className="flex items-center justify-start gap-2">
              <IoLocationOutline className="text-[16px] max-lg:text-[15px]" />

              <span className="text-[15px] max-lg:text-[14px] font-openSans font-medium text-[#465166]">
                Location
              </span>
            </div>
            <p className="text-[15px] max-lg:text-[14px] font-openSans font-semibold">
              {"New Delhi"}
            </p>
          </div>
          <div className="w-full h-[36px] flex items-center justify-between">
            <div className="flex items-center justify-start gap-2">
              <PiSeat className="text-[16px] max-lg:text-[15px]" />

              <span className="text-[15px] max-lg:text-[14px] font-openSans font-medium text-[#465166]">
                Number of Seats
              </span>
            </div>
            <p className="text-[15px] max-lg:text-[14px] font-openSans font-semibold">
              {"5"}
            </p>
          </div>
        </div>
        <div className="w-1/2 max-md:w-full h-full flex flex-col items-center justify-between">
          <div className="w-full h-[36px] flex items-center justify-between">
            <div className="flex items-center justify-start gap-2">
              <BsFuelPump className="text-[16px] max-lg:text-[15px]" />

              <span className="text-[15px] max-lg:text-[14px] font-openSans font-medium text-[#465166]">
                Engine Type
              </span>
            </div>
            <p className="text-[15px] max-lg:text-[14px] font-openSans font-semibold">
              {"Petrol"}
            </p>
          </div>
          <div className="w-full h-[36px] flex items-center justify-between">
            <div className="flex items-center justify-start gap-2">
              <BsGear className="text-[16px] max-lg:text-[15px]" />

              <span className="text-[15px] max-lg:text-[14px] font-openSans font-medium text-[#465166]">
                Car Type
              </span>
            </div>
            <p className="text-[15px] max-lg:text-[14px] font-openSans font-semibold">
              {"Sedan"}
            </p>
          </div>
          <div className="w-full h-[36px] flex items-center justify-between">
            <div className="flex items-center justify-start gap-2">
              <IoCheckmarkDoneCircleOutline className="text-[17px]" />

              <span className="text-[15px] max-lg:text-[14px] font-openSans font-medium text-[#465166]">
                Availability
              </span>
            </div>
            <p className="text-[15px] max-lg:text-[14px] font-openSans font-semibold">
              {"Available"}
            </p>
          </div>
          <div className="w-full h-[36px] flex items-center justify-between">
            <div className="flex items-center justify-start gap-2">
              <MdSpeed className="text-[17px]" />

              <span className="text-[15px] max-lg:text-[14px] font-openSans font-medium text-[#465166]">
                Mileage
              </span>
            </div>
            <p className="text-[15px] max-lg:text-[14px] font-openSans font-semibold">
              {"15 km/l"}
            </p>
          </div>
          <div className="w-full h-[36px] flex items-center justify-between">
            <div className="flex items-center justify-start gap-2">
              <GiGearStick className="text-[16px] max-lg:text-[15px]" />

              <span className="text-[15px] max-lg:text-[14px] font-openSans font-medium text-[#465166]">
                Transmission
              </span>
            </div>
            <p className="text-[15px] max-lg:text-[14px] font-openSans font-semibold">
              {"Automatic"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewCarInfo;
