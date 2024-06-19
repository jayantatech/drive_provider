"use client";
import ActiveBooking from "@/pages/dashboard/Booking/ActiveBooking";
import PastBookings from "@/pages/dashboard/Booking/PastBookings";
import { usePathname } from "next/navigation";
import { MdAddBox } from "react-icons/md";

const Booking = () => {
  const pathname = usePathname();
  const splitePathname = pathname?.split("/")[1];
  return (
    <>
      <div className="w-full h-[40px] mb-2 flex items-center justify-between">
        <h3 className="text-[26px] font-raleway font-bold capitalize">
          {splitePathname}
        </h3>{" "}
        <div className="w-auto h-full flex items-center justify-end ">
          <button className="py-1 px-2 bg-color_main font-raleway text-[14px] font-bold rounded-[6px] flex items-center justify-center gap-1 text-white ">
            <MdAddBox className="text-[18px]" />
            Book New Car
          </button>
        </div>
      </div>
      <ActiveBooking />
      <PastBookings />
    </>
  );
};

export default Booking;
