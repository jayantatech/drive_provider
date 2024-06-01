import Image, { StaticImageData } from "next/image";

const IconBox = ({
  label,
  boxArray,
  isShadow,
}: {
  boxArray: { logo: StaticImageData; title: string }[];
  label: { title: string; subTitle: string };
  isShadow: boolean;
}) => {
  return (
    <>
      <div className="w-full h-[60px] max-lg:h-[48px] flex items-center justify-between">
        <h2 className=" text-[22px] sub_title text-white">
          Browse by <span className="text-color_main">{label?.title}</span>
        </h2>
        <span className="border-b-[1px] text-[13px] font-raleway border-slate-200 cursor-pointer text-white">
          Show all {label?.subTitle?.toLowerCase()}
        </span>
      </div>
      <div className="flex items-center justify-between max-md:justify-evenly flex-row flex-wrap gap-4 mt-[10px] max-md:w-full h-auto mx-auto p-1">
        {boxArray?.map((item, index) => (
          <span
            className={`col-span-1 w-[130px] max-lg:w-[160px] max-md:max-w-[150px] h-[86px] max-lg:h-[74px] bg-white flex items-center justify-center flex-col gap-1 rounded-[6px] max-lg:rounded-[4px] cursor-pointer  border hover:border-color_main hover:scale-105 transition-all duration-200 ${
              isShadow ? "shadow-lg" : "shadow-sm border-color_main"
            }`}
            key={index}
          >
            <Image src={item.logo} width={80} height={80} alt="car_brand" />
            <span className="iconCardTitle mx-auto">{item.title}</span>
          </span>
        ))}
      </div>
    </>
  );
};

export default IconBox;
