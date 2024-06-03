import Header from "@/components/header/Header";
import CarSearchSection from "@/pages/carsSearchPage/CarSearchSection";
import FilterAndShowSection from "@/pages/carsSearchPage/FilterAndShowSection";

const page = () => {
  return (
    <>
      <Header className="bg-opacity-100 bg-black" />
      {/* <CarSearchSection /> */}
      <FilterAndShowSection />
    </>
  );
};

export default page;
