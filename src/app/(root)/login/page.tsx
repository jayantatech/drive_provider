"use client";
import { googleSignIn } from "@/auth/actions";
import ContentWrapper from "@/components/contentWrapper/ContentWrapper";
import Header from "@/components/header/Header";
import { GoogleIcone } from "@/contants/img/icons/icons";
import { Car_White } from "@/contants/img/others/img";
import { signInSchema } from "@/lib/schemas/signInSchema";
import axios from "axios";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { z } from "zod";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      const validateData = signInSchema.parse({ email, password });

      // const result = await signIn("credentials", {
      //   email: validateData.email,
      //   password: validateData.password,
      // });

      const response = await axios.post("/api/login", {
        email: validateData.email,
        password: validateData.password,
      });
      // console.log(result);
      router.push("/bookings");
    } catch (err) {
      // Improved error handling
      if (err instanceof z.ZodError) {
        setError(err.errors.map((e) => e.message).join(", "));
      } else if (err instanceof Error) {
        setError("Incorrect email or password. Please try again.");
      } else {
        setError("An unexpected error occurred. Please try again later.");
        console.error("Login error:", err); // Log unexpected errors for debugging
      }
    }
  };

  const authWithGoogle = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.error("Google Sign-In error:", error);
      setError("Failed to sign in with Google. Please try again later.");
    }
  };

  return (
    <>
      <Header />
      <div className="w-full h-[788px] max-md:h-auto max-md:py-10 flex items-center justify-center">
        <ContentWrapper>
          <div className="flex flex-row h-[540px] lg:w-[84%] w-full bg-black shadow-xl rounded-[6px] overflow-hidden mx-auto max-md:flex-col-reverse max-md:h-auto relative z-0">
            <div className="w-full xl:w-2/5 max-lg:w-3/5 max-md:w-full bg-black flex flex-col justify-center p-8 hover:shadow-">
              <h2 className="text-3xl font-bold mb-6 font-raleway text-white">
                Welcome back!
              </h2>
              <p className="mb-6 font-openSans text-[14px] text-white">
                Enter to get unlimited access to data & information.
              </p>
              {error && (
                <div className="mb-4 text-red-500 font-semibold text-center">
                  {error}
                </div>
              )}
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-[2px]">
                  <label className="block text-sm font-semibold text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-[6px] font-openSans font-semibold text-[14px]"
                    placeholder="Enter your email address"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div className="flex flex-col gap-[2px]">
                  <label className="block text-sm text-white font-semibold">
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-[6px] font-openSans font-semibold text-[14px]"
                    placeholder="Enter password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2 text-sm text-white">Remember me</span>
                  </label>
                  <a
                    href="#"
                    className="text-sm text-color_main hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full py-2 bg-color_main text-white rounded-[6px] font-raleway font-bold text-[16px] hover:scale-95 transition-all duration-150"
                >
                  Log In
                </button>
                <div className="text-center my-4 text-white">Or login with</div>
                <button
                  type="button"
                  className="w-full py-2 border border-gray-300 flex items-center justify-center gap-2 rounded-[6px] text-white"
                  onClick={authWithGoogle}
                >
                  <Image
                    src={GoogleIcone}
                    width={20}
                    height={20}
                    alt="google icone"
                  />
                  Sign in with Google
                </button>
              </form>
              <p className="mt-6 text-center text-white">
                Don't have an account?{" "}
                <a href="/signup" className="text-color_main hover:underline">
                  Register here
                </a>
              </p>
            </div>
            <div className="w-2/3 h-auto max-md:h-[340px] max-md:w-full max-lg:w-2/5 relative">
              <Image
                src={Car_White}
                layout="fill"
                objectFit="cover"
                alt="google icone"
              />
            </div>
          </div>
        </ContentWrapper>
      </div>
    </>
  );
};

export default Login;
