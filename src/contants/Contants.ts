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
import { CarTwo, Guidepost, People, RoadTrip } from "./img/icons/icons";
import { title } from "process";

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

export { carBrands, carTypes, whyToRentTitle, achievements, footerContants };
