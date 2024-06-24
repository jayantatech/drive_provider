import { Car } from "@/contants/img/cars/img";
import Image from "next/image";
import { BsSpeedometer } from "react-icons/bs";
import { FaGasPump } from "react-icons/fa6";
import { GiGearStick, GiStopwatch } from "react-icons/gi";
import { IoIosCard, IoIosPeople } from "react-icons/io";
import { LuIndianRupee } from "react-icons/lu";

const VehicleComponentBox = () => {
  return (
    <div className=" w-[288px] bg-[#f5fafe] h-[378px] rounded-[6px] shadow-lg border-[1px] border-blue_light">
      <div className=" bg-black w-full h-[156px] rounded-t-[6px] overflow-hidden">
        <Image src={Car} width={288} height={180} alt="card_Image" />
      </div>
      <div className=" w-full h-[210px] px-2.5 py-1.5">
        <div className="w-full h-[52px] flex flex-col items-start justify-start">
          <span className="px-4 py-[1px] rounded-[4px] bg-color_main text-white shadow-md font-raleway font-semibold text-[14px]">
            Suv
          </span>
          <h3 className=" text-[18px] cardTitle">Mahindra XUV300</h3>
        </div>
        <div className="w-[100%] flex items-center justify-center h-[62px] my-1">
          <div className="w-full rounded-[6px] shadow-md h-[58px] bg-white flex flex-wrap items-center justify-center grid-flow-row gap-1 px-1 py-1">
            <div className=" h-[20px] flex items-center justify-start gap-1 text-bg_main cardIconText w-[74px]">
              <FaGasPump className="text-[14px]" />
              <span className=" text-[13px]">Petrol</span>
            </div>
            <div className=" h-[20px] w-[114px] flex items-center justify-start gap-1 text-bg_main cardIconText">
              <GiGearStick className="text-[14px]" />
              <span className="text-[13px]">automatic </span>
            </div>
            <div className="h-[20px] w-[50px] flex items-center justify-start gap-1 text-bg_main cardIconText">
              <IoIosPeople className="text-[18px]" />
              <span className="text-[13px]">5</span>
            </div>
            <div className=" h-[20px] flex items-center justify-start gap-1 text-bg_main w-[74px] cardIconText">
              <BsSpeedometer className="text-[14px]" />
              <span className="text-[13px]">
                15/<span className=" text-[11px]">kmpl</span>
              </span>
            </div>
            <div className=" h-[20px] w-[114px] flex items-center justify-start gap-1 text-bg_main cardIconText">
              <GiStopwatch className="text-[14px]" />
              <span className=" text-[13px]">
                980km/<span className=" text-[11px]">limit</span>
              </span>
            </div>
            <div className="h-[20px] w-[50px] flex items-center justify-start gap-1 text-bg_main cardIconText">
              <IoIosCard className="text-[14px]" />
              <span className="text-[13px]">Req</span>
            </div>
          </div>
        </div>
        <div className=" w-full h-[44px] flex justify-between items-center">
          <div className=" cardIconText font-semibold">
            <span className=" text-[12px] flex items-center">
              {" "}
              <LuIndianRupee />
              2500/Day
            </span>
            <div className=" text-[13px] flex gap-1 cardIconText">
              <span className="text-[14px]">3 days</span>{" "}
              <s className=" text-red-500 flex items-center justify-center font-semibold">
                {" "}
                <LuIndianRupee />
                7500
              </s>
            </div>
          </div>
          <div className="flex items-center text-[20px] cardIconText">
            <LuIndianRupee />
            <span className="">6500/</span>{" "}
            <div>
              <span className="text-[11px]">3days</span>
            </div>
          </div>
        </div>
        <button className="w-full h-[36px] bg-color_main transition-all duration-15p border-[2px] border-color_main text-[14px] items-center justify-center mt-1 rounded-[6px] text-white button_main hover:scale-[.97]">
          Rent Now
        </button>
      </div>
    </div>
  );
};

export default VehicleComponentBox;
