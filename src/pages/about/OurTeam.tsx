import ContentWrapper from "@/components/contentWrapper/ContentWrapper";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import OurTeamCard from "@/components/ourTeamCard/OurTeamCard";
import { avatar_Team } from "@/contants/img/others/img";
import { aboutTitles } from "@/contants/Contants";

const OurTeam = () => {
  return (
    <div className="py-10 my-12">
      <ContentWrapper>
        <div className="w-full h-auto">
          <div className="w-full h-[220px] max-md:h-[260px] flex items-center justify-center flex-col">
            <span className="text-color_main font-bold text-[14px]">
              {"Our Team"}
            </span>
            <div className="w-[750px] h-[130px] text-center max-md:w-full max-md:h-[140px] max-md:text-center">
              <SectionTitle
                titleMain={aboutTitles?.teamContentSection.mainTitleWord}
                titleBody={aboutTitles?.teamContentSection.mainTitleBody}
                titleDescription={aboutTitles?.teamContentSection.description}
              />
            </div>
          </div>
          <div className="w-full h-auto grid grid-flow-col max-lg:grid-cols-2 max-lg:grid-rows-2 max-md:grid-cols-1 max-md:grid-rows-4 justify-items-center items-center p-4 gap-2 flex-1">
            {aboutTitles?.teamContentSection.members.map((member, index) => (
              <div className="col-span-1" key={index}>
                <OurTeamCard
                  profileImage={member.profileImage}
                  name={member.name}
                  jobRole={member.jobRole}
                  socialLinks={member.socialLinks}
                />
              </div>
            ))}
          </div>
          <div className="w-full h-[62px] max-md:h-[98px] max-md:flex-col flex items-center justify-center gap-3">
            <button className="md:px-3 max-md:w-[72%] h-[34px] bg-transparent rounded-[6px] text-[14px] border-2 border-color_main font-bold text-black font-raleway">
              {aboutTitles?.teamContentSection.footer.viewAllButton}
            </button>
            <button className="md:px-4 h-[34px] max-md:w-[72%] bg-color_main text-white rounded-[6px] text-[14px] border-2 border-color_main font-bold">
              {aboutTitles?.teamContentSection.footer.contactUsButton}
            </button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default OurTeam;
