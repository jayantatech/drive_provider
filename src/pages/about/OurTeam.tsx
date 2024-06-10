import ContentWrapper from "@/components/contentWrapper/ContentWrapper";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import Image from "next/image";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import OurTeamCard from "@/components/ourTeamCard/OurTeamCard";

const OurTeam = () => {
  return (
    <div className="py-10 my-12 bg-yesdfllow-300 ">
      <ContentWrapper>
        <div className="w-full h-auto">
          <div className="w-full h-[220px] max-md:h-[260px] bg-fusdfchsia-600 flex items-center justify-center flex-col">
            <span className="text-color_main font-bold text-[14px]">
              OUR TEAM
            </span>
            <div className="w-[750px] h-[130px] text-center max-md:w-full max-md:h-[140px] max-md:text-center">
              <SectionTitle
                titleMain="Experts 
                "
                titleBody="at Your Service"
                titleDescription="Our dedicated team of professionals ensures your car rental experience is smooth and enjoyable. From industry experts to friendly customer service representatives, we work together to provide you with top-notch service every time."
              />
            </div>
          </div>
          <div className="w-full h-auto bg-fucsdfhsia-700 grid grid-flow-col max-lg:grid-cols-2 max-lg:grid-rows-2 max-md:grid-cols-1 max-md:grid-rows-4 justify-items-center items-center p-4 gap-2 flex-1">
            <div className="col-span-1">
              <OurTeamCard
                name="Jay Biswas"
                jobRole="Softwer Dev"
                socialLinks={{ faceBook: "#", linkedin: "#", twitter: "#" }}
              />
            </div>
            <div className="col-span-1">
              <OurTeamCard
                name="Jay Biswas"
                jobRole="Softwer Dev"
                socialLinks={{ faceBook: "#", linkedin: "#", twitter: "#" }}
              />
            </div>
            <div className="col-span-1">
              <OurTeamCard
                name="Jay Biswas"
                jobRole="Softwer Dev"
                socialLinks={{ faceBook: "#", linkedin: "#", twitter: "#" }}
              />
            </div>
            <div className="col-span-1">
              <OurTeamCard
                name="Jay Biswas"
                jobRole="Softwer Dev"
                socialLinks={{ faceBook: "#", linkedin: "#", twitter: "#" }}
              />
            </div>
          </div>
          <div className="w-full h-[62px] max-md:h-[98px] max-md:flex-col bg-indsdfigo-500 flex items-center justify-center gap-3">
            <button className="md:px-3 max-md:w-[72%] h-[34px] bg-transparent rounded-[6px] text-[14px] border-2 border-color_main font-bold text-black font-raleway">
              View All Team Member
            </button>
            <button className="md:px-4 h-[34px] max-md:w-[72%] bg-color_main text-white rounded-[6px] text-[14px] border-2 border-color_main font-bold">
              Contact Us
            </button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default OurTeam;
