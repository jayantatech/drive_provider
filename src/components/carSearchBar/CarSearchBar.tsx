"use client";
import { useState } from "react";
import { FaSearch, FaFilter, FaClock } from "react-icons/fa";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import FilterSidebar from "@/components/filterSidebar/FilterSidebar";
import TimeSelectBar from "@/components/filterSidebar/TimeSelectBar";
import { IoSearchSharp } from "react-icons/io5";

const CarSearchBar = ({ customClass }: { customClass?: string }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search submission logic here
  };

  return (
    <div
      className={`w-full h-[68px] flex justify-center items-center px-4 bg-white shadow-lg rounded-[6px] border max-md:h-[128px]  ${customClass}`}
    >
      <form
        onSubmit={handleSearchSubmit}
        className="w-full max-w-[1270px] flex items-center gap-4 max-md:flex-col"
      >
        <div className="relative flex-grow max-md:w-full ">
          <FaSearch className="absolute text-[16px] top-1/2 transform -translate-y-1/2 left-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search cars..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-4 py-1.5 border rounded-[6px] focus:outline-none focus:ring-1 focus:ring-red-500 text-[15px]"
          />
        </div>
        <div className="max-md:w-full max-md:h-auto flex flex-row items-center max-md:justify-center gap-3 md:gap-3">
          <Sheet>
            <SheetTrigger className="flex items-center border-color_main text-color_main px-1.5 py-[5px] rounded-[6px] outline-none hover:scale-[.98] transition-all duration-150 font-raleway text-[14px] max-md:text-[12px] font-bold border-2">
              <FaFilter className="mr-2" />
              Add Filter
            </SheetTrigger>
            <SheetContent className="bg-white">
              <div className="mt-10">
                <FilterSidebar />
              </div>
            </SheetContent>
          </Sheet>
          <Sheet>
            <SheetTrigger className="flex items-center border-color_main text-color_main px-1.5 py-[5px] rounded-[6px] outline-none hover:scale-[.98] transition-all duration-150 font-raleway text-[14px] max-md:text-[12px] font-bold border-2">
              <FaClock className="mr-2 text-[16px]" />
              Select Time
            </SheetTrigger>
            <SheetContent className="bg-white">
              <div className="pt-10">
                <TimeSelectBar />
              </div>
            </SheetContent>
          </Sheet>
          <button className="flex items-center bg-color_main text-white px-3 py-[7px] rounded-[6px] outline-none hover:scale-[.98] transition-all duration-150 font-raleway text-[14px] max-md:text-[12px] font-bold">
            <IoSearchSharp className="mr-2 text-[19px]" />
            Search{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CarSearchBar;
