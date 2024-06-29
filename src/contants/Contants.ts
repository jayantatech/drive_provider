import { StaticImageData } from "next/image";
import {
  BMW,
  Honda,
  Hyundai,
  Kia,
  Mahindra,
  MarutiSuzuki,
  MG,
  Tata,
  Toyota,
} from "./img/brands/img";
import {
  Cabriolet,
  Coupe,
  Crossover,
  Estate,
  Hatchback,
  Pickup,
  Sedan,
  Suv,
} from "./img/carTypes/img";
import { Car } from "./img/cars/img";
import {
  BookingIcone,
  CarIcone,
  CarTwo,
  DashboardIcone,
  Guidepost,
  NotificationIcone,
  PaymentIcone,
  People,
  ProfileIcone,
  RoadTrip,
  SupportIcone,
} from "./img/icons/icons";
import { Description } from "@radix-ui/react-dialog";
import { avatar_Team, UserOne, UserThree, UserTwo } from "./img/others/img";

type Brandstitle = { title: string; logo: StaticImageData }[];
type CarType = { title: string; logo: StaticImageData }[];
const carBrands: Brandstitle = [
  {
    title: "Maruti Suzuki",
    logo: MarutiSuzuki,
  },
  {
    title: "Hyundai",
    logo: Hyundai,
  },
  {
    title: "Tata",
    logo: Tata,
  },
  {
    title: "Mahindra",
    logo: Mahindra,
  },
  {
    title: "Honda",
    logo: Honda,
  },
  {
    title: "Kia",
    logo: Kia,
  },
  {
    title: "Toyota",
    logo: Toyota,
  },
  {
    title: "MG",
    logo: MG,
  },
  {
    title: "BMW",
    logo: BMW,
  },
];

const carTypes: CarType = [
  {
    title: "SUV",
    logo: Suv,
  },
  {
    title: "Sedan",
    logo: Sedan,
  },
  {
    title: "Hatchback",
    logo: Hatchback,
  },

  {
    title: "Crossover",
    logo: Crossover,
  },
  {
    title: "Coupe",
    logo: Coupe,
  },
  {
    title: "Convertible",
    logo: Cabriolet,
  },
  {
    title: "MPV",
    logo: Suv,
  },
  {
    title: "Pickup",
    logo: Pickup,
  },
  {
    title: "Estate",
    logo: Estate,
  },
];

const whyToRentTitle = [
  { title: "Vacation Travel", icon: Car },
  { title: "Business Trips", icon: CarTwo },
  { title: "Airport Transfers", icon: Guidepost },
  { title: "Special Occasions", icon: People },
  { title: "Group Outings", icon: Car },
  { title: "Road Trips", icon: RoadTrip },
];

const achievements = [
  { title: "300+", value: "Rentals Completed" },
  { title: "400+", value: "Happy Customers" },
  { title: "9+", value: "Awards Won" },
  { title: "99%", value: "Satisfaction Rate" },
];

const footerContants = {
  aboutDescription:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio praesentium totam at animi commodi quos quo delectus architecto  ",
  contactInformation: {
    contactDescription:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    phone: "+01 (977) 2599 12",
    email: "+01 (977) 2599 12",
    location: "Kolkata howra west bengale ",
  },
  cars: [
    "Best Suv Cars cars",
    "Best Sedan cars",
    "Best Hatchback cars",
    "Best Crossover cars",
    "Best Pickup cars",
    "Best Convertible cars",
  ],
  CarsByPrice: [
    "Best Cars under 1000/day",
    " Best Cars under 2000/day",
    " Best Cars under 2500/day",
    " Best Cars under 3000/day",
    " Best Cars under 5000/day",
    "  Best Cars under 10000/day",
  ],
};

// user Dashboard Info

const userDashboardOptions = [
  { title: "Bookings", linkTo: "/bookings", icone: "LuCalendarDays" },
  { title: "Profile", linkTo: "/profile", icone: "LuUser" },
  { title: "Cars", linkTo: "/booking-cars", icone: "LuCar" },
  { title: "Payments", linkTo: "/payments", icone: "LuCreditCard" },
  {
    title: "Notifications",
    linkTo: "/notifications",
    icone: "LuMessagesSquare",
  },
  { title: "Support", linkTo: "/support", icone: "LuPhoneCall" },
];

// Home page section title

