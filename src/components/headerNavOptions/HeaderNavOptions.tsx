import Link from "next/link";

const HeaderNavOptions = () => {
  return (
    <ul className="flex items-center justify-start max-xl:justify-center gap-3 text-[18px] max-xl:text-[16px] font-semibold md:px-4 max-lg:flex-col max-lg:justify-start max-lg:items-start max-md:gap-6 max-lg:gap-8">
      <Link href={"/"}>
        <li className="px-3 max-lg:px-2 py-1 hover:bg-color_main rounded-[5px] cursor-pointer">
          Home
        </li>
      </Link>
      <Link href={"/cars"}>
        <li className="px-3 max-lg:px-2 py-1 hover:bg-color_main rounded-[5px] cursor-pointer">
          {" "}
          Explore Cars
        </li>
      </Link>
      <Link href={"/about"}>
        <li className="px-3 max-lg:px-2 py-1 hover:bg-color_main rounded-[5px] cursor-pointer">
          {" "}
          About{" "}
        </li>
      </Link>
      <Link href={"/contact"}>
        <li className="px-3 max-lg:px-2 py-1 hover:bg-color_main rounded-[5px] cursor-pointer">
          {" "}
          Contact
        </li>
      </Link>
    </ul>
  );
};

export default HeaderNavOptions;
