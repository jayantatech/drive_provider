import ContentWrapper from "@/components/contentWrapper/ContentWrapper";
import HeroSearchBox from "@/components/heroSearchBox/HeroSearchBox";

const CarSearchSection = () => {
  return (
    <div className="w-full h-auto bg-fuchsia-400">
      <ContentWrapper>
        <div className="w-full h-[120px] flex items-center justify-center">
          <HeroSearchBox bgClass={"bg-black"} />{" "}
        </div>
      </ContentWrapper>
    </div>
  );
};

export default CarSearchSection;
