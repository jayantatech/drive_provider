import { auth } from "@/auth/auth";
import BrandsAndCarsModels from "@/pages/home/BrandsAndCarsModels";
import { HeroSection } from "@/pages/home/HeroSection";
import PopularCarsSection from "@/pages/home/PopularCarsSection";
import WhyUsSection from "@/pages/home/WhyUsSection";

export default async function Home() {
  const session = await auth();
  return (
    <div>
      <HeroSection />
      <BrandsAndCarsModels />
      <PopularCarsSection />
      <WhyUsSection />
      <div className="h-[750px]"></div>
    </div>
  );
}
