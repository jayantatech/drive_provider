import { Car } from "@/contants/img/cars/img";
import Image from "next/image";
import React from "react";
import { LuCalendarDays } from "react-icons/lu";
import { FaGasPump } from "react-icons/fa";
import { GiGearStick } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { BsSpeedometer } from "react-icons/bs";
import VehicleComponentBox from "@/components/vehicleComponentBox/VehicleComponentBox";
import ActiveCarComponetBox from "@/components/userDashboardComponents/ActiveCarComponetBox";
import { usePathname } from "next/navigation";

const ActiveBooking = () => {
  return (
    <>
      <div className="w-full h-auto mb-2 py-1 max-md:text-center">
        <span className=" px-2 h-[34px] w-full bg-color_main text-white font-raleway text-[14px] py-1 font-bold rounded-[4px]">
          Active Bookings
        </span>
      </div>
      <div className="w-full h-auto flex justify-start gap-5 items-center flex-row flex-wrap max-md:justify-center">
        <ActiveCarComponetBox />
        <ActiveCarComponetBox />
        <ActiveCarComponetBox />
      </div>
    </>
  );
};

export default ActiveBooking;

// <div className="w-full py-4 h-auto bg-sky-400 flex items-center justify-start flex-row flex-wrap gap-3 ">
//   <div className="w-[49%] h-[194px] bg-cyan-400 rounded-[6px] p-2.5 flex flex-row justify-between">
//     <div className="w-[34%] h-full flex flex-col gap-1.5">
//       <div className="w-full h-auto flex items-center justify-start gap-1 bg-gray-400">
//         {" "}
//         <LuCalendarDays className="text-[18px] text-color_main" />
//         <span className="font-raleway text-[16px] font-bold">
//           Booking Info
//         </span>
//       </div>
//       <div className="w-full h-[34px] bg-red-400">
//         <span className="text-[22px] font-bold font-raleway">
//           UL-ATDGSD
//         </span>
//       </div>
//       <div className="w-full h-auto bg-slate-200 flex flex-col gap-1">
//         <div className="w-full h-auto">
//           <span className="text-[12px] font-raleway font-bold">
//             Starting Date
//           </span>
//           <p className="text-[19px] font-openSans font-bold">15/10/2023</p>
//         </div>
//         <div className="w-full h-auto">
//           <span className="text-[12px] font-raleway font-bold">
//             End Date
//           </span>
//           <p className="text-[19px] font-openSans font-bold">15/10/2023</p>
//         </div>
//       </div>
//     </div>
//     <div className="w-[64%] h-full bg-color_main rounded-[6px] p-1 flex justify-between flex-col">
//       <div className="w-full h-[34px] bg-orange-100 flex items-center justify-start ">
//         <p className="text-[17px] font-openSans font-bold">
//           Mahindra XUV300
//         </p>
//       </div>
//       <div className="w-full h-[126px] bg-yellow-300">
//         <div className="w-full h-[32px] bg-fuchsia-400 flex flex-row ">
//           <div className="flex items-center justify-start bg-lime-400 h-full w-[44%] gap-1 ">
//             <FaGasPump className="text-[18px]" />
//             <span className="text-[14px] font-openSans font-semibold">
//               Peotrol
//             </span>
//           </div>
//           <div className="flex items-center justify-start bg-lime-400 h-full w-[54%] gap-1 ">
//             <GiGearStick className="text-[19px]" />
//             <span className="text-[14px] font-openSans font-semibold">
//               Automatic
//             </span>
//           </div>
//         </div>
//         <div className="w-full h-[93px] flex flex-row">
//           <div className="w-[44%] h-full bg-emerald-300">
//             <div className="flex items-center justify-start bg-lime-400 h-[30px] w-full gap-1 ">
//               <IoIosPeople className="text-[18px]" />
//               <span className="text-[14px] font-openSans font-semibold">
//                 Peotrol
//               </span>
//             </div>
//             <div className="flex items-center justify-start bg-lime-400 h-[30px] w-full gap-1 ">
//               <BsSpeedometer className="text-[17px]" />
//               <span className="text-[14px] font-openSans font-semibold">
//                 Peotrol
//               </span>
//             </div>
//             <div className="flex items-center justify-start bg-lime-400 h-[30px] w-full gap-1 ">
//               <FaGasPump className="text-[18px]" />
//               <span className="text-[14px] font-openSans font-semibold">
//                 Peotrol
//               </span>
//             </div>
//           </div>
//           <div>
//             <Image
//               alt="car image"
//               src={Car}
//               height={88}
//               width={154}
//               className="h-auto"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
