"use client";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { offeringVehicleTypes } from "@/contants/MainDependency";

type AllVehicles = typeof offeringVehicleTypes;

const VehicleSwitchBox = ({
  vehicleModes,
  selectItems,
}: {
  vehicleModes: AllVehicles;
  selectItems: {
    placeHolder: string;
    selectLabel: string;
    selectItems: string[];
  };
}) => {
  const [activeVehicle, setActiveVehicle] = useState<string>("Cars");

  function activeButtonHandler(item: string) {
    setActiveVehicle(item);
  }

  return (
    <div className="w-[588px] h-[40px] max-lg:h-[34px] flex flex-row gap-2 max-md:items-center max-md:justify-center justify-end items-center">
      <Select>
        <SelectTrigger className="w-[168px] max-lg:h-[34px] max-md:w-[150px] max-w-[220px] rounded-[6px] border-[2px] border-color_main text-color_main font-raleway font-semibold">
          <SelectValue placeholder={selectItems?.placeHolder} />
        </SelectTrigger>
        <SelectContent className="bg-white font-raleway font-semibold">
          <SelectGroup>
            <SelectLabel className="font-bold text-color_main">
              {selectItems?.selectLabel}
            </SelectLabel>
            {selectItems?.selectItems.map((item) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      {vehicleModes?.map((item) => (
        <button
          key={item}
          className={`w-[140px] max-lg:w-[160px] max-md:w-[110px] h-full border-[2px] border-color_main transition-all duration-200 rounded-[6px] text-[14px] button_main ${
            activeVehicle === item
              ? "bg-color_main text-white "
              : "text-color_main"
          }`}
          onClick={() => activeButtonHandler(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default VehicleSwitchBox;
