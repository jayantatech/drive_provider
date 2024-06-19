import { Car } from "@/contants/img/cars/img";
import Image from "next/image";
import { BsSpeedometer } from "react-icons/bs";
import { FaGasPump } from "react-icons/fa6";
import { GiGearStick, GiStopwatch } from "react-icons/gi";
import { IoIosCard, IoIosPeople } from "react-icons/io";
import { LuIndianRupee } from "react-icons/lu";
import { LuCalendarDays } from "react-icons/lu";

const ActiveCarComponetBox = () => {
  return (
    <div className="w-[288px] bg-[#f5fafe] h-auto rounded-[6px] shadow-lg border-[1px] border-blue_light">
      <div className=" bg-black w-full h-[156px] rounded-t-[6px] overflow-hidden">
        <Image src={Car} width={288} height={180} alt="card_Image" />
      </div>
      <div className=" w-full h-auto px-2.5 py-1.5">
        <div className="w-full h-[52px] flex flex-col items-start justify-start">
          <span className="px-4 py-[1px] rounded-[4px] bg-color_main text-white shadow-md font-raleway font-semibold text-[14px]">
            Suv
          </span>
          <h3 className=" text-[18px] cardTitle">Mahindra XUV300</h3>
        </div>
        <div className="w-[100%] flex items-center justify-center h-[62px] my-1">
          <div className="w-full rounded-[6px] shadow-md h-[58px] bg-white flex flex-wrap items-center justify-center grid-flow-row gap-1 px-1 py-1">
            <div className=" h-[20px] flex items-center justify-start gap-1 text-bg_main cardIconText w-[74px]">
              <FaGasPump className="text-[14px] text-color_main" />
              <span className=" text-[13px]">Petrol</span>
            </div>
            <div className=" h-[20px] w-[114px] flex items-center justify-start gap-1 text-bg_main cardIconText">
              <GiGearStick className="text-[14px] text-color_main" />
              <span className="text-[13px]">automatic </span>
            </div>
            <div className="h-[20px] w-[50px] flex items-center justify-start gap-1 text-bg_main cardIconText">
              <IoIosPeople className="text-[18px] text-color_main" />
              <span className="text-[13px]">5</span>
            </div>
            <div className=" h-[20px] flex items-center justify-start gap-1 text-bg_main w-[74px] cardIconText">
              <BsSpeedometer className="text-[14px] text-color_main" />
              <span className="text-[13px]">
                15/<span className=" text-[11px]">kmpl</span>
              </span>
            </div>
            <div className=" h-[20px] w-[114px] flex items-center justify-start gap-1 text-bg_main cardIconText">
              <GiStopwatch className="text-[14px] text-color_main" />
              <span className=" text-[13px]">
                980km/<span className=" text-[11px]">limit</span>
              </span>
            </div>
            <div className="h-[20px] w-[50px] flex items-center justify-start gap-1 text-bg_main cardIconText">
              <IoIosCard className="text-[14px] text-color_main" />
              <span className="text-[13px]">Req</span>
            </div>
          </div>
        </div>
        <div className=" w-full h-[34px] flex justify-between items-center bg-cysdfan-500 px-1">
          <div className=" flex items-center justify-center gap-1 font-semibold">
            <LuCalendarDays className="text-[18px] text-color_main" />
            <span className="text-[14px] font-openSans font-bold">
              3 days
            </span>{" "}
          </div>
          <div className="flex items-center text-[20px] cardIconText ">
            <LuIndianRupee className="text-color_main" />
            <span className="">6,540</span>{" "}
          </div>
        </div>{" "}
        <button className="w-full h-[36px] text-color_main transition-all duration-200 border-[2px] border-color_main text-[14px] items-center justify-center mt-1 rounded-[6px] button_main hover:bg-color_main hover:text-white hover:scale-[.98]">
          cancel Renting
        </button>
      </div>
    </div>
  );
};

export default ActiveCarComponetBox;
