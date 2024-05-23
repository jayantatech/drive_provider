"use client";
import { useState } from "react";
type TabType = string;
const HeroSearchboxTabs = ({ tabVehicles }: { tabVehicles: TabType[] }) => {
  const [activeTab, setActiveTab] = useState<TabType>(tabVehicles[0]);
  return (
    <div className=" min-w-[320px] bg-white min-h-[48px] flex flex-row gap-2 items-center justify-center p-1 rounded-t-[6px] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 font-bold max-md:w-[320px] ">
      {tabVehicles?.map((item, index) => (
        <button
          key={item}
          className={`w-[90px] h-[36px] transition-all duration-100 rounded-[4px] z-20 col-span-1 grow main_description ${
            activeTab === item ? "bg-color_main text-[#fff]" : "bg-white"
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
