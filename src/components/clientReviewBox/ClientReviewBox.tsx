import Image, { StaticImageData } from "next/image";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { IoMdStarHalf } from "react-icons/io";
import { IoStar } from "react-icons/io5";

type ClientReviewBoxProps = {
  userName: string;
  userReview: string;
  userRatings: number;
  userImage: string | StaticImageData;
  rentedCar: string;
  socialMedia: {
    facebookUrl?: string;
    twitterUrl?: string;
    linkedinUrl?: string;
  };
};
const ClientReviewBox = ({
  userName,
  userReview,
  userRatings,
  userImage,
  socialMedia,
  rentedCar,
}: ClientReviewBoxProps) => {
  const stars = Array.from({ length: 5 }, (_, index) =>
    index < userRatings ? <IoStar key={index} /> : <IoMdStarHalf key={index} />
  );

  return (
    <div className="w-[680px] max-md:w-[340px] max-md:h-[228px] max-lg:w-[580px] h-[234px] max-lg:h-[248px] bg-black cursor-grab rounded-[8px] select-none border border-dashed border-[#e5eaee]">
      <div className="w-full h-1/2 p-3 max-md:py-4 rounded-[10px]">
        <div className="w-full h-full flex items-start flex-row justify-between gap-2">
          <div className="w-[94px] max-md:w-[68px] h-[94px] max-md:h-[68px] rounded-[6px] relative overflow-hidden">
            <Image
              src={
                userImage ||
                "https://cdn.pixabay.com/photo/2022/08/21/21/24/colours-7402147_1280.jpg"
              }
              alt="profile image"
              layout="fill"
              objectFit="cover"
              className="scale-150"
            />
          </div>
          <div className="w-[84%] h-full flex items-center justify-center">
            <div className=" w-2/3 h-full">
              <h5 className="text-[20px] font-bold text-white">{userName}</h5>
              <span className="text-[14px] flex gap-1 text-yellow-500">
                {stars}
              </span>
              {rentedCar ? (
                <div className="text-[14px] font-semibold text-white mt-1">
                  <span className="font-bold">Rented: </span>
                  {rentedCar}
                </div>
              ) : null}
            </div>
            <div className="w-1/3 h-full flex items-start justify-end gap-2">
              {socialMedia.facebookUrl && (
                <a href={socialMedia.facebookUrl}>
                  <FaFacebookSquare className="text-white text-[22px] hover:scale-110 transition-all duration-150" />
                </a>
              )}
              {socialMedia.twitterUrl && (
                <a href={socialMedia.twitterUrl}>
                  <FaSquareXTwitter className="text-white text-[22px] hover:scale-110 transition-all duration-150" />
                </a>
              )}
              {socialMedia.linkedinUrl && (
                <a href={socialMedia.linkedinUrl}>
                  <FaLinkedin className="text-white text-[22px] hover:scale-110 transition-all duration-150" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-1/2 p-3 border-t border-[#616161]">
        <p className="text-[16px] font-openSans text-white">{userReview}</p>
      </div>
    </div>
  );
};

export default ClientReviewBox;
