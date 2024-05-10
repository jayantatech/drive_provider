import { auth } from "@/auth/auth";
import { HeroSection } from "@/pages/home/HeroSection";

export default async function Home() {
  const session = await auth();
  return (
    <div>
      <HeroSection />
    </div>
  );
}
