import ContentWrapper from "@/components/contentWrapper/ContentWrapper";
import Header from "@/components/header/Header";
import FeaturesSection from "@/pages/carsSearchPage/carOverviewPage/FeaturesSection";
import ImageSection from "@/pages/carsSearchPage/carOverviewPage/ImageSection";
import OverviewCarInfo from "@/pages/carsSearchPage/carOverviewPage/OverviewCarInfo";

const page = () => {
  return (
    <div>
      <Header />
      <div>
        <ContentWrapper>
          <div className="flex gap-3 max-lg:gap-1 flex-row bg-cyasn-500 relative w-full h-auto mt-6">
            <div className="w-[66%] h-auto">
              <ImageSection />
              <OverviewCarInfo />
              <FeaturesSection />
              <div className="w-full h-[870px]"></div>
            </div>
            <div className="w-[34%] h-[77px] bg-fuchsia-700 sticky right-0 top-20"></div>
          </div>
        </ContentWrapper>
      </div>
    </div>
  );
};

export default page;
