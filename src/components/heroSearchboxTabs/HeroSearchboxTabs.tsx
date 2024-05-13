"use client";
import { useState } from "react";
type TabType = string;
const HeroSearchboxTabs = ({ tabVehicles }: { tabVehicles: TabType[] }) => {
  const [activeTab, setActiveTab] = useState<TabType>(tabVehicles[0]);
  return (
    <div className=" min-w-[320px] bg-white h-[48px] flex flex-row gap-2 items-center justify-center p-1 rounded-t-[6px] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 font-[poppins] font-bold relative">
      {tabVehicles?.map((item, index) => (
        <button
          className={`w-[155px] h-[36px] text-black rounded-[4px] z-20  ${
            activeTab === item ? "bg-blue_main text-[#fff]" : "bg-white"
          }`}
          onClick={() => setActiveTab(item)}
        >
          {item}{" "}
        </button>
      ))}
    </div>
  );
};

export default HeroSearchboxTabs;
