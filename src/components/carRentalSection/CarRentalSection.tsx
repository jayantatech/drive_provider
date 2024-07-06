"use client";
import React, { useState, useEffect } from "react";

const CarRentalSection: React.FC = () => {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [error, setError] = useState<string>("");

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "startDate") {
      setStartDate(value);
    } else {
      setEndDate(value);
    }
  };

  useEffect(() => {
    if (startDate && endDate) {
      calculatePrice();
    }
  }, [startDate, endDate]);

  const calculatePrice = () => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (start >= end) {
      setError("End date must be later than start date");
      setPrice(0); // Reset price if dates are invalid
      return;
    } else {
      setError("");
    }

    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffHours = Math.ceil(
      (diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    const dayRate = 1000; // Example rate per day
    const hourRate = 100; // Example rate per hour

    const totalPrice = diffDays * dayRate + diffHours * hourRate;
    setPrice(totalPrice);
  };

  return (
    <div className="w-full h-auto  bg-white shadow-md rounded-[6px] overflow-hidden border ">
      <div className="p-4">
        <h2 className="text-xl max-lg:text-[18px] font-bold mb-2 font-openSans ">
          2022 Hyundai Venue SX BSVI
        </h2>
        <p className="text-gray-600 font-semibold text-sm">
          Kalikapur, Kolkata
        </p>
        <p className="text-gray-600">12,000 kms • Petrol • Manual</p>
        <div className="my-4">
          <label className="block text-gray-700 ">Start Date and Time</label>
          <input
            type="datetime-local"
            name="startDate"
            value={startDate}
            onChange={handleDateChange}
            className="w-full px-3 py-2 text-[14px] border rounded-[6px]"
          />
        </div>
        <div className="my-4">
          <label className="block text-gray-700">End Date and Time</label>
          <input
            type="datetime-local"
            name="endDate"
            value={endDate}
            onChange={handleDateChange}
            className="w-full px-3 py-2 text-[14px] border rounded-[6px]"
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="my-3">
          <p className="text-lg font-semibold">Rental Price: ₹{price}</p>
        </div>
        <button className="w-full bg-color_main text-white py-2 rounded-[6px] text-[14px] font-raleway font-bold hover:scale-[.98] transition-all duration-150">
          Book the car{" "}
        </button>
        <p className="text-red-500 mt-2 font-openSans text-[13px] font-semibold">
          Trending Car! High chances of sale in next 6 days
        </p>
      </div>
    </div>
  );
};

export default CarRentalSection;
