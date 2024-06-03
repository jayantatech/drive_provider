"use client";

import { useState } from "react";
import FilterSidebar from "@/components/filterSidebar/FilterSidebar";
import VehicleComponentBox from "@/components/vehicleComponentBox/VehicleComponentBox";
import ContentWrapper from "@/components/contentWrapper/ContentWrapper";
import TimeSelectBar from "@/components/filterSidebar/TimeSelectBar";

const FilterAndShowSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // Example total page number

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex bg-gray-100 min-h-screen w-full ">
      <div className="w-[364px] px-3 py-3 bg-orangsde-400">
        <FilterSidebar />
      </div>
      <ContentWrapper>
        <div className="flex flex-col flex-grow items-center px-6 py-4 bg-orsdange-300">
          <div className="grid grid-cols-4 gap-2 w-full">
            {/* Example Car Cards */}
            {[...Array(8)].map((_, index) => (
              <VehicleComponentBox key={index} />
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-4 w-[60%] h-[48px] py-2 bg-fusdfchsia-500">
            <button
              className={`px-4 h-full border-2 w-[15%] font-openSans  font-semibold text-[14px] rounded-[6px] transition-all duration-150 ${
                currentPage === 1
                  ? " border-color_main text-black cursor-not-allowed"
                  : "bg-color_main text-white"
              }`}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                className={`px-6 h-full border-2 rounded-[6px] text-[16px] font-semibold transition-all duration-150 ${
                  currentPage === index + 1
                    ? "bg-color_main text-white"
                    : "bg-white"
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            <button
              className={`px-4 h-full border-2 w-[15%] font-openSans  font-semibold text-[14px] rounded-[6px] transition-all duration-150 ${
                currentPage === totalPages
                  ? " border-color_main text-black cursor-not-allowed"
                  : "bg-color_main text-white"
              }`}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </ContentWrapper>
      <div className="w-[360px] bg-fuchssadia-500 px-2 py-4">
        <TimeSelectBar />
      </div>
    </div>
  );
};

export default FilterAndShowSection;
