import dbConnect from "@/lib/dbConnection";
import Admin from "@/lib/model/Admin";
import { AdminData, adminSchema } from "@/lib/schemas/adminRegister";
import { Response, Request, NextFunction } from "express";
import { z } from "zod";

export const adminRegeister = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<object | void> => {
  await dbConnect();

  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Method Not Allowed" });
  }
  try {
    const data = await req.body;

    const { email, firstName, lastName, password, role, phone }: AdminData =
      adminSchema.parse(data);

    const newAdmin = new Admin({
      email,
      firstName,
      lastName,
      password,
      role,
      phone,
    });
    newAdmin.save();
    return res
      .status(200)
      .json({ success: true, message: "Admin registered successfully" });
  } catch (error) {
    console.error("Error registering admin", error);
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        message: "Validation error",
        errors: error.errors,
      });
    }
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
