import React from "react";
import ContentWrapper from "../contentWrapper/ContentWrapper";

const reviews = [
  {
    name: "John Smith",
    role: "Client",
    review:
      "Vero id posuere tempus aspernatur quaerat mollis voluptatum eveniet porro viverra libero habitasse porro.",
    image: "/path/to/john-smith.jpg",
    rating: 5,
  },
  {
    name: "John Smith",
    role: "Client",
    review:
      "Vero id posuere tempus aspernatur quaerat mollis voluptatum eveniet porro viverra libero habitasse porro.",
    image: "/path/to/john-smith.jpg",
    rating: 5,
  },
  {
    name: "Miley Cyrus",
    role: "Supervisor",
    review:
      "Vero id posuere tempus aspernatur quaerat mollis voluptatum eveniet porro viverra libero habitasse porro.",
    image: "/path/to/miley-cyrus.jpg",
    rating: 4.5,
  },
  {
    name: "Miley Cyrus",
    role: "Supervisor",
    review:
      "Vero id posuere tempus aspernatur quaerat mollis voluptatum eveniet porro viverra libero habitasse porro.",
    image: "/path/to/miley-cyrus.jpg",
    rating: 4.5,
  },
];

const ReviewsSection: React.FC = () => {
  return (
    <section className="bg-gray-900 py-24">
      <ContentWrapper>
        <div className="bg-yellow-400">
          <h2 className="text-center text-4xl font-bold text-white mb-8">
            <span className="text-red-600">Review's</span> Of Clients
          </h2>
          <div className="flex flex-wrap justify-center bg-white">
            {reviews?.map((review, index) => (
              <div
                key={index}
                className="bg-gray-800 text-white rounded-lg p-4 m-2 full md:w-1/3 lg:w-1/4 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-bold">{review.name}</h3>
                    <p className="text-sm text-gray-400">{review.role}</p>
                  </div>
                </div>
                <p className="mb-4">{review.review}</p>
                <div className="flex">
                  {Array.from({ length: 5 }, (_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < review.rating ? "text-yellow-500" : "text-gray-500"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927C9.304 2.2 10.696 2.2 10.951 2.927l1.285 3.947a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.364 2.445a1 1 0 00-.364 1.118l1.285 3.947c.256.726-.654 1.328-1.325.885l-3.364-2.445a1 1 0 00-1.176 0l-3.364 2.445c-.671.443-1.582-.159-1.325-.885l1.285-3.947a1 1 0 00-.364-1.118L2.072 9.374c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.285-3.947z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ContentWrapper>
    </section>
  );
};

export default ReviewsSection;
