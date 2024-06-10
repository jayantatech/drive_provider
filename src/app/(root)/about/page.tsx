import Header from "@/components/header/Header";
import PageTitleSection from "@/components/pageTitleSection/PageTitleSection";
import { Car_Three } from "@/contants/img/cars/img";
import AboutInfoSeciton from "@/pages/about/AboutInfoSeciton";
import AppKeyPoints from "@/pages/about/AppKeyPoints";
import OurKeyPoints from "@/pages/about/OurKeyPoints";
import OurTeam from "@/pages/about/OurTeam";
import TestimonialsNewSection from "@/pages/about/TestimonialsNewSection";
import SpecialOffSection from "@/pages/home/SpecialOffSection";
import React from "react";

const About = () => {
  return (
    <div>
      <Header />
      <PageTitleSection
        pageTitle="About Us"
        pageLink="/about"
        sectionBackgroundImage={Car_Three}
        key={"about"}
      />
      <AboutInfoSeciton />
      <OurKeyPoints />
      <OurTeam />
      <TestimonialsNewSection />
      <SpecialOffSection />
    </div>
  );
};

export default About;
