"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserProfileButton } from "../userProfileButton/UserProfileButton";
import { UserIconeColor } from "@/contants/img/icons/icons";
import {
  LuCalendarDays,
  LuLogOut,
  LuMessageCircle,
  LuPhoneCall,
  LuUser,
} from "react-icons/lu";
import { useRouter } from "next/navigation";

export const DropdownAccount = ({ userInfo }: { userInfo: object }) => {
  const navitagion = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserProfileButton userImage={UserIconeColor} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" bg-black flex gap-2 flex-col border-none w-[168px] h-auto px-2.5 py-2 rounded-[6px]">
        <div className="w-full h-[34px] text-white flex items-center justify-center gap-1 border-b-2">
          <span className="text-[16px] font-raleway font-bold">My Account</span>
        </div>
        <div
          className="w-full h-[34px] hover:bg-color_main text-white flex items-center justify-start gap-1 rounded-[6px] pl-5 cursor-pointer"
          onClick={() => navitagion.push("/bookings")}
        >
          <LuCalendarDays className="text-[20px]" />
          <span className="text-[16px] font-raleway font-bold">Booking</span>
        </div>
        <div
          className="w-full h-[34px] hover:bg-color_main text-white flex items-center justify-start gap-1 rounded-[6px] pl-5 cursor-pointer"
          onClick={() => navitagion.push("/profile")}
        >
          <LuUser className="text-[20px]" />
          <span className="text-[16px] font-raleway font-bold">Profile</span>
        </div>
        <div
          className="w-full h-[34px] hover:bg-color_main text-white flex items-center justify-start gap-1 rounded-[6px] pl-5 cursor-pointer"
          onClick={() => navitagion.push("/support")}
        >
          <LuPhoneCall className="text-[20px]" />
          <span className="text-[16px] font-raleway font-bold">Support</span>
        </div>
        <div
          className="w-full h-[34px] hover:bg-color_main text-white flex items-center justify-start gap-1 rounded-[6px] pl-5 cursor-pointer"
          onClick={() => navitagion.push("/contact")}
        >
          <LuMessageCircle className="text-[20px]" />
          <span className="text-[16px] font-raleway font-bold">Fedback</span>
        </div>
        <div className="w-full h-[34px] border-2 text-white flex items-center justify-start gap-1 rounded-[6px] pl-5 cursor-pointer">
          <LuLogOut className="text-[20px]" />
          <span className="text-[16px] font-raleway font-bold">Logout</span>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
