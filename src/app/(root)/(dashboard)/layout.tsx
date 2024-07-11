import ContentWrapper from "@/components/contentWrapper/ContentWrapper";
import Header from "@/components/header/Header";
import MobileDashboardNav from "@/components/mobileDashboardNav/MobileDashboardNav";
import NavBar from "@/pages/dashboard/NavBar";

import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      <div className="max-lg:flex hidden">
        <Header />
      </div>
      <ContentWrapper>
        <div className="flex my-4 max-md:my-2">
          <div className="max-lg:hidden visible w-[260px] h-full">
            <NavBar />
          </div>
          <div className="max-lg:flex hidden">
            <MobileDashboardNav />
          </div>
          <section className="flex min-h-screen flex-1 flex-col pt-2 md:px-4 pb-4">
            {children}
          </section>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default RootLayout;
