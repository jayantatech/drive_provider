import Image from "next/image";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { IoMdStarHalf } from "react-icons/io";
import { IoStar } from "react-icons/io5";

const ClientReviewBox = () => {
  return (
    <div className="w-[680px] max-md:w-[340px] max-md:h-[228px] max-lg:w-[580px] h-[234px] max-lg:h-[248px] bg-black  cursor-grab rounded-[8px] select-none border-2 border-dashed border-[#e5eaee]">
      <div className="w-full h-1/2 p-3 max-md:py-4 rounded-[10px]">
        <div className=" w-full h-full flex items-start flex-row justify-betwee gap-2  ">
          <div className="w-[94px] max-md:w-[68px] h-[94px] max-md:h-[68px] rounded-[6px] bg-slate-400 relative overflow-hidden">
            <Image
              src={
                "https://cdn.pixabay.com/photo/2022/08/21/21/24/colours-7402147_1280.jpg"
              }
              alt="profile image"
              layout="fill"
              objectFit="cover"
              className="scale-150"
            />
          </div>
          <div className="w-[84%] h-full bg-lasdime-200 flex items-center justify-center">
            <div className="bg-ssdfky-300 w-2/3 h-full">
              <h5 className="text-[20px] font-bold text-white">
                Jayanta Biswas
              </h5>
              <span className="text-[14px] flex gap-1 text-color_main">
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoMdStarHalf />
              </span>
              <span className="text-[14px] font-openSans font-semibold text-white">
                Ceo and Founder
              </span>
            </div>
            <div className="w-1/3 h-full bg-resdd-200  flex items-start  justify-end gap-2">
              <a href="#">
                <FaFacebookSquare className="text-white  text-[22px] hover:scale-110 transition-all duration-150" />
              </a>
              <a href="#">
                <FaSquareXTwitter className="text-white   text-[22px] hover:scale-110 transition-all duration-150" />
              </a>
              <a href="#">
                <FaLinkedin className="text-white   text-[22px] hover:scale-110 transition-all duration-150 " />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-1/2 bg-fuchsdfsia-700 p-3 border-dashed border-t border-[#e5eaee]">
        <p className="text-[16px] font-openSans text-white">
          At CarProvider.Com, Excellence Drives Us. Whether In Kolkata Or
          Bengaluru, We Strive To Provide Superior Car Rental Services, Ensuring
          Our Clients Are Not Just
        </p>
      </div>
    </div>
  );
};

export default ClientReviewBox;
