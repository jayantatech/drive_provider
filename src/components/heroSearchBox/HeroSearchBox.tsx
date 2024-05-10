import SelectDropdown from "../selectDropdown/SelectDropdown";

const HeroSearchBox = () => {
  return (
    <div className=" w-[80%] h-[140px] bg-blue-600 rounded-[10px] p-2 flex items-center justify-center">
      <SelectDropdown
        selectionItems={["Kolkata", "Bengaluru"]}
        selectionLabel="location"
        selectionPlaceHolder="Select Your City"
      />
      <SelectDropdown
        selectionItems={["Kolkata", "Bengaluru"]}
        selectionLabel="location"
        selectionPlaceHolder="Select Your City"
      />
    </div>
  );
};

export default HeroSearchBox;
