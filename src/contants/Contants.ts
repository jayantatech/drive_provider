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

export { carBrands, carTypes };
