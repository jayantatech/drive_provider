import ContentWrapper from "@/components/contentWrapper/ContentWrapper";
import NavBar from "@/pages/dashboard/NavBar";
import React from "react";

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="relative">
      <ContentWrapper>
        <div className="flex my-8">
          <NavBar />
          <section className="flex min-h-screen flex-1 flex-col pt-8 px-4 pb-4 bg-sky-700">
            {children}
          </section>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default RootLayout;
