"use client";
import { login } from "@/auth/actions";
import { ButtonMain } from "../button/Button";

const LoginAndSignUpButton = () => {
  return (
    <>
      <ButtonMain
        text="Sign Up"
        isOutline={true}
        functionCall={() => login()}
      />
      <ButtonMain text="Login" isOutline={false} functionCall={() => login()} />
    </>
  );
};

export default LoginAndSignUpButton;
