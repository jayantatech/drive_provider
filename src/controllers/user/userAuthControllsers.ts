import dbConnect from "@/lib/dbConnection";
import UserModel from "@/lib/model/User";
import { signUpSchema } from "@/lib/schemas/signUpSchema";
import { NextFunction, Request, Response } from "express";

export const signUp = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<object> => {
  await dbConnect();
  try {
    const signUpInfo = await req.body;
    const {
      firstName,
      lastName,
      email,
      phone,
      location,
      password,
      confirmPassword,
    } = signUpSchema.parse(signUpInfo);

    const userExists = await UserModel.findOne({ email });
    if (userExists) {
      return res
        .status(200)
        .json({ success: false, message: "User already exists" });
    }

    const newUser = new UserModel({
      firstName,
      lastName,
      email,
      phone,
      location,
      password,
      confirmPassword,
    });

    await newUser.save();

    return res.status(200).json({
      success: true,
      message: "New user created successfully",
    });
  } catch (error) {
    console.error("Error registering user", error);
    return res.status(500).json({
      success: false,
      message: "Error register user",
    });
  }
};
