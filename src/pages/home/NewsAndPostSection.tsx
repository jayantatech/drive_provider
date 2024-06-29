import ContentWrapper from "@/components/contentWrapper/ContentWrapper";
import PostCard from "@/components/postCard/PostCard";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import { homeTitles, posts } from "@/contants/Contants";

const NewsAndPostSection = () => {
  return (
    <div className="py-10">
      <ContentWrapper>
        <div className="w-full h-[630px] max-md:h-auto my-10">
          <div className="w-full h-auto flex items-center justify-center py-2 flex-col">
            <div className="w-[750px] h-[130px] max-md:h-auto text-center max-md:w-full max-md:text-center">
              <SectionTitle
                titleMain={homeTitles.sixth_Section.mainTitleWord}
                titleBody={homeTitles.sixth_Section.mainTitleBody}
                titleDescription={homeTitles.sixth_Section.description}
              />
            </div>
            <div className="w-full h-[394px] max-md:h-auto flex items-center justify-between max-lg:justify-evenly max-md:flex-col max-md:gap-4 lg:px-4">
              {posts.map((post, index) => (
                <PostCard
                  key={index}
                  category={post.category}
                  title={post.title}
                  description={post.description}
                  date={post.date}
                  readMoreLink={post.readMoreLink}
                />
              ))}
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default NewsAndPostSection;
