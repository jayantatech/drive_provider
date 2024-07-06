"use client";
import ReviewAndRatingBox from "@/components/reviewAndRatingBox/ReviewAndRatingBox";
import { FaStar } from "react-icons/fa6";
import { useState } from "react";
import { FaArrowAltCircleDown } from "react-icons/fa";

const ReviewsAndRatingsSection = () => {
  const reviews = [
    {
      avatarUrl: "",
      name: "Ridhima Narang",
      date: "06 Jun 2024",
      rating: 3.5,
      title: "Hyundai - A Better Car",
      content:
        "Hyundai Venue is a sport utility vehicle with a 350 L cargo volume 5 doors and 6 airbags cargo volume 5 doors and 6 airbags cargo volume 5 doors and 6 airbags for the safety and a roof window which gives us an sakdjfkasdf dfjd skdfjdai Venue is a sport utility vehicle with a 350 L cargo volume 5 doors and 6 airbags cargo volume 5 doors and 6 airbags cargo volume 5 doors and 6 airbags for the safety and a roof window which gives us an sakdjfkasdf dfjd skdfj",
    },
    // {
    //   avatarUrl: "",
    //   name: "Ridhima Narang",
    //   date: "06 Jun 2024",
    //   rating: 3.5,
    //   title: "Hyundai - A Better Car",
    //   content:
    //     "Hyundai Venue is a sport utility vehicle with a 350 L dfjd skdfj",
    // },
    // Add more review objects here
  ];

  const [visibleReviews, setVisibleReviews] = useState(3);

  const loadMoreReviews = () => {
    setVisibleReviews((prev) => prev + 15);
  };

  return (
    <div className="w-full h-auto max-lg:h-auto rounded-[6px] shadow-lg bg-white p-4 max-lg:p-2 my-4 border-2">
      <div>
        <h3 className="text-[22px] max-lg:text-[20px] font-raleway font-bold pb-2">
          User Reviews & Rating
        </h3>
        <div className="w-full h-[50px] flex items-center justify-start gap-2">
          <div className="w-[98px] h-full flex items-center justify-start gap-2">
            <FaStar className="text-[24px] max-lg:text-[22px] text-star_color" />
            <span className="text-[38px] max-lg:text-[30px] font-openSans font-bold">
              4.4
            </span>
          </div>
          <div className="w-auto h-full font-openSans text-[14px] flex flex-col items-start justify-center">
            <p>Overall Ratings</p>
            <p>
              Based on <span className="font-bold">348 Reviews</span>
            </p>
          </div>
        </div>
        <h5 className="text-[18px] font-openSans font-bold py-2">
          345 Rating and Reviews
        </h5>
        <div
          className={`flex flex-col gap-2 w-full min-h-[160px] max-lg:min-h-[210px] ${
            visibleReviews
              ? `h-[${visibleReviews * 128}px] max-lg:h-[${
                  visibleReviews * 148
                }px]`
              : ""
          }`}
        >
          {reviews.slice(0, visibleReviews).map((review, index) => (
            <ReviewAndRatingBox
              key={index}
              avatarUrl={review.avatarUrl}
              name={review.name}
              date={review.date}
              rating={review.rating}
              title={review.title}
              content={review.content}
            />
          ))}
        </div>
        {visibleReviews < reviews.length && (
          <button
            className="text-color_main mt-4 flex items-center justify-center gap-2 font-openSans text-[15px] font-bold"
            onClick={loadMoreReviews}
          >
            Read More Reviews
            <span>
              <FaArrowAltCircleDown className="mt-1" />
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default ReviewsAndRatingsSection;
