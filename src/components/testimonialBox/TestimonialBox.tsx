import Image from "next/image";
import { GoCodeReview } from "react-icons/go";

const TestimonialBox = () => {
  return (
    <div className="w-[340px] h-[250px] max-md:w-[340px] max-lg:h-[280px] max-lg:w-[230px] rounded-[6px] shadow-md border-[1px] border-black">
      <div className="w-full h-[70%] p-4 max-lg:p-3 rounded-[6px] flex items-start justify-center gap-2 flex-col">
        <GoCodeReview className="text-[38px] text-color_main max-lg:text-[30px]" />
        <p className="text-[15px] max-lg:text-[14px] max-md:text-[16px] font-openSans h-[90px] w-full max-lg:h-[120px] max-md:h-[140px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          omnis. Temporibus recusandae voluptatibus ex ut. Repellat, omnis.
          Temporibus
        </p>
      </div>
      <div className="w-full h-[30%] bg-[#000000] p-4 max-lg:p-2 flex items-center justify-start gap-2 rounded-b-[6px]">
        <div className="relative w-[60px] h-[60px] bg-orange-300 rounded-[6px] overflow-hidden">
          <Image
            src="https://cdn.pixabay.com/photo/2017/11/02/14/36/model-2911363_1280.jpg"
            alt="profile image"
            layout="fill"
            objectFit="cover"
            className="rounded-[6px]"
          />
        </div>
        <div className="w-[75%] h-full flex items-start justify-end flex-col max-lg:text-center max-lg:justify-center text-white">
          <span className="font-openSans text-[15px] font-bold max-md:text-[16px]">
            John Smith
          </span>
          <span className="font-openSans text-[13px] max-lg:text-[12px] max-md:text-[14px] font-semibold text-start">
            <b>Ranted:</b> Mahindra XUV300
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialBox;
