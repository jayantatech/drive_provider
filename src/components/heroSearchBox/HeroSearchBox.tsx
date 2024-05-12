"use client";
import React, { useState } from "react";
import DatePicker from "../datePicker/DatePicker";
import SelectDropdown from "../selectDropdown/SelectDropdown";

const HeroSearchBox = () => {
  const [formData, setFormData] = useState({
    location: "",
    date: undefined,
  });

  const handleLocation = (value: string) => {
    console.log("this is the value", value);
    setFormData({
      ...formData,
      location: value,
    });
  };
  const handleDate = (value) => {
    console.log("this is the value", value);
    setFormData({
      ...formData,
      date: value,
    });
  };
  const handleFormSubmit = (event: React.FormEvent) => {
    console.log(event, typeof event);
    event.preventDefault();
    console.log("Form data:", formData);
  };

  return (
    <form
      className=" w-[80%] h-[140px] bg-blue-600 rounded-[10px] p-2 flex items-center justify-center gap-3"
      onSubmit={(event) => handleFormSubmit(event)}
    >
      <SelectDropdown
        selectionItems={["Kolkata", "Bengaluru"]}
        selectionLabel="location"
        selectionPlaceHolder="Select Your City"
        onChange={handleLocation}
      />
      <DatePicker
        placeholderText="Pick-up date - Drop-off date"
        onChange={handleDate}
      />

      <button type="submit" className="bg-red-200 px-2 py-2 rounded-[5px]">
        this is Ok
      </button>
    </form>
  );
};

export default HeroSearchBox;
