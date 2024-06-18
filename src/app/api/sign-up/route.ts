import dbConnect from "@/lib/dbConnection";
import UserModel from "@/model/User";
import { signUpSchema } from "@/schemas/signUpSchema";

export async function POST(request: Request) {
  await dbConnect();
  try {
    const signUpInfo = await request.json();

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
      return Response.json(
        { success: false, message: "User already exists" },
        { status: 400 }
      );
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

    return Response.json(
      {
        success: true,
        message: "New user created successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error registering user", error);
    return Response.json(
      {
        success: false,
        message: "Error register user",
      },
      {
        status: 500,
      }
    );
  }
}
