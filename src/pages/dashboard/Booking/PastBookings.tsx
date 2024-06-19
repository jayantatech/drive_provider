import PastCarComponetBox from "@/components/userDashboardComponents/PastCarComponetBox";
import React from "react";

const PastBookings = () => {
  return (
    <div className="pt-10">
      <div className="w-full h-auto mb-2 py-1">
        <span className=" px-2 h-[34px] w-full bg-color_main text-white font-raleway text-[14px] py-1 font-bold rounded-[4px]">
          Past Bookings
        </span>
      </div>
      <div className="w-full h-auto flex justify-start gap-5 items-center flex-row flex-wrap ">
        <PastCarComponetBox isAvailable={true} />
        <PastCarComponetBox isAvailable={true} />
        <PastCarComponetBox isAvailable={false} />
        <PastCarComponetBox isAvailable={true} />
      </div>
    </div>
  );
};

export default PastBookings;
