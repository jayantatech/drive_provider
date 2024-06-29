"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import SelectDropdown from "../selectDropdown/SelectDropdown";
import DateAndTimePicker from "../dateAndTimePicker/DateAndTimePicker";
import HeroSearchboxTabs from "../heroSearchboxTabs/HeroSearchboxTabs";
import {
  setDropOffInfo,
  setLocation,
  setPickupInfo,
} from "@/store/homeReducer";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { offeringVehicleTypes } from "@/contants/MainDependency";

type Props = {
  isBoxTabs?: boolean;
  bgClass?: string;
};

type PickupDropOffInfo = {
  date?: string;
  time?: string;
};

type formSearchType = {
  location: string;
  pickupInfo: { pickupDate: string; pickupTime: string };
  dropOffInfo: { dropOffDate: string; dropOffTime: string };
};

const HeroSearchBox = ({ isBoxTabs, bgClass }: Props) => {
  const [formData, setFormData] = useState<formSearchType>({
    location: "",
    pickupInfo: { pickupDate: "", pickupTime: "" },
    dropOffInfo: { dropOffDate: "", dropOffTime: "" },
  });

  const dispatch = useAppDispatch();
  const location = useAppSelector(setLocation);
  // // console.log(location);

  const handleLocation = (value: string) => {
    // console.log("Location:", value);
    setFormData({
      ...formData,
      location: value,
    });
  };

  const handlePickupInfo = (value: PickupDropOffInfo) => {
    // // console.log("Pickup Info:", value);
    if (value?.date && value?.time) {
      setFormData({
        ...formData,
        pickupInfo: {
          pickupDate: value.date,
          pickupTime: value.time,
        },
      });
    }
  };

  const handleDropOffInfo = (value: PickupDropOffInfo) => {
    if (!value.date && !value.time) return null;
    setFormData({
      ...formData,
      dropOffInfo: {
        dropOffDate: value.date as string,
        dropOffTime: value.time as string,
      },
    });
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // // console.log("Form data:", formData);
    dispatch(setLocation(formData.location));
    dispatch(setPickupInfo(formData.pickupInfo));
    dispatch(setDropOffInfo(formData.dropOffInfo));
  };

  return (
    <form
      className="w-[1046px] max-lg:w-[620px] max-lg:h-[160px] max-md:h-[280px] max-md:w-[100%] flex flex-col items-start justify-start max-md:items-center"
      onSubmit={handleFormSubmit}
    >
      {isBoxTabs && (
        <div className="w-full h-auto flex items-center justify-start max-md:justify-center">
          <HeroSearchboxTabs tabVehicles={offeringVehicleTypes} />
        </div>
      )}
      <div
        className={`h-[80px] max-lg:h-[110px] max-md:h-[220px] max-md:w-[364px] w-full rounded-r-[6px] rounded-bl-[6px] p-2 flex items-center justify-center gap-2 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 max-lg:flex-col max-lg:py-3 max-md:rounded-t-[6px] ${
          bgClass ? bgClass : "bg-white"
        }`}
      >
        <div className="w-full h-full flex max-md:flex-col gap-2 items-center justify-center">
          <SelectDropdown
            selectionItems={["Kolkata", "Bengaluru"]}
            selectionLabel="location"
            selectionPlaceHolder="Select Your City"
            onChange={handleLocation}
          />
          <DateAndTimePicker
            dateInputPlaceholder="Pick-up Date"
            timeInputPlaceholder="Pick-up Time"
            onChange={handlePickupInfo}
          />
        </div>
        <div className="flex flex-row max-md:flex-col items-center justify-between h-full w-full max-md:gap-1 gap-2">
          <DateAndTimePicker
            dateInputPlaceholder="Drop-off Date"
            timeInputPlaceholder="Drop-off Time"
            onChange={handleDropOffInfo}
          />
          <button
            type="submit"
            className="bg-color_main text-white w-[132px] h-[40px] rounded-[5px] flex items-center justify-center max-lg:w-[270px] max-md:w-[340px] font-openSans text-[16px] font-bold"
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default HeroSearchBox;
