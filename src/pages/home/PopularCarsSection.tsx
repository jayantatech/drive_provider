import ContentWrapper from "@/components/contentWrapper/ContentWrapper";
import { Car } from "@/contants/img/cars/img";
import Image from "next/image";
import { FaGasPump } from "react-icons/fa6";
import { GiGearStick } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";

const PopularCarsSection = () => {
  return (
    <div className="my-[98px]">
      <ContentWrapper>
        <div className="flex flex-col gap-2">
          <div className=" pb-5 bg-red-400 py-2">
            {" "}
            <h2 className="text-[26px] font-semibold font-[Poppins]">
              The Most <span className="text-blue_main"> Popular </span> Cars
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              ad nobis temporibus? Nam fuga magnam porro dolorum, dicta
              voluptatibus reprehenderit.
            </p>
          </div>
          <div className=" bg-green-500 w-full h-[420px] p-4">
            <div className=" w-[284px] bg-red-400 h-[340px] rounded-[6px]">
              <div className=" bg-black w-full h-[140px] rounded-t-[6px] overflow-hidden">
                <Image
                  src={Car}
                  width={284}
                  height={180}
                  alt="card_Image"
                  className=""
                />
              </div>
              <div className=" bg-green-700 w-full h-[200px] p-[6px]">
                <div className="w-full h-[50px] bg-slate-300 flex flex-col items-start justify-start">
                  <span className="px-4 py-[1px] rounded-[6px] bg-blue_main text-white font-[Poppins] shadow-md">
                    Suv
                  </span>
                  <h3 className=" font-semibold text-[16px] font-[Poppins]">
                    Mahindra XUV300
                  </h3>
                </div>
                <div className="w-full h-[72px] bg-red-700 grid grid-cols-5 items-center justify-center gap-2">
                  {/* i have to fix the grid layout problem  */}
                  <div className="bg-white col-span-2 h-[28px] flex items-center justify-start gap-1 text-bg_main font-[Poppins]">
                    <FaGasPump className="text-[16px]" />
                    <span className=" font-semibold text-[14px]">Petrol</span>
                  </div>
                  <div className="bg-white col-span-2 h-[28px] flex items-center justify-start gap-1 text-bg_main font-[Poppins]">
                    <GiGearStick className="text-[16px]" />
                    <span className=" font-semibold text-[14px]">
                      automatic{" "}
                    </span>
                  </div>
                  <div className="bg-white col-span-1 h-[28px] flex items-center justify-start gap-1 text-bg_main font-[Poppins]">
                    <IoIosPeople className="text-[18px]" />
                    <span className=" font-semibold text-[14px]">5</span>
                  </div>
                  <div className="bg-white col-span-1 h-[28px] flex items-center justify-start gap-1 text-bg_main font-[Poppins]">
                    <IoIosPeople className="text-[18px]" />
                    <span className=" font-semibold text-[14px]">5</span>
                  </div>
                </div>
                {/* <div className=" w-full h-[48px] px-2 mt-2">
                  <div className="w-full h-full bg-white rounded-[6px] flex gap-2 shadow-md">
                    <div className="w-1/3 h-full flex items-center justify-center flex-col relative">
                      <span className="font-[Poppins] text-[15px] font-semibold">
                        Mileage{" "}
                      </span>
                      <span className="font-[Poppins] text-[13px] font-semibold">
                        {" "}
                        50 kmpl
                      </span>
                      <span className="w-[1px] h-[28px] bg-slate-500 absolute right-0"></span>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default PopularCarsSection;
