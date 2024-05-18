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
    <div className="w-[358px] h-[40px] flex flex-row gap-2">
      {vehicleModes?.map((item) => (
        <button
          className={`w-[180px] h-full border-[2px] border-color_main font-[Poppins] transition-all duration-200 font-semibold rounded-[6px] ${
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
