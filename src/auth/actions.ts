"use server";

import { auth, signIn, signOut } from "./auth";

export const login = async () => {
  await signIn("google");
};
export const logout = async () => {
  await signOut();
};

export const userSession = async () => {
  // try {

  // } catch (error) {
  //   console.log(error);
  //   throw error;
  // }
  const session = await auth();
  console.log(session);
};
userSession();
