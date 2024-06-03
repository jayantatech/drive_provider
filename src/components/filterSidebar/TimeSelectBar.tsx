import { useState } from "react";
import { IoFilterCircle } from "react-icons/io5";

const TimeSelectBar = () => {
  const [pickupCity, setPickupCity] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [dropoffTime, setDropoffTime] = useState("");

  return (
    <div className="bg-white px-4 py-2 rounded-[6px] shadow-lg w-full max-w-sm mx-auto border border-gray-200">
      <div className="w-full h-[36px] flex items-center justify-between border-b-2 border-[#e5eaee] mb-2">
        <span className="text-[16px] font-openSans font-semibold">
          {" "}
          Select Time
        </span>
        <div className="flex items-center justify-center gap-1 cursor-pointer text-color_main">
          <IoFilterCircle className="text-[18px]" />
          <span className="text-[13px] font-openSans font-medium">
            Reset All
          </span>
        </div>
      </div>
      <div className="space-y-6">
        <div>
          <label className="block text-sm mb-2 font-semibold font-openSans">
            Pick-up City
          </label>
          <select
            className="w-full border rounded-[6px] py-2 px-3 text-black border-[#e5eaee] text-[14px] font-medium font-openSans"
            value={pickupCity}
            onChange={(e) => setPickupCity(e.target.value)}
          >
            <option value="" disabled className="font-bold text-black">
              Select City
            </option>
            <option value="Bongaon">Bongaon</option>
            <option value="Paikpara">Paikpara</option>
          </select>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-2 font-semibold font-openSans">
              Pick-up Date
            </label>
            <input
              type="date"
              className="w-full border rounded-[6px] py-2 px-2 border-[#e5eaee] text-[14px] font-medium font-openSans"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm mb-2 font-semibold font-openSans">
              Drop-off Date
            </label>
            <input
              type="date"
              className="w-full border rounded-[6px] py-2 px-2 border-[#e5eaee] text-[14px] font-medium font-openSans"
              value={dropoffDate}
              onChange={(e) => setDropoffDate(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-2 font-semibold font-openSans">
              Pick-up Time
            </label>
            <input
              type="time"
              className="w-full border rounded-[6px] py-2 px-2 border-[#e5eaee] text-[14px] font-medium font-openSans"
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm mb-2 font-semibold font-openSans">
              Drop-off Time
            </label>
            <input
              type="time"
              className="w-full border rounded-[6px] py-2 px-2 border-[#e5eaee] text-[14px] font-medium font-openSans"
              value={dropoffTime}
              onChange={(e) => setDropoffTime(e.target.value)}
            />
          </div>
        </div>
        <button className="w-full py-1.5 bg-color_main text-white text-[16px] hover:bg-color_main transition duration-300 font-bold font-raleway rounded-[8px]">
          Search
        </button>
      </div>
    </div>
  );
};

export default TimeSelectBar;
