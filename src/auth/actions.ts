"use server";

import { verifyJwtToken } from "@/utils/jwt";
import { auth, signIn, signOut } from "./auth";
import axios from "axios";
export const login = async () => {
  await signIn("google");
};

export const logout = async () => {
  await signOut();
};

export const getSessionData = async () => {
  const session = await auth();
  return session;
};

export const googleSignIn = async () => {
  await signIn("google");
};
interface JwtPayload {
  id: string;
  firstName: string;
  location: string;
  role: string;
  iat: number;
  exp: number;
}

export const verifyToken = async () => {
  try {
    const response = await axios.get("/api/token");
    const token = response.data.token;
    console.log("This is teh token ", token);
    const decoded = verifyJwtToken(token);
    console.log("This is teh decoded ", decoded);

    return decoded;
  } catch (error) {
    console.error("Error verifying token:", error);
    return null;
  }
};
