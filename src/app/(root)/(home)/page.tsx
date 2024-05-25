import { auth } from "@/auth/auth";
import ReviewsSection from "@/components/reviewsSection/ReviewsSection";
import BrandsAndCarsModels from "@/pages/home/BrandsAndCarsModels";
import { HeroSection } from "@/pages/home/HeroSection";
import HeroSectionTwo from "@/pages/home/HeroSectionTwo";
import PopularCarsSection from "@/pages/home/PopularCarsSection";
import WhyToRentSection from "@/pages/home/WhyToRentSection";
import WhyUsSection from "@/pages/home/WhyUsSection";
import WorkProcess from "@/pages/home/WorkProcess";

export default async function Home() {
  const session = await auth();
  return (
    <div>
      {/* <HeroSection /> */}
      <HeroSectionTwo />
      <BrandsAndCarsModels />
      <PopularCarsSection />
      <WhyUsSection />
      <div className="h-[750px]"></div>
    </div>
  );
}
