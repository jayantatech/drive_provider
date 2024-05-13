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
    if (!value.date && !value.time) return null;
    setFormData({
      ...formData,
      pickupInfo: {
        pickupDate: value?.date,
        pickupTime: value.time,
      },
    });
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
    <div className="w-[1030px] h-[160px] flex flex-col items-start justify-start">
      <HeroSearchboxTabs tabVehicles={["Cars", "Bikes"]} />
      <div
        className="h-[80px] bg-white rounded-r-[6px] rounded-bl-[6px] p-2 flex items-center justify-center gap-2 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 "
        onSubmit={(event) => handleFormSubmit(event)}
      >
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
        <DateAndTimePicker
          dateInputPlaceholder="Drop-off Date"
          timeInputPlaceholder="Drop-off Time"
          onChange={handleDropOffInfo}
        />
        <button
          type="submit"
          className="bg-blue_main text-white px-6 py-2 rounded-[5px] flex items-center justify-center"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default HeroSearchBox;
