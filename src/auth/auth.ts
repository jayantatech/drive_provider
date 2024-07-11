import NextAuth, { AuthOptions, DefaultSession, Session } from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/lib/db";
import CredentialsProvider from "next-auth/providers/credentials";
import google from "next-auth/providers/google";
import UserModel from "@/lib/model/User";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/dbConnection";

// Define the custom session user type
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      image: string;
    } & DefaultSession["user"];
  }
}

const adapter = MongoDBAdapter(
  clientPromise
) as unknown as AuthOptions["adapter"];

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing credentials");
        }
        await dbConnect();
        await clientPromise;

        const user = await UserModel.findOne({ email: credentials.email });

        if (!user) {
          throw new Error("No user found with the provided email");
        }

        if (
          user &&
          typeof credentials.password === "string" &&
          typeof user.password === "string"
        ) {
          const isPasswordValid = await bcrypt.compare(
            credentials.password,
            user.password
          );
          if (!isPasswordValid) {
            throw new Error("Incorrect password");
          }

          return {
            id: user.id.toString(),
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            location: user.location,
            role: user.role,
          };
        }

        return null;
      },
    }),
    google({
      clientId: process.env.AUTH_GOOGLE_ID as string,
      clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
    }),
  ],
  secret: process.env.AUTH_SECRET,
  adapter: adapter,
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
});
