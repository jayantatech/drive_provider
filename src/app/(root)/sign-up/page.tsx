"use client";
import { googleSignIn } from "@/auth/actions";
import ContentWrapper from "@/components/contentWrapper/ContentWrapper";
import Header from "@/components/header/Header";
import { Car_People } from "@/contants/img/cars/img";
import { GoogleIcone } from "@/contants/img/icons/icons";
import { signUpSchema } from "@/lib/schemas/signUpSchema";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { z } from "zod";

interface SignUpErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  location?: string;
  password?: string;
  confirmPassword?: string;
  global?: string;
}

const Signup = () => {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<SignUpErrors>({});

  const clearError = (field: keyof SignUpErrors) => {
    setErrors((prevErrors) => ({ ...prevErrors, [field]: undefined }));
  };

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    function empetyFild() {
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setLocation("");
      setPassword("");
      setConfirmPassword("");
    }
    try {
      const userInfo = {
        firstName,
        lastName,
        email,
        phone,
        location,
        password,
        confirmPassword,
      };

      // Validate user info using Zod schema
      signUpSchema.parse(userInfo);

      const response = await axios.post("/api/sign-up", userInfo);
      empetyFild();
      router.push("/login");
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: SignUpErrors = error.errors.reduce((acc, err) => {
          acc[err.path[0] as keyof SignUpErrors] = err.message;
          return acc;
        }, {} as SignUpErrors);
        setErrors(fieldErrors);
      } else {
        console.error("Error:", error);
        setErrors({ global: "An error occurred" });
      }
    }
  };

  const authWithGoogle = async () => {
    await googleSignIn();
  };

  return (
    <>
      <Header />
      <div className="w-full h-auto py-10 flex items-center justify-center">
        <ContentWrapper>
          <div className="flex flex-row h-auto lg:w-[84%] w-full bg-black shadow-xl rounded-[6px] overflow-hidden mx-auto max-md:flex-col-reverse max-md:h-auto relative z-0">
            <div className="w-full xl:w-3/6 max-lg:w-3/5 max-md:w-full bg-black flex flex-col justify-center p-8 max-lg:p-5 hover:shadow-">
              <h2 className="text-3xl font-bold mb-6 font-raleway text-white">
                Create an account
              </h2>
              <form className="space-y-4" onSubmit={submitHandler}>
                <div className="flex flex-row justify-between gap-2">
                  <div className="flex flex-col gap-[2px] w-1/2">
                    <label className="block text-sm font-semibold text-white">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={firstName}
                      onChange={(e) => {
                        setFirstName(e.target.value);
                        clearError("firstName");
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-[6px] font-openSans font-semibold text-[14px]"
                      placeholder="Enter your first name"
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm">{errors.firstName}</p>
                    )}
                  </div>
                  <div className="flex flex-col gap-[2px] w-1/2">
                    <label className="block text-sm font-semibold text-white">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={lastName}
                      onChange={(e) => {
                        setLastName(e.target.value);
                        clearError("lastName");
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-[6px] font-openSans font-semibold text-[14px]"
                      placeholder="Enter your last name"
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm">{errors.lastName}</p>
                    )}
                  </div>
                </div>
                <div className="flex flex-row justify-between gap-2">
                  <div className="flex flex-col gap-[2px] w-1/2">
                    <label className="block text-sm font-semibold text-white">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        clearError("phone");
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-[6px] font-openSans font-semibold text-[14px]"
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm">{errors.phone}</p>
                    )}
                  </div>
                  <div className="flex flex-col gap-[2px] w-1/2">
                    <label className="block text-sm font-semibold text-white">
                      City
                    </label>
                    <select
                      name="city"
                      value={location}
                      onChange={(e) => {
                        setLocation(e.target.value);
                        clearError("location");
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-[6px] font-openSans font-semibold text-[14px]"
                    >
                      <option value="">Select your city</option>
                      <option value="Bongaon">Bongaon</option>
                      <option value="Paikpara">Paikpara</option>
                    </select>
                    {errors.location && (
                      <p className="text-red-500 text-sm">{errors.location}</p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-[2px]">
                  <label className="block text-sm font-semibold text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      clearError("email");
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-[6px] font-openSans font-semibold text-[14px]"
                    placeholder="Enter your email address"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>

                <div className="flex flex-col gap-[2px]">
                  <label className="block text-sm font-semibold text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      clearError("password");
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-[6px] font-openSans font-semibold text-[14px]"
                    placeholder="Enter password"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm">{errors.password}</p>
                  )}
                </div>
                <div className="flex flex-col gap-[2px]">
                  <label className="block text-sm font-semibold text-white">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                      clearError("confirmPassword");
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-[6px] font-openSans font-semibold text-[14px]"
                    placeholder="Confirm password"
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-sm">
                      {errors.confirmPassword}
                    </p>
                  )}
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
                  className="w-full py-2 bg-color_main text-white rounded-[6px] font-raleway font-semibold text-[16px] hover:bg-opacity-80 transition-all duration-150"
                >
                  Sign Up
                </button>
              </form>
              <div className="py-2 flex flex-col gap-2">
                <div className="text-center">
                  <span className="text-white">or Sign up with</span>
                </div>
                <button
                  className="w-full py-2 border border-gray-300 flex items-center justify-center gap-2 rounded-[6px] text-white"
                  onClick={authWithGoogle}
                >
                  <Image
                    src={GoogleIcone}
                    alt="google icon"
                    className="w-5 h-5"
                  />
                  Sign up with Google
                </button>
                <p className="text-center text-sm text-white mt-4">
                  Already have an account?{" "}
                  <a href="#" className="text-color_main hover:underline">
                    Sign in
                  </a>
                </p>
                {errors.global && (
                  <p className="text-red-500 text-sm">{errors.global}</p>
                )}
              </div>
            </div>
            <div className="w-3/5 h-auto max-md:h-[340px] max-md:w-full max-lg:w-2/5 relative overflow-hidden">
              <Image
                src={Car_People}
                layout="fill"
                objectFit="cover"
                alt="Car with people"
              />
            </div>
          </div>
        </ContentWrapper>
      </div>
    </>
  );
};

export default Signup;
