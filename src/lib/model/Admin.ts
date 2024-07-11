import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcryptjs";

type AdminRole = "user" | "admin" | "superadmin" | "support" | "developer";

interface IAdmin extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  role: AdminRole;
  createdAt: Date;
  updatedAt: Date;
}

const adminSchema = new Schema<IAdmin>({
  firstName: { type: String, required: true },
  lastName: {
    type: String,
    required: true,
    match: [/\S+@\S+\.\S+/, "is invalid"],
  },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String },
  role: {
    type: String,
    enum: ["user", "admin", "superadmin", "support", "developer"],
    default: "admin",
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

adminSchema.pre<IAdmin>("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error: any) {
    next(error);
  }
});

adminSchema.methods.comparePassword = async function (
  candidatePassword: string
) {
  try {
    return bcrypt.compare(candidatePassword, this.password);
  } catch (error) {
    return false;
  }
};
const Admin =
  (mongoose.models.admin as mongoose.Model<IAdmin>) ||
  mongoose.model<IAdmin>("admin", adminSchema);

export default Admin;
