import { auth } from "@/auth/auth";
import ReviewsSection from "@/components/reviewsSection/ReviewsSection";
import BrandsAndCarsModels from "@/pages/home/BrandsAndCarsModels";
import { HeroSection } from "@/pages/home/HeroSection";
import PopularCarsSection from "@/pages/home/PopularCarsSection";
import WhyUsSection from "@/pages/home/WhyUsSection";
import WorkProcess from "@/pages/home/WorkProcess";

export default async function Home() {
  const session = await auth();
  return (
    <div>
      <HeroSection />
      <BrandsAndCarsModels />
      <PopularCarsSection />
      <WhyUsSection />
      <WorkProcess />
      <ReviewsSection />

      <div className="h-[750px]"></div>
    </div>
  );
}
