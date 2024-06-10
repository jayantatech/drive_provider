import mongoose, { Schema, Document } from "mongoose";
enum EngineType {
  Gasoline = "Gasoline",
  Diesel = "Diesel",
  Electric = "Electric",
  Hybrid = "Hybrid",
}
enum CarType {
  Sedan = "Sedan",
  SUV = "SUV",
  Truck = "Truck",
  Coupe = "Coupe",
  Convertible = "Convertible",
}

interface IFeatures {
  name: string;
  value: string;
}
interface IImage {
  name: string;
  url: string;
}

interface ICar extends Document {
  make: string;
  carModel: string;
  year: number;
  location: string;
  seats: number;
  engineType: EngineType; // Consider using an enum for predefined options
  carType: CarType; // Consider using an enum for predefined options
  isAvailable: boolean;
  mileage?: number;
  transmission?: string;
  features?: IFeatures[];
  color?: string;
  imageUrl?: IImage[];
  createdAt: Date;
  updatedAt: Date;
}

const featuresSchema = new Schema<IFeatures>(
  {
    name: { type: String, required: true },
    value: { type: String, required: true },
  },
  { _id: false }
);
const imageSchema = new Schema<IImage>(
  {
    name: { type: String, required: true },
    url: { type: String, required: true },
  },
  { _id: false }
);

const carSchema = new Schema<ICar>({
  make: { type: String, required: true },
  carModel: { type: String, required: true },
  year: { type: Number },
  location: { type: String, required: true },
  seats: { type: Number, required: true },
  engineType: { type: String, enum: Object.values(EngineType), required: true },
  carType: { type: String, enum: Object.values(CarType) },
  isAvailable: { type: Boolean, required: true, default: true },
  mileage: { type: Number },
  transmission: { type: String },
  features: { type: [featuresSchema] },
  color: { type: String },
  imageUrl: { type: [imageSchema] },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const CarModel =
  (mongoose.models.Car as mongoose.Model<ICar>) ||
  mongoose.model<ICar>("Car", carSchema);

export default CarModel;
