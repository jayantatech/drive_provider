import { z } from "zod";

const EngineType = z.enum(["Gasoline", "Diesel", "Electric", "Hybrid"]);
const CarType = z.enum(["Sedan", "SUV", "Truck", "Coupe", "Convertible"]);

const FeaturesSchema = z.object({
  name: z.string(),
  value: z.string(),
});

const ImageSchema = z.object({
  name: z.string(),
  url: z.string(),
});

export const carSchema = z.object({
  make: z.string(),
  CarModel: z.string(),
  year: z.string().optional(),
  location: z.string(),
  seats: z.number(),
  engineType: EngineType,
  carType: CarType,
  isAvailable: z.boolean().default(true),
  mileage: z.number().optional(),
  transmission: z.string().optional(),
  features: z.array(FeaturesSchema).optional(),
  color: z.string().optional(),
  imageUrl: z.array(ImageSchema).optional(),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
});
