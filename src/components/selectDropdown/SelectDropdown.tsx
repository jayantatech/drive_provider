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
  onChange: (value: string) => void;
};

export default function SelectDropdown({
  selectionPlaceHolder,
  selectionLabel,
  selectionItems,
  onChange,
}: Props) {
  const handleSelectionChange = (event: string) => {
    onChange(event);
  };
  return (
    <Select onValueChange={(event) => handleSelectionChange(event)}>
      <SelectTrigger className="w-[220px] h-[40px] bg-[#f8f8f8] rounded-[5px]">
        <SelectValue placeholder={`${selectionPlaceHolder}`} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className=" bg-white border-none">
          <SelectLabel>{selectionLabel}</SelectLabel>
          {selectionItems?.map((item: string) => (
            <SelectItem value={item.toLowerCase()} key={item}>
              {item}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
