import ContentWrapper from "@/components/contentWrapper/ContentWrapper";
import Image from "next/image";

const AppKeyPoints = () => {
  return (
    <div className="py-14">
      <ContentWrapper>
        <div className="w-full h-[520px] bg-fuchsia-700 flex gap-3">
          <div className="w-2/5 bg-red-300 h-full">
            <div className="w-full h-[66%] bg-fuchsia-400">
              <Image
                alt="key point image"
                src={""}
                layout="fill "
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-[26px] font-raleway font-bold">
                Client Collaboration
              </h3>
              <p className="text-[16px] font-openSans">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sed
                distinctio excepturi velit quaerat omnis, dolorem, debitis iure
                voluptatibus illo fuga doloribus, esse minima nemo?
              </p>
            </div>
          </div>
          <div> </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default AppKeyPoints;
