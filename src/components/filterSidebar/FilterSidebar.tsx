import { carBrands, carTypes } from "@/contants/Contants";
import { useState } from "react";
import { IoFilterCircle } from "react-icons/io5";
import { Range } from "react-range";

const FilterSidebar = () => {
  const [priceRange, setPriceRange] = useState([2000, 10000]);
  const [transmission, setTransmission] = useState("Any");
  const [fuelType, setFuelType] = useState("Any");
  const [seats, setSeats] = useState("Any");
  const [brand, setBrand] = useState("Any");
  const [model, setModel] = useState("Any");

  return (
    <div className="w-full bg-white shadow-lg p-6 rounded-[10px] border-2 border-color_main">
      <div className="w-full h-[36px] flex items-center justify-between border-b-2 border-[#e5eaee] mb-2">
        <span className="text-[16px] font-openSans font-semibold">Filters</span>
        <div className="flex items-center justify-center gap-1 cursor-pointer text-color_main">
          <IoFilterCircle className="text-[18px]" />
          <span className="text-[13px] font-openSans font-medium">
            Reset All
          </span>
        </div>
      </div>
      {/* Price Range Filter */}
      <div className="mb-6">
        <label className="block text-sm font-bold mb-2 font-openSans">
          Price Range
        </label>
        <Range
          step={500}
          min={2000}
          max={10000}
          values={priceRange}
          onChange={(values) => setPriceRange(values)}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              className="w-full h-2 bg-red-100 rounded-lg cursor-pointer"
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              className="w-4 h-4 bg-color_main rounded-full shadow cursor-pointer"
            />
          )}
        />
        <div className="flex justify-between text-sm mt-2 font-openSans font-semibold">
          <span className="text-gray-700">₹{priceRange[0]}</span>
          <span className="text-gray-700">₹{priceRange[1]}</span>
        </div>
      </div>

      {/* Transmission Filter */}
      <div className="mb-6">
        <label className="block text-sm mb-2 font-bold font-openSans">
          Transmission
        </label>
        <select
          value={transmission}
          onChange={(e) => setTransmission(e.target.value)}
          className="w-full border rounded-[6px] py-2 px-3 border-[#e5eaee] text-[14px] font-medium font-openSans"
        >
          <option value="Any" className="py-2 text-[14px]">
            Any
          </option>
          <option value="Manual">Manual</option>
          <option value="Automatic">Automatic</option>
        </select>
      </div>

      {/* Fuel Type Filter */}
      <div className="mb-6">
        <label className="block text-sm mb-2 font-bold font-openSans ">
          Fuel Type
        </label>
        <select
          value={fuelType}
          onChange={(e) => setFuelType(e.target.value)}
          className="w-full border rounded-[6px] py-2 px-3  text-[14px] font-medium font-openSans"
        >
          <option value="Any">Any</option>
          <option value="Petrol">Petrol</option>
          <option value="Diesel">Diesel</option>
          <option value="Electric">Electric</option>
          <option value="Hybrid">Hybrid</option>
        </select>
      </div>

      {/* Seats Filter */}
      <div className="mb-6">
        <label className="block text-sm font-bold font-openSans mb-2">
          Seats
        </label>
        <select
          value={seats}
          onChange={(e) => setSeats(e.target.value)}
          className="w-full border rounded-[6px] py-2 px-3  text-[14px] font-medium font-openSans"
        >
          <option value="Any">Any</option>
          <option value="2">2</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="7">7</option>
        </select>
      </div>

      {/* Brand Filter */}
      <div className="mb-6">
        <label className="block text-sm font-bold font-openSans mb-2">
          Brand
        </label>
        <select
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="w-full border rounded-[6px] py-2 px-3  text-[14px] font-medium font-openSans"
        >
          <option value="Any">Any</option>
          {carBrands?.map((item) => (
            <option value={`${item.title}`}>{item.title}</option>
          ))}
        </select>
      </div>

      {/* Model Filter */}
      <div className="mb-6">
        <label className="block text-sm font-bold font-openSans mb-2">
          Type
        </label>
        <select
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className="w-full border rounded-[6px] py-2 px-3  text-[14px] font-medium font-openSans"
        >
          <option value="Any">Any</option>
          {carTypes?.map((item) => (
            <option key={item.title} value={item.title}>
              {item.title}
            </option>
          ))}
        </select>
      </div>
      <button className="w-full py-1.5 bg-color_main text-white text-[16px] hover:bg-color_main transition duration-300 font-bold font-raleway rounded-[8px] hover:scale-[.98]">
        Search
      </button>
    </div>
  );
};

export default FilterSidebar;
