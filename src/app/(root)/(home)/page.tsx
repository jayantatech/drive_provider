import { auth } from "@/auth/auth";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import ReviewsSection from "@/components/reviewsSection/ReviewsSection";
import { homeTitles } from "@/contants/Contants";
import {
  offeringCities,
  offeringVehicleTypes,
} from "@/contants/MainDependency";
import TestimonialsNewSection from "@/pages/about/TestimonialsNewSection";
import BrandsAndCarsModels from "@/pages/home/BrandsAndCarsModels";
import { HeroSection } from "@/pages/home/HeroSection";
import HeroSectionTwo from "@/pages/home/HeroSectionTwo";
import NewsAndPostSection from "@/pages/home/NewsAndPostSection";
import PopularCarsSection from "@/pages/home/PopularCarsSection";
import RentersImgesSection from "@/pages/home/RentersImgesSection";
import SpecialOffSection from "@/pages/home/SpecialOffSection";
import TestimonialsSection from "@/pages/home/TestimonialsSection";
import WhyToRentSection from "@/pages/home/WhyToRentSection";
import WhyUsSection from "@/pages/home/WhyUsSection";
import WorkProcess from "@/pages/home/WorkProcess";

export default async function Home() {
  // const session = await auth();

  return (
    <>
      <Header className={"absolute top-0 left-0 z-20 bg-opacity-30"} />
      <HeroSectionTwo />
      <BrandsAndCarsModels />
      <PopularCarsSection
        titleMain={homeTitles.first_Main_Section.mainTitleWord as string}
        titleBody={homeTitles.first_Main_Section.mainTitleBody}
        titleDescription={homeTitles.first_Main_Section.description}
        vehicleModes={offeringVehicleTypes}
        selectItems={{
          placeHolder: "location",
          selectLabel: "Select Your City",
          selectItems: offeringCities,
        }}
      />
      <PopularCarsSection
        titleMain={homeTitles.second_Section.mainTitleWord as string}
        titleBody={homeTitles.second_Section.mainTitleBody}
        titleDescription={homeTitles.second_Section.description}
        vehicleModes={offeringVehicleTypes}
        selectItems={{
          placeHolder: "location",
          selectLabel: "Select Your City",
          selectItems: offeringCities,
        }}
      />

      <WhyUsSection />
      <RentersImgesSection />
      <TestimonialsNewSection />
      <NewsAndPostSection />
      <SpecialOffSection />
      <Footer />
    </>
  );
}
