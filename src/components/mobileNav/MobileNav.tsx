"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FiAlignJustify } from "react-icons/fi";
import Image from "next/image";
import logo from "../../../public/logoipsum-297 (2).svg";
import HeaderNavOptions from "../headerNavOptions/HeaderNavOptions";
import LoginAndSignUpButton from "../loginAndSignUpButton/LoginAndSignUpButton";
import { UserProfileButton } from "../userProfileButton/UserProfileButton";
import { ButtonMain } from "../button/Button";
import { logout } from "@/auth/actions";

export const MobileNav = ({ userInfo }: { userInfo: object }) => {
  return (
    <Sheet>
      <SheetTrigger>
        <span className=" hidden max-lg:block">
          <FiAlignJustify className="text-3xl" />
        </span>
      </SheetTrigger>
      <SheetContent className="bg-black p-3">
        <div className=" min-h-[60px] min-w-full flex items-center justify-between">
          <Image src={logo} alt="logo" width={210} />
        </div>
        <nav className="w-full h-[260px] flex flex-col items-start justify-start py-4 max-lg:py-6 text-white">
          <HeaderNavOptions />
        </nav>
        <div className=" w-full h-[470px] relative">
          {!userInfo ? (
            <div className="min-w-full h-[110px] flex flex-col gap-2 items-center justify-center mt-4 absolute bottom-0 left-0">
              <LoginAndSignUpButton />
            </div>
          ) : (
            <div className=" hidden max-md:block">
              <div className=" absolute bottom-8 left-0 w-full h-[60px] bg-white flex items-center justify-between p-2 rounded-[5px]">
                <div className="min-w-[75%] h-full">
                  <ButtonMain
                    text="logout"
                    isOutline={true}
                    functionCall={() => logout()}
                    customClass={"text-blue_main  hover:text-white"}
                  />
                </div>

                <UserProfileButton userInfo={userInfo} />
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
