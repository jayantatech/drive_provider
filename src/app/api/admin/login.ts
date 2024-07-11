import dbConnect from "@/lib/dbConnection";
import Admin from "@/lib/model/Admin";
import UserModel from "@/lib/model/User";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import { NextFunction, Request, Response } from "express";

export const adminLogin = async (
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
  const { email, password } = await req.body;

  try {
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid Credentials" });
    }
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid Credentials" });
    }
    const payload = {
      admin: {
        id: admin.id,
        role: admin.role,
        firstName: admin.firstName,
      },
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET as string, {
      expiresIn: "2d",
    });

    res.json({ success: true, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
