"use client";

import React from "react";
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
import Image from "next/image";
import logo from "../../../public/logoipsum-297 (2).svg";
UserIconeColor;
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "../ui/sheet";
import { userDashboardOptions } from "@/contants/Contants";
import { UserIconeColor } from "@/contants/img/icons/icons";

const iconComponents: Record<string, IconType> = {
  LuLayoutDashboard: LuLayoutDashboard,
  LuUser: LuUser,
  LuCalendarDays: LuCalendarDays,
  LuCar: LuCar,
  LuCreditCard: LuCreditCard,
  LuMessagesSquare: LuMessagesSquare,
  LuPhoneCall: LuPhoneCall,
};

const MobileDashboardSheet = () => {
  const pathName = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="fixed top-[40%] right-[-42px] h-[30px] w-[120px] z-50 -rotate-90">
        <div className="w-full h-full bg-black text-white rounded-[6px] flex items-center justify-center gap-1">
          <LuLayoutDashboard className="text-[18px] text-white" />
          <span className="text-[14px] font-raleway font-bold">Dashboard</span>
        </div>
      </SheetTrigger>
      <SheetContent className="bg-black px-0">
        <Image
          src={logo}
          alt="Logo"
          width={160}
          height={40}
          className="mx-auto mt-4"
        />
        <SheetTitle>Dashboard</SheetTitle>
        <div className="flex flex-col items-center p-4 relative w-full h-full">
          <div className="w-full h-auto py-3 mt-3 flex flex-col gap-2.5">
            {userDashboardOptions.map((item, index) => {
              const IconComponent = iconComponents[item.icone];
              if (!IconComponent) return null; // Handle case where icon component is not found

              return (
                <SheetClose key={index} asChild>
                  <Link
                    href={item.linkTo}
                    className={`w-full h-[44px] hover:bg-cyan-600 cursor-pointer transition-all duration-150 rounded-[6px] flex items-center justify-start pl-4 gap-2 ${
                      pathName === item.linkTo ? "bg-color_main text-white" : ""
                    }`}
                  >
                    <IconComponent className="w-[20px] h-[20px] text-white" />
                    <span className="text-[16px] font-raleway font-bold text-white">
                      {item.title}
                    </span>
                  </Link>
                </SheetClose>
              );
            })}
          </div>
          <div className="w-full h-[128px]  mb-4  flex flex-col items-center absolute bottom-[80px] justify-center">
            <div className=" w-[86%] bg-white rounded-[6px] p-2 h-full flex flex-col items-center justify-center">
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

              <SheetClose asChild>
                <div className="w-full h-[40px] hover:bg-slate-300 cursor-pointer transition-all duration-150 rounded-[6px] flex items-center border-black justify-start pl-4 gap-2 border-2 text-black mt-4">
                  <LuLogOut className="w-[20px] h-[20px]" />
                  <span className="text-[16px] font-raleway font-bold">
                    Logout
                  </span>
                </div>
              </SheetClose>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileDashboardSheet;
