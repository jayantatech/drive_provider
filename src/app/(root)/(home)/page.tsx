import { auth } from "@/auth/auth";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import ReviewsSection from "@/components/reviewsSection/ReviewsSection";
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
  const session = await auth();

  return (
    <>
      <Header className={"absolute top-0 left-0 z-20 bg-opacity-30"} />
      <HeroSectionTwo />
      <BrandsAndCarsModels />
      <PopularCarsSection
        titleMain="Top"
        titleBody="Rental Picks"
        titleDescription=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam quam quasi facere aperiam sequi. Autem reiciendis nobis numquam magni tenetur!"
        vehicleModes={["cars", "bikes"]}
        selectItems={{
          placeHolder: "location",
          selectLabel: "Select Your City",
          selectItems: ["Kolkata", "Bangaluru"],
        }}
      />
      <PopularCarsSection
        titleMain="Exclusive"
        titleBody="Rental Deals"
        titleDescription=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam quam quasi facere aperiam sequi. Autem reiciendis nobis numquam magni tenetur!"
        vehicleModes={["cars", "bikes"]}
        selectItems={{
          placeHolder: "location",
          selectLabel: "Select Your City",
          selectItems: ["Kolkata", "Bangaluru"],
        }}
      />

      <WhyUsSection />
      <RentersImgesSection />
      {/* <TestimonialsSection /> */}
      <TestimonialsNewSection />
      <NewsAndPostSection />
      <SpecialOffSection />
      {/* <div className="h-[750px]"></div> */}
    </>
  );
}