const homeTitles = {
  hero_Main_Section: {
    //Not in use
    mainTitleBody: "Experience The Thrill: Drive",
    mainTitleWord: "Your Dream Car Today",
    description:
      "Affordable Rentals For Every Journey. Choose From A Wide Range Of Vehicles To Suit Your Needs, Whether It's A Weekend Getaway Or A Business Trip",
  },
  first_Main_Section: {
    mainTitleWord: "Top",
    mainTitleBody: "Rental Picks",
    description:
      "Discover our top rental picks! Choose from sleek sedans or spacious SUVs, ensuring comfort and style in Kolkata and Bengaluru",
  },
  second_Section: {
    mainTitleWord: "Exclusive",
    mainTitleBody: "Rental Deals",
    description:
      "Discover exclusive rental offers tailored for you! From weekend getaways to long-term rentals, find affordable options across a range of vehicles",
  },
  third_Section: {
    mainTitleWord: "Why To ",
    mainTitleBody: "Rent A Vechile",
    description:
      "Discover the convenience and freedom of renting a vehicle. Whether exploring new cities or commuting daily, enjoy comfort and independence with our rental services",
  },
  third_Sub_Section: {
    mainTitleWord: "Why",
    mainTitleBody: "Choose Us",
    description:
      "Choose us for reliable service, competitive pricing, and a wide range of vehicles tailored to your needs",
    keyPoints: [
      {
        number: "01",
        title: "Wide Selection of Vehicles",
        description:
          "Choose from a diverse range of vehicles suited for every need, whether it's a compact car for city exploration or a spacious SUV for family trips",
      },
      {
        number: "02",
        title: "Competitive Pricing",
        description:
          "Enjoy competitive rates that ensure affordability without compromising on quality or service standards",
      },
      {
        number: "03",
        title: "Exceptional Customer Service",
        description:
          "Experience personalized assistance and support from our dedicated team, ensuring a smooth and stress-free rental process from start to finish",
      },
    ],
  },
  forth_Section: {
    mainTitleWord: "Previous ",
    mainTitleBody: "Renters' Rides",
    description:
      "Explore Our Gallery Featuring Vehicles Rented By Our Customers. See The Variety And Quality Of Cars That Have Made Their Journeys Memorable And Enjoyable.",
  },
  fifth_Section: {
    mainTitleWord: "Dedicated  ",
    mainTitleBody: "To Excellence And Client Satisfaction",
    description:
      "At CarProvider.Com, Excellence Drives Us. Whether In Kolkata Or Bengaluru, We Strive To Provide Superior Car Rental Services, Ensuring Our Clients Are Not Just Satisfied But Thrilled With Their Experience",
  },
  sixth_Section: {
    mainTitleWord: "News",
    mainTitleBody: "And Post",
    description:
      "Stay updated with the latest news and insightful posts related to car rentals. Dive into informative content that enhances your rental experience with us",
  },
  seventh_Section: {
    mainTitleWord: "Special",
    mainTitleBody: "25% Off",
    description:
      "Enjoy A Limited-Time Offer Of 25% Off On All Car Rentals. Whether It's A Weekend Getaway Or A Business Trip, Save Big And Drive In Comfort. Book Today And Hit The Road With Extra Savings!",
    desclamer:
      "This 25% discount offer is valid for your first booking only, and can be redeemed once per person within a 6-month period",
  },
};

const userTestimonials = [
  {
    userName: "Rajesh Kumar",
    userReview:
      "I had a great experience renting a car from this platform. The process was smooth and the vehicle was in excellent condition. Highly recommend it to anyone looking for reliable car rental services.",
    userRatings: 4,
    userImage: UserOne,
    rentedCar: "",

    socialMedia: {
      facebookUrl: "#",
      twitterUrl: "#",
      linkedinUrl: "#",
    },
  },
  {
    userName: "Anita Sharma",
    userReview:
      "The customer service was outstanding, and the car was spotless. It made my trip so much more enjoyable. I'll definitely use this service again for my future travels.",
    userRatings: 4,
    userImage: UserThree,
    rentedCar: "",
    socialMedia: {
      facebookUrl: "#",
      twitterUrl: "#",
      linkedinUrl: "#",
    },
  },
  {
    userName: "Vikram Patel",
    userReview:
      "This car rental service exceeded my expectations. The booking process was easy, and the car was well-maintained. It's my go-to choice for renting cars now.",
    userRatings: 4,
    userImage: UserTwo,
    rentedCar: "tata",
    socialMedia: {
      facebookUrl: "#",
      twitterUrl: "#",
      linkedinUrl: "#",
    },
  },
];

