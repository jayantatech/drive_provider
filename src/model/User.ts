import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcryptjs";
interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  password: string;
  bookingHistory: Schema.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const userSchema = new Schema<IUser>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/\S+@\S+\.\S+/, "is invalid"],
  },
  phone: { type: String, required: true, match: [/^\d{10,15}$/, "is invalid"] },
  location: { type: String, required: true },
  password: { type: String, required: true, unique: true },
  bookingHistory: [{ type: Schema.Types.ObjectId, ref: "Booking" }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

userSchema.pre<IUser>("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error: any) {
    next(error);
  }
});

userSchema.methods.comparePassword = async function (
  candidatePassword: string
) {
  try {
    return bcrypt.compare(candidatePassword, this.password);
  } catch (error) {
    return false;
  }
};

const UserModel =
  (mongoose.models.User as mongoose.Model<IUser>) ||
  mongoose.model<IUser>("User", userSchema);

export default UserModel;
