"use server";

import { auth, signIn, signOut } from "./auth";

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
