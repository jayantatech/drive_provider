import ContentWrapper from "@/components/contentWrapper/ContentWrapper";
import { CarKey } from "@/contants/img/others/img";
import Image from "next/image";
import { FaCar } from "react-icons/fa6";

const WhyUsSection = () => {
  return (
    <div className=" bg-black w-full h-[590px] flex items-center justify-center">
      <ContentWrapper>
        <div className=" w-full h-[488px] bg-red-500 flex gap-4">
          <div className="w-1/2 h-full bg-yellow-200 flex items-center justify-center">
            <Image
              src={CarKey}
              width={620}
              height={280}
              className=""
              alt="home key"
            />
          </div>
          <div className="w-1/2 h-full bg-cyan-600 flex flex-col gap-3">
            <div className="flex items-start gap-1 flex-col w-full h-[88px] bg-sky-400">
              <div className="flex items-center justify-center gap-2">
                <span className=" text-blue_main">
                  <FaCar />
                </span>
                <h3 className=" font-[Poppins] text-[16px] font-semibold text-blue_main">
                  ABOUT OUR COMPANY
                </h3>
              </div>
              <h2 className=" text-[44px] font-bold -mt-2">Why Choose Us?</h2>
            </div>
            <div className=" w-full h-[380px] bg-sky-300 py-2 flex flex-col gap-3">
              <div className="flex gap-2 w-full h-[110px] bg-orange-400">
                <div className=" w-[88px] h-[88px] rounded-full bg-red-300 flex items-center justify-center text-[48px] font-[Poppins]">
                  <span>1</span>
                </div>
                <div className=" w-[80%] h-full bg-amber-700">
                  <h3 className=" text-[22px] font-semibold font-[Roboto]">
                    24/7 Work Process
                  </h3>
                  <p className="font-[Poppins]">
                    Intrinsicly fashion enterprise manuftured products after
                    open source e-service engage transparent channels.
                  </p>
                </div>
              </div>
              <div className="flex gap-2 w-full h-[110px] bg-orange-400">
                <div className=" w-[88px] h-[88px] rounded-full bg-red-300 flex items-center justify-center text-[48px] font-[Poppins]">
                  <span>2</span>
                </div>
                <div className=" w-[80%] h-full bg-amber-700">
                  <h3 className=" text-[22px] font-semibold font-[Roboto]">
                    24/7 Work Process
                  </h3>
                  <p className="font-[Poppins]">
                    Intrinsicly fashion enterprise manuftured products after
                    open source e-service engage transparent channels.
                  </p>
                </div>
              </div>
              <div className="flex gap-2 w-full h-[110px] bg-orange-400">
                <div className=" w-[88px] h-[88px] rounded-full bg-red-300 flex items-center justify-center text-[48px] font-[Poppins]">
                  <span>3</span>
                </div>
                <div className=" w-[80%] h-full bg-amber-700">
                  <h3 className=" text-[22px] font-semibold font-[Roboto]">
                    24/7 Work Process
                  </h3>
                  <p className="font-[Poppins]">
                    Intrinsicly fashion enterprise manuftured products after
                    open source e-service engage transparent channels.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default WhyUsSection;
