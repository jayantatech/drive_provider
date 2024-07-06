"use client";
import Image from "next/image";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { useState } from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { UserIconeColor } from "@/contants/img/icons/icons";

interface ReviewProps {
  avatarUrl: string;
  name: string;
  date: string;
  rating: number;
  title: string;
  content: string;
}

const ReviewAndRatingBox = ({
  avatarUrl,
  name,
  date,
  rating,
  title,
  content,
}: ReviewProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 !== 0 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;
  const previewContent =
    content.length > 70 ? content.slice(0, 160) + "..." : content;

  return (
    <div className="border rounded-[6px] p-4 shadow-sm">
      <div className="flex items-center mb-4">
        <div className="relative w-12 h-12">
          <Image
            src={avatarUrl || UserIconeColor}
            alt={`${name}'s avatar`}
            className="rounded-full"
            layout="fill"
          />
        </div>
        <div className="ml-3">
          <p className="font-medium text-[15px] font-openSans">{`${name} wrote a review ${date}`}</p>
          <div className="flex">
            <span className="text-sm font-semibold mr-1">{rating}</span>
            {[...Array(fullStars)].map((_, i) => (
              <FaStar key={i} className="text-[18px] text-star_color" />
            ))}
            {halfStars > 0 && (
              <FaStarHalfAlt className="text-[18px] text-star_color" />
            )}
            {[...Array(emptyStars)].map((_, i) => (
              <FaRegStar key={i} className="text-[18px] text-[#8a8080]" />
            ))}
          </div>
        </div>
      </div>
      <h3 className="font-bold mb-2 font-raleway text-[15px]">{title}</h3>
      <p className="text-gray-700 font-openSans font-medium text-[14px]">
        {isExpanded ? content : previewContent}
        {content.length > 70 && (
          <span
            className="text-color_main cursor-pointer ml-1 "
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Read Less" : "Read More"}
          </span>
        )}
      </p>
    </div>
  );
};

export default ReviewAndRatingBox;
