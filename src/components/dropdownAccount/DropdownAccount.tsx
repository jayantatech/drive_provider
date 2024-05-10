import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserProfileButton } from "../userProfileButton/UserProfileButton";
import { clsx } from "clsx";

export const DropdownAccount = ({ userInfo }: { userInfo: object }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserProfileButton userInfo={userInfo?.user} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" bg-white">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
