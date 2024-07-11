import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnection";
import UserModel from "@/lib/model/User";
import bcrypt from "bcryptjs";
import { signJwtToken } from "@/utils/jwt";
import cookie from "cookie";

// This function handles the POST method
export async function POST(req: NextRequest) {
  await dbConnect();

  try {
    const { email, password } = await req.json();
    const user = await UserModel.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { success: false, message: "Invalid Credentials" },
        { status: 401 }
      );
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return NextResponse.json(
        { success: false, message: "Invalid Credentials" },
        { status: 401 }
      );
    }

    const payload = {
      id: user.id,
      firstName: user.firstName,
      location: user.location,
      role: user.role,
    };

    const token = signJwtToken(payload);

    const response = NextResponse.json(
      { message: "Login successful" },
      { status: 200 }
    );
    response.headers.set(
      "Set-Cookie",
      cookie.serialize("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 3600,
        path: "/",
      })
    );

    return response;
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Server Error" },
      { status: 500 }
    );
  }
}
