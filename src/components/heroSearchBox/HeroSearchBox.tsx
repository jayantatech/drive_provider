"use client";
import React, { useState } from "react";
import SelectDropdown from "../selectDropdown/SelectDropdown";
import DateAndTimePicker from "../dateAndTimePicker/DateAndTimePicker";
import HeroSearchboxTabs from "../heroSearchboxTabs/HeroSearchboxTabs";

const HeroSearchBox = () => {
  const [formData, setFormData] = useState({
    location: "",
    pickupInfo: {},
    dropOffInfo: {},
  });

  const handleLocation = (value: string) => {
    console.log("this is the value", value);
    setFormData({
      ...formData,
      location: value,
    });
  };
  const handlePickupInfo = (value: object) => {
    if (value?.date && value?.time) {
      setFormData({
        ...formData,
        pickupInfo: {
          pickupDate: value?.date,
          pickupTime: value.time,
        },
      });
    }
  };
  const handleDropOffInfo = (value: object) => {
    if (!value.date && !value.time) return null;
    setFormData({
      ...formData,
      dropOffInfo: {
        dropOffDate: value?.date,
        dropOffTime: value.time,
      },
    });
  };
  const handleFormSubmit = (event: React.FormEvent) => {
    console.log(event, typeof event);
    event.preventDefault();
    console.log("Form data:", formData);
  };

  return (
    <form
      className="w-[1030px] max-lg:w-[620px] max-lg:h-[160px] max-md:h-[280px] max-md:w-[100%] flex flex-col items-start justify-start max-md:items-center "
      onSubmit={(event) => handleFormSubmit(event)}
    >
      <HeroSearchboxTabs tabVehicles={["Cars", "Bikes"]} />
      <div className="h-[80px] max-lg:h-[110px] max-md:h-[220px] max-md:w-[350px] w-full bg-white rounded-r-[6px] rounded-bl-[6px] p-2 flex items-center justify-center gap-2 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 max-lg:flex-col max-lg:py-3 max-md:rounded-t-[6px]">
        <div className=" w-full h-full flex max-md:flex-col gap-2 items-center justify-center">
          <SelectDropdown
            selectionItems={["Kolkata", "Bengaluru"]}
            selectionLabel="location"
            selectionPlaceHolder="Select Your City"
            onChange={handleLocation}
          />{" "}
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
            className="bg-color_main text-white px-[35px] py-2 rounded-[5px] flex items-center justify-center max-lg:w-[270px] max-md:w-[340px]"
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default HeroSearchBox;
