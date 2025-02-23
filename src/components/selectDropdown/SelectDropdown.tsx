import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
      <div className=" bg-blue_light p-1 rounded-[5px] font-openSans">
        <SelectTrigger className="w-[220px] max-lg:w-[265px] max-md:w-[330px] h-[32px] rounded-[5px] bg-white border-none">
          <SelectValue placeholder={`${selectionPlaceHolder}`} />
        </SelectTrigger>
      </div>
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
