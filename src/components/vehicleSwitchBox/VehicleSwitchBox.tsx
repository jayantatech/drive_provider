"use client";
import { useState } from "react";
type allVehicles = "cars" | "bikes";
const VehicleSwitchBox = ({
  vehicleModes,
}: {
  vehicleModes: allVehicles[];
}) => {
  const [activeVehicle, setActiveVehicle] = useState<allVehicles>("cars");

  function activeButtonHandler(item: allVehicles) {
    setActiveVehicle(item);
  }

  return (
    <div className="w-[358px] h-[40px] max-lg:h-[34px] flex flex-row gap-2 max-md:items-center max-md:justify-center">
      {vehicleModes?.map((item) => (
        <button
          className={`w-[180px] max-lg:w-[160px] h-full border-[2px] border-color_main transition-all duration-200 rounded-[6px] text-[14px] button_main ${
            activeVehicle === item
              ? "bg-color_main text-white "
              : "text-color_main"
          }`}
          onClick={() => activeButtonHandler(item)}
        >
          {" "}
          {item}
        </button>
      ))}
    </div>
  );
};

export default VehicleSwitchBox;
