"use server";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import Image from "next/image";
import logo from "../../../public/logoipsum-297 (2).svg";
import { MobileNav } from "../mobileNav/MobileNav";
import HeaderNavOptions from "../headerNavOptions/HeaderNavOptions";
import { auth } from "@/auth/auth";
import LoginAndSignUpButton from "../loginAndSignUpButton/LoginAndSignUpButton";
import { UserProfileButton } from "../userProfileButton/UserProfileButton";
import { DropdownAccount } from "../dropdownAccount/DropdownAccount";

const Header = async () => {
  const session = await auth();
  return (
    <header className="min-w-full h-[90px] bg-black py-2 text-white flex items-center justify-center">
      <ContentWrapper>
        <div className=" w-full h-[60px] grid grid-flow-col grid-cols-6 gap-3 ">
          <div className="grid col-span-1 items-center justify-center max-lg:justify-start max-md:col-span-3 max-lg:col-span-3">
            <Image alt="Logo" src={logo} width={180} height={70} />
          </div>
          <nav className="grid col-span-3 max-lg:col-span-4 max-lg:hidden">
            <HeaderNavOptions />
          </nav>
          <div className="grid col-span-2 max-md:col-span-3 max-lg:col-span-3">
            <div className="flex items-center justify-end gap-4 ">
              {!session?.user ? (
                <div className=" flex items-center justify-end w-full h-full gap-4 max-lg:hidden">
                  <LoginAndSignUpButton />
                </div>
              ) : (
                <div className=" max-md:hidden block">
                  {/* <UserProfileButton userInfo={session?.user} /> */}
                  <DropdownAccount userInfo={session} />
                </div>
              )}
              <MobileNav userInfo={session?.user} />
            </div>
          </div>
        </div>
      </ContentWrapper>
    </header>
  );
};

export default Header;
