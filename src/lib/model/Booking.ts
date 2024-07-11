import mongoose, { Schema, Document } from "mongoose";

interface IBooking extends Document {
  user: Schema.Types.ObjectId;
  car: Schema.Types.ObjectId;
  startTime: Date;
  endTime: Date;
  location: string;
  createdAt: Date;
  updatedAt: Date;
}

const bookingSchema = new Schema<IBooking>({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  car: { type: Schema.Types.ObjectId, ref: "Car", required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  location: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const BookingModle =
  (mongoose.models.Booking as mongoose.Model<IBooking>) ||
  mongoose.model<IBooking>("Booking", bookingSchema);

export default BookingModle;
