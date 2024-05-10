type Props = {
  text: string;
  isOutline: boolean;
  functionCall: () => void;
  customClass?: string;
};

export function ButtonMain({
  text,
  isOutline,
  functionCall,
  customClass,
}: Props) {
  return (
    <button
      className={`px-12 py-2 block border-[3px] border-blue_main rounded-[5px]  text-[18px] font-semibold max-lg:w-full max-md:py-1 text-white ${
        !isOutline
          ? " bg-blue_main"
          : "bg-transparent hover:bg-blue_main transition-all duration-150"
      } ${!customClass ? "" : customClass}`}
      onClick={() => functionCall()}
    >
      {text}
    </button>
  );
}
