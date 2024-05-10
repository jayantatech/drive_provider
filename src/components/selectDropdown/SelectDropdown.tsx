import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CiLocationOn } from "react-icons/ci";

type Props = {
  selectionItems: string[];
  selectionPlaceHolder: string;
  selectionLabel: string;
};

export default function SelectDropdown({
  selectionPlaceHolder,
  selectionLabel,
  selectionItems,
}: Props) {
  return (
    <Select>
      <SelectTrigger className="w-[220px] h-[40px] bg-[#f8f8f8] rounded-[5px]">
        <SelectValue placeholder={`${selectionPlaceHolder}`} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className=" bg-white border-none">
          <SelectLabel>{selectionLabel}</SelectLabel>
          {selectionItems?.map((item: string) => (
            <SelectItem value={item.toLowerCase()}>{item}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
