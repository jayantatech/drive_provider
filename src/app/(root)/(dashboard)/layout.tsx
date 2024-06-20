import ContentWrapper from "@/components/contentWrapper/ContentWrapper";
import NavBar from "@/pages/dashboard/NavBar";
import React from "react";

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="relative">
      <ContentWrapper>
        <div className="flex my-4">
          <div className="w-[260px] h-full">
            <NavBar />
          </div>
          <section className="  flex min-h-screen flex-1 flex-col pt-2 px-4 pb-4">
            {children}
          </section>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default RootLayout;
