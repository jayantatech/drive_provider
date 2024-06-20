import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import PageTitleSection from "@/components/pageTitleSection/PageTitleSection";
import { carDriving } from "@/contants/img/others/img";
import ContactInfoSection from "@/pages/contact/ContactInfoSection";
import GetInTouchSection from "@/pages/contact/GetInTouchSection";
import SpecialOffSection from "@/pages/home/SpecialOffSection";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <PageTitleSection
        sectionBackgroundImage={carDriving}
        pageLink="/contact"
        pageTitle="Contact"
        key={"contact"}
      />
      <GetInTouchSection />
      <ContactInfoSection />
      <SpecialOffSection />
      <Footer />
    </div>
  );
};

export default page;
