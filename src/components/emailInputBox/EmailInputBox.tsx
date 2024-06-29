"use client";

import { useState, FormEvent } from "react";

export default function EmailInputBox() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const onClickHandeler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) {
      setError("Email is required.");
      setSuccess("");
      return;
    }

    // // console.log(email);
    setError("");
    setSuccess("Thank you for your email!");
    setEmail(""); // Clear the input field after successful submission
  };

  return (
    <>
      <form
        className="w-full flex flex-col gap-1 h-[85px]"
        onSubmit={onClickHandeler}
      >
        <input
          name="Email"
          type="email"
          placeholder="Enter Your Email"
          className="w-[100%] h-full text-[16px] font-raleway font-bold px-2 rounded-[6px]"
          value={email} // Bind the input value to the state
          onChange={(e) => setEmail(e.target.value)} // Update state on input change
        />
        <button
          className="w-full h-full bg-color_main text-white text-[18px] rounded-[6px] font-bold font-raleway"
          type="submit"
        >
          Submit
        </button>
      </form>
      {error && (
        <p className="text-red-500 font-openSans text-[14px] font-semibold">
          {error}
        </p>
      )}
      {success && (
        <p className="text-green-500 text-[14px] font-semibold">{success}</p>
      )}
    </>
  );
}
