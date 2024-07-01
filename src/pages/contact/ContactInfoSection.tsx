import ContentWrapper from "@/components/contentWrapper/ContentWrapper";
import { IoLocationSharp } from "react-icons/io5";
import { MdPhoneInTalk } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { homeTitles } from "@/contants/Contants";
import SectionTitle from "@/components/sectionTitle/SectionTitle";

const ContactInfoSection = () => {
  return (
    <div className="py-12">
      <ContentWrapper>
        <div className="w-full h-auto flex items-center justify-center">
          <div className="w-[750px] h-[130px] text-center max-md:w-full max-md:h-[140px] max-md:text-center">
            <SectionTitle
              titleMain={"Get"}
              titleBody={"Information"}
              titleDescription={
                "Reach out for detailed information about our car renting services. We're here to assist you with all your inquiries."
              }
            />
          </div>
        </div>
        <div className="w-full h-auto py-4 max-lg:h-auto max-lg:gap-3 max-md:h-auto  rounded-[6px] grid grid-flow-col grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-2 max-md:grid-rows-2 max-md:gap-2 max-md:py-4 max-lg:grid-rows-2 justify-items-center items-center">
          <div className="w-[266px] max-md:w-[180px] h-[154px] bg-white rounded-[6px] p-3 max-md:p-3 flex flex-col gap-1 hover:scale-95 transition-all duration-150 cursor-pointer shadow-lg border">
            <IoLocationSharp className="text-[44px] max-md:text-[36px] text-color_main" />
            <h4 className="text-[22px] max-md:text-[18px] font-bold font-raleway">
              Location
            </h4>
            <span className="text-[16px] max-md:text-[14px] font-openSans font-semibold">
              Bongaon paikpata, kolkata
            </span>{" "}
          </div>
          <div className="w-[266px] max-md:w-[180px] h-[154px] bg-white rounded-[6px] p-3 max-md:p-3 flex flex-col gap-1 hover:scale-95 transition-all duration-150 cursor-pointer shadow-lg border">
            <MdPhoneInTalk className="text-[44px] max-md:text-[36px] text-color_main" />
            <h4 className="text-[22px] max-md:text-[18px] font-bold font-raleway">
              Phone No{" "}
            </h4>
            <span className="text-[16px] max-md:text-[14px] font-openSans font-semibold">
              +91 908484933{" "}
            </span>{" "}
          </div>
          <div className="w-[266px] max-md:w-[180px] h-[154px] bg-white rounded-[6px] p-3 max-md:p-3 flex flex-col gap-1 hover:scale-95 transition-all duration-150 cursor-pointer shadow-lg border">
            <MdEmail className="text-[44px] max-md:text-[36px] text-color_main" />
            <h4 className="text-[22px] max-md:text-[18px] font-bold font-raleway">
              Email Us
            </h4>
            <span className="text-[16px] max-md:text-[14px] font-openSans font-semibold">
              jay@gmail.com{" "}
            </span>{" "}
          </div>
          <div className="w-[266px] max-md:w-[180px]  h-[154px] bg-white rounded-[6px] p-3 max-md:p-3 flex flex-col hover:scale-95 transition-all duration-150 cursor-pointer shadow-lg gap-[.100rem] border">
            <FaRegClock className="text-[40px] max-md:text-[36px] text-color_main" />
            <h4 className="text-[22px] max-md:text-[18px] font-bold font-raleway outline-none">
              Working Hour
            </h4>
            <span className="text-[16px] max-md:text-[14px] font-openSans font-semibold">
              Monday _ Friday, <br /> 08:00am – 06:00pm{" "}
            </span>{" "}
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default ContactInfoSection;