interface Post {
  category: string;
  title: string;
  description: string;
  date: string;
  readMoreLink: string;
}

const posts: Post[] = [
  {
    category: "Technology",
    title: "Innovations in Car Renting: What to Expect in 2024",
    description:
      "Explore the latest tech trends revolutionizing the car rental industry, including AI-powered booking systems.",
    date: "March 23, 2024",
    readMoreLink: "/okjj",
  },
  {
    category: "Business",
    title: "Maximizing Efficiency: Car Rental Solutions for Businesses",
    description:
      "Learn how businesses are optimizing their operations and reducing costs with efficient car rental solutions tailored to corporate needs.",
    date: "April 10, 2024",
    readMoreLink: "/newbuss",
  },
  {
    category: "Technology",
    title: "Electric Vehicles: The Future of Car Rentals",
    description:
      "Find out how the integration of electric vehicles into car rental fleets is promoting sustainability and offering eco-friendly travel options.",
    date: "June 15, 2024",
    readMoreLink: "/getop",
  },
];

const aboutTitles = {
  hero_Main_Section: {
    mainTitleBody: "Rent Right. Drive Happy.",
    mainTitleWord: "About Us",
    description:
      "Discover unparalleled convenience and reliability with our top-tier car rental services",
    descriptionPartOne:
      " We take the guesswork out of your travels, offering a diverse fleet of vehicles to suit any adventure, from fuel-efficient compacts for city exploration to spacious SUVs for family road trips ",
    descriptionPartTwo:
      " Our user-friendly online booking system makes securing your perfect ride a breeze, allowing you to hit the open road faster. Trust us to be your partner on every journey, ensuring a seamless and stress-free experience",
  },
  first_Main_Section: {
    mainTitleWord: "Dedicated",
    mainTitleBody: "To Excellence And Client Satisfaction",
    description:
      "At CarProvider.Com, Excellence Drives Us. Whether In Kolkata Or Bengaluru, We Strive To Provide Superior Car Rental Services, Ensuring Our Clients Are Not Just Satisfied But Thrilled With Their Experience",

    keyPoints: {
      pointOne:
        "Our solutions are designed to streamline your operations, leading to higher productivity and lower costs",
      pointTwo:
        "Our solutions are designed to streamline your operations, leading to higher productivity and lower costs",
      pointThree:
        "Choose from our diverse range of well-maintained, high-quality vehicles, ensuring comfort and reliability for every trip",
    },

    mainStements: {
      mission: {
        title: "Mission",
        description:
          "To provide reliable and affordable car rental services, ensuring customer satisfaction through seamless and enjoyable experiences",
      },
      vision: {
        title: "Vision",
        description:
          "To be the leading car rental service in India, known for excellence, innovation, and unparalleled customer service",
      },
      Key_Point: {
        title: "Key Point",
        description:
          "Choose us for exceptional customer service, competitive pricing, and a wide range of well-maintained vehicles, ensuring a smooth and enjoyable rental experience every time",
      },
    },
  },
  teamContentSection: {
    mainTitleWord: "Experts",
    mainTitleBody: "at Your Service",
    description:
      "Our dedicated team of professionals ensures your car rental experience is smooth and enjoyable. From industry experts to friendly customer service representatives, we work together to provide you with top-notch service every time.",
    members: [
      {
        name: "Jay Biswas",
        jobRole: "Software Dev",
        profileImage: "",
        socialLinks: {
          faceBook: "#",
          linkedin: "#",
          twitter: "#",
        },
      },
      {
        name: "Jay Biswas",
        jobRole: "Software Dev",
        profileImage: avatar_Team,
        socialLinks: {
          faceBook: "#",
          linkedin: "#",
          twitter: "#",
        },
      },
      {
        name: "Jay Biswas",
        jobRole: "Software Dev",
        profileImage: "",
        socialLinks: {
          faceBook: "#",
          linkedin: "#",
          twitter: "#",
        },
      },
      {
        name: "Jay Biswas",
        jobRole: "Software Dev",
        profileImage: "",
        socialLinks: {
          faceBook: "#",
          linkedin: "#",
          twitter: "#",
        },
      },
    ],
    footer: {
      viewAllButton: "View All Team Member",
      contactUsButton: "Contact Us",
    },
  },
};

export {
  carBrands,
  carTypes,
  whyToRentTitle,
  achievements,
  footerContants,
  userDashboardOptions,
  homeTitles,
  userTestimonials,
  posts,
  aboutTitles,
};
