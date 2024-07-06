import CarRentalSection from "@/components/carRentalSection/CarRentalSection";
import ContentWrapper from "@/components/contentWrapper/ContentWrapper";
import Header from "@/components/header/Header";

import AlternativeCarsSection from "@/pages/carsSearchPage/carOverviewPage/AlternativeCarsSection";
import FeaturesSection from "@/pages/carsSearchPage/carOverviewPage/FeaturesSection";
import ImageSection from "@/pages/carsSearchPage/carOverviewPage/ImageSection";
import OverviewCarInfo from "@/pages/carsSearchPage/carOverviewPage/OverviewCarInfo";
import ReviewsAndRatingsSection from "@/pages/carsSearchPage/carOverviewPage/ReviewsAndRatingsSection";

const page = () => {
  return (
    <div>
      <Header />
      <div>
        <ContentWrapper>
          <div className="flex gap-2 max-lg:gap-2 flex-row bg-cyasn-500 relative w-full h-auto mt-6">
            <div className="w-[66%] max-md:w-full max-lg:w-[62%] h-auto">
              <ImageSection />
              <div className=" mt-4 visible md:hidden">
                <CarRentalSection />
              </div>
              <OverviewCarInfo />
              <FeaturesSection />
              <AlternativeCarsSection />
              <ReviewsAndRatingsSection />
              <div className="w-full h-[870px]"></div>
            </div>
            <div className=" visible max-md:hidden w-[34%] max-lg:w-[38%] h-auto bg-rsded-200 lg:px-3">
              <div className=" w-full h-auto sticky top-8 max-lg:top-6 right-0">
                <CarRentalSection />
              </div>
            </div>
          </div>
        </ContentWrapper>
      </div>
    </div>
  );
};

export default page;
