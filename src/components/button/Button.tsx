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
      className={`px-12 py-2 block border-[3px] border-color_main rounded-[5px]  text-[18px] font-semibold max-lg:w-full max-md:py-1 text-white ${
        !isOutline
          ? " bg-color_main"
          : "bg-transparent hover:bg-color_main transition-all duration-150"
      } ${!customClass ? "" : customClass}`}
      onClick={() => functionCall()}
    >
      {text}
    </button>
  );
}
