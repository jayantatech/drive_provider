"use client";
import ContentWrapper from "@/components/contentWrapper/ContentWrapper";
import Image from "next/image";
import React from "react";
import logo from "../../../public/logoipsum-297 (2).svg";
import { userDashboardOptions } from "@/contants/Contants";
import {
  DashboardIcone,
  UserIconeColor,
  logoutIcone,
} from "@/contants/img/icons/icons";
import {
  LuCalendarDays,
  LuCar,
  LuCreditCard,
  LuLayoutDashboard,
  LuLogOut,
  LuMessagesSquare,
  LuPhoneCall,
  LuUser,
} from "react-icons/lu";

import Link from "next/link";
import { IconType } from "react-icons/lib";
import { usePathname } from "next/navigation";

interface DashboardOption {
  title: string;
  linkTo: string;
  icone: keyof typeof iconComponents;
}

const iconComponents: Record<string, IconType> = {
  LuLayoutDashboard: LuLayoutDashboard,
  LuUser: LuUser,
  LuCalendarDays: LuCalendarDays,
  LuCar: LuCar,
  LuCreditCard: LuCreditCard,
  LuMessagesSquare: LuMessagesSquare,
  LuPhoneCall: LuPhoneCall,
};

const NavBar = () => {
  const pathName = usePathname();
  return (
    <div className="bg-black text-white h-[848px] w-[260px] rounded-[6px] p-4 flex items-center justify-between flex-col">
      <div className="w-full  h-auto">
        <div className="flex items-center justify-center w-full h-[48px]">
          <Image src={logo} alt="logo" width={160} height={40} />
        </div>
        <div className="w-full h-auto py-3 mt-3 flex flex-col gap-2.5 ">
          {userDashboardOptions.map((item: DashboardOption, index) => {
            const IconComponent = iconComponents[item.icone];
            if (!IconComponent) return null; // Handle case where icon component is not found
            return (
              <Link
                key={index}
                href={item.linkTo}
                className={`w-full h-[44px] hover:bg-color_main cursor-pointer transition-all duration-150 rounded-[6px] flex items-center justify-start pl-4 gap-2 ${
                  pathName === item.linkTo ? "bg-color_main" : ""
                }`}
              >
                <IconComponent className="w-[20px] h-[20px]" />
                <span className="text-[16px] font-raleway font-bold">
                  {item.title}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="w-full h-[128px] bg-white mb-4  rounded-[6px] p-2 flex flex-col items-center justify-between">
        <div className="w-full h-[60px] flex flex-row gap-2 items-center justify-start">
          <div>
            {" "}
            <Image
              src={UserIconeColor}
              alt="profile Image"
              width={48}
              height={48}
              className="w-auto h-auto"
            />
          </div>
          <div className="flex flex-col gap-[2px] text-black">
            <span className="text-[16px] font-raleway font-bold">
              Jay Biswas
            </span>
            <span className="text-[12px] font-raleway font-bold">
              city:Kolkata
            </span>
          </div>
        </div>
        <div className="w-full h-[40px] hover:bg-slate-300 cursor-pointer transition-all duration-150 rounded-[6px] flex items-center border-black justify-start pl-4 gap-2 border-2 text-black">
          <LuLogOut className="w-[20px] h-[20px]" />
          <span className="text-[16px] font-raleway font-bold">Logout</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
