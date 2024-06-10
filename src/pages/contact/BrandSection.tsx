// components/BrandSection.tsx
import { FC } from "react";
import Image from "next/image";
import ContentWrapper from "@/components/contentWrapper/ContentWrapper";
import logo from "../../../public/logoipsum-297 (2).svg";
const companies = [
  { src: logo, alt: "Company 1" },
  { src: logo, alt: "Company 2" },
  { src: logo, alt: "Company 3" },
  { src: logo, alt: "Company 4" },
  { src: logo, alt: "Company 5" },
  { src: logo, alt: "Company 6" },
  { src: logo, alt: "Company 7" },
  { src: logo, alt: "Company 8" },
  { src: logo, alt: "Company 8" },
  { src: logo, alt: "Company 8" },
];

const BrandSection: FC = () => {
  return (
    <div className="bg-white py-16">
      <ContentWrapper>
        <h2 className="text-3xl font-bold text-center text-red-600 mb-8">
          Companies we love
        </h2>
        <p className="text-center text-gray-700 mb-12">
          We collaborate with top car rental companies to bring you the best
          experience.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex justify-center w-[210px] h-[48px] bg-slate-500"
            >
              <Image
                src={company.src}
                alt={company.alt}
                width={160}
                height={110}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </ContentWrapper>
    </div>
  );
};

export default BrandSection;
