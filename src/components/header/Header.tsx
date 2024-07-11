"use client";
import React, { useEffect, useState } from "react";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import Image from "next/image";
import logo from "../../../public/logoipsum-297 (2).svg";
import { MobileNav } from "../mobileNav/MobileNav";
import HeaderNavOptions from "../headerNavOptions/HeaderNavOptions";
import LoginAndSignUpButton from "../loginAndSignUpButton/LoginAndSignUpButton";
import { DropdownAccount } from "../dropdownAccount/DropdownAccount";
import Link from "next/link";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import axios from "axios";
import { verifyJwtToken } from "@/utils/jwt";

const Header = ({ className }: { className?: string }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [decodedToken, setDecodedToken] = useState<any>(null);

  const { data: sessionData } = useSession();

  // useEffect(() => {
  //   const fetchAndVerifyToken = async () => {
  //     try {
  //       const response = await axios.get("/api/token");
  //       const token = response.data.token;
  //       console.log("This is teh token ", token);
  //       const decoded = await verifyJwtToken(token);
  //       console.log("This is teh decoded ", decoded);

  //       return decoded;
  //     } catch (error) {
  //       console.error("Error verifying token:", error);
  //       return null;
  //     }
  //   };

  //   fetchAndVerifyToken();
  // }, []);

  return (
    <header
      className={` ${
        className ? className : ""
      } min-w-full h-[80px] py-2 text-white flex items-center justify-center flex-col bg-black bg-clip-padding backdrop-filter backdrop-blur-sm  `}
    >
      <ContentWrapper>
        <div className="w-full h-[60px] grid grid-flow-col grid-cols-6 gap-3">
          <div className="grid col-span-1 items-center justify-center max-lg:justify-start max-md:col-span-3 max-lg:col-span-3">
            <Link href={"/"}>
              <Image alt="Logo" src={logo} width={180} height={70} />
            </Link>
          </div>
          <nav className="grid col-span-3 max-lg:col-span-4 max-lg:hidden">
            <HeaderNavOptions />
          </nav>
          <div className="grid col-span-2 max-md:col-span-3 max-lg:col-span-3">
            <div className="flex items-center justify-end gap-4">
              {!session?.user ? (
                <div className="flex items-center justify-end w-full h-full gap-4 max-lg:hidden">
                  <LoginAndSignUpButton />
                </div>
              ) : (
                <div className="max-md:hidden block">
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
