import ContentWrapper from "@/components/contentWrapper/ContentWrapper";
import { IoLocationSharp } from "react-icons/io5";
import { MdPhoneInTalk } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";

const ContactInfoSection = () => {
  return (
    <div className="py-12">
      <ContentWrapper>
        <div className="w-full h-[144px] max-lg:h-[240px] max-md:h-auto bg-black rounded-[6px] grid grid-flow-col grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:grid-rows-4 max-md:gap-2 max-md:py-4 max-lg:grid-rows-2 justify-items-center items-center shadow-lg">
          <div className="w-[266px] h-[82px] bg-white rounded-[6px] p-2 flex flex-col gap-2 hover:scale-95 transition-all duration-150 cursor-pointer">
            <IoLocationSharp className="text-[34px] text-color_main" />
            <span className="text-[16px] font-openSans font-semibold">
              Bongaon paikpata, kolkata
            </span>{" "}
          </div>
          <div className="w-[266px] h-[82px] bg-white rounded-[6px] p-2 flex flex-col gap-2 hover:scale-95 transition-all duration-150 cursor-pointer">
            <MdPhoneInTalk className="text-[34px] text-color_main" />
            <span className="text-[16px] font-openSans font-semibold">
              +91 908484933{" "}
            </span>{" "}
          </div>
          <div className="w-[266px] h-[82px] bg-white rounded-[6px] p-2 flex flex-col gap-2 hover:scale-95 transition-all duration-150 cursor-pointer">
            <MdEmail className="text-[34px] text-color_main" />
            <span className="text-[16px] font-openSans font-semibold">
              jay@gmail.com{" "}
            </span>{" "}
          </div>
          <div className="w-[266px] h-[82px] bg-white rounded-[6px] p-2 flex flex-col gap-2 hover:scale-95 transition-all duration-150">
            <FaRegClock className="text-[32px] text-color_main" />
            <span className="text-[16px] font-openSans font-semibold">
              Mon-Fri: 9:00am - 7:00pm
            </span>{" "}
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default ContactInfoSection;
