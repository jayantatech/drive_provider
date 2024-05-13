import clientPromise from "@/lib/db";
import NextAuth from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter";

import google from "next-auth/providers/google";
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    google({
      clientId: process.env.AUTH_GOOGLE_ID as string,
      clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
    }),
  ],
  secret: process.env.AUTH_SECRET,
  adapter: MongoDBAdapter(clientPromise),
});
