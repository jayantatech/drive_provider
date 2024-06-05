import Header from "@/components/header/Header";
import PageTitleSection from "@/components/pageTitleSection/PageTitleSection";
import { Car_Three } from "@/contants/img/cars/img";
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
      <div className="h-[750px]"></div>
    </div>
  );
};

export default About;
