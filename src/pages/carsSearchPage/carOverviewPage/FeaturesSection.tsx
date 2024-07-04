import { MdFileDownloadDone } from "react-icons/md";

const FeaturesSection = () => {
  return (
    <div className="w-full h-[206px] max-lg:h-[246px] rounded-[6px] shadow-lg bg-white p-4 max-lg:p-2 my-4 border-2">
      <h3 className="text-[22px] max-lg:text-[20px] font-raleway font-bold pb-2">
        Features
      </h3>
      <div className="w-full h-[128px] max-lg:h-[174px]  grid grid-flow-row grid-cols-3 max-lg:grid-cols-2 grid-rows-2 max-lg:grid-rows-3 gap-2 content-start">
        {[...Array(4)].map((item) => (
          <div className="col-span-1 row-span-1 h-auto  flex items-center justify-start gap-2">
            <div className="w-[20px] h-auto">
              <MdFileDownloadDone className="text-[20px] max-lg:text-[18px] text-color_main" />
            </div>
            <span className="text-[15px] max-lg:text-[14px] font-openSans font-medium">
              {" It has some good mailageIt has  "}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
