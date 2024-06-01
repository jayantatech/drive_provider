import ContentWrapper from "@/components/contentWrapper/ContentWrapper";
import IconBox from "@/components/iconBox/IconBox";
import { carBrands, carTypes } from "@/contants/Contants";

const BrandsAndCarsModels = () => {
  const maxCarsToShow = carBrands?.slice(0, 8);
  const maxTypesToShow = carTypes?.slice(0, 8);
  return (
    <section className="bg-black py-14 max-lg:py-8">
      <ContentWrapper>
        <div className="flex items-center justify-center gap-6 max-lg:gap-2 max-lg:flex-col max-md:flex-col">
          <div className="w-2/4 max-lg:w-full h-[290px] max-md:h-[460px] py-4 max-lg:py-1 max-lg:h-[240px]">
            <IconBox
              boxArray={maxCarsToShow}
              label={{ title: "Make", subTitle: "makers" }}
              isShadow={true}
            />
          </div>
          <div className="w-2/4 max-lg:w-full h-[290px] max-md:h-[460px] py-4 max-lg:py-1 max-lg:h-[240px]">
            <IconBox
              boxArray={maxTypesToShow}
              label={{ title: "Make", subTitle: "makers" }}
              isShadow={false}
            />
          </div>
        </div>
      </ContentWrapper>
    </section>
  );
};

export default BrandsAndCarsModels;
