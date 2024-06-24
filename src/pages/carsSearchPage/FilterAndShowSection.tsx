"use client";
import { useState } from "react";
import FilterSidebar from "@/components/filterSidebar/FilterSidebar";
import VehicleComponentBox from "@/components/vehicleComponentBox/VehicleComponentBox";
import ContentWrapper from "@/components/contentWrapper/ContentWrapper";
import TimeSelectBar from "@/components/filterSidebar/TimeSelectBar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import CarSearchBar from "@/components/carSearchBar/CarSearchBar";

const FilterAndShowSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // Example total page number

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex min-h-screen max-lg:h-auto w-full relative">
      {/* <div className="flex flex-col gap-24 w-[120px] h-[280px] bg-sladte-600 top-40 -left-10  fixed">
        <Sheet>
          <SheetTrigger className="w-[120px] h-[34px] bg-color_main flex justify-center items-center text-[16px] font-raleway font-bold text-white rounded-[6px] rotate-90">
            Add Filter
          </SheetTrigger>
          <SheetContent className="bg-black max-md:w-[90%]">
            <div className="mt-10">
              <FilterSidebar />
            </div>
          </SheetContent>
        </Sheet>
        <Sheet>
          <SheetTrigger className="w-[120px] h-[34px] bg-color_main flex justify-center items-center text-[16px] font-raleway font-bold text-white rounded-[6px] rotate-90">
            {" "}
            Select Time{" "}
          </SheetTrigger>
          <SheetContent className="bg-black max-md:w-[90%]">
            <div className="pt-10">
              <TimeSelectBar />
            </div>
          </SheetContent>
        </Sheet>
      </div> */}
      <ContentWrapper>
        <div className="flex flex-col flex-grow items-center py-2 max-md:px-1 max-md:py-2">
          <CarSearchBar customClass="mt-4" />
          <div className="bg-fuchssia-400 w-full h-[54px] mb-2 flex items-center justify-start">
            <h4 className="text-[20px] font-semibold">{`${"23"} Vehicle Found`}</h4>
          </div>
          <div className="grid mx-auto grid-cols-4 max-md:grid-cols-1 max-lg:grid-cols-2 gap-2 justify-items-center align-items-center w-full max-lg:items-center max-lg:justify-center ">
            {[...Array(8)].map((_, index) => (
              <VehicleComponentBox key={index} />
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-4 w-[60%] max-lg:w-[94%] max-md:w-full h-[48px] py-2">
            <button
              className={`max-md:w-[80px] md:w-[110px] max-md:px-2 h-full border-2 font-openSans font-semibold text-[14px] rounded-[6px] transition-all duration-150 ${
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
                className={`px-6 max-md:px-2 h-full border-2 rounded-[6px] text-[16px] font-semibold transition-all duration-150 ${
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
              className={` max-md:w-[80px] md:w-[110px] max-md:px-2 h-full border-2 font-openSans font-semibold text-[14px] rounded-[6px] transition-all duration-150 ${
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
    </div>
  );
};

export default FilterAndShowSection;
