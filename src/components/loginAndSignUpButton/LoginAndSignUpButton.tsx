"use client";
import { ButtonMain } from "../button/Button";
import { useRouter } from "next/navigation";

const LoginAndSignUpButton = () => {
  const router = useRouter();
  const signUpHandeler = () => {
    router.push("/sign-up");
  };

  const loginHandeler = () => {
    router.push("/login");
  };

  return (
    <>
      <ButtonMain
        text="Sign Up"
        isOutline={true}
        functionCall={() => signUpHandeler()}
      />
      <ButtonMain
        text="Login"
        isOutline={false}
        functionCall={() => loginHandeler()}
      />
    </>
  );
};

export default LoginAndSignUpButton;
