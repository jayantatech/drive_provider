type Props = {
  text: string;
  isOutline: boolean;
  functionCall?: () => void;
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
      className={` w-[140px] h-[38px] block border-[2px] border-color_main rounded-[5px] text-[16px] button_main max-lg:w-full max-md:py-1 text-white hover:scale-105 transition-all duration-150 ${
        !isOutline
          ? " bg-color_main"
          : "bg-transparent transition-all duration-150"
      } ${!customClass ? "" : customClass}`}
      onClick={functionCall}
    >
      {text}
    </button>
  );
}
