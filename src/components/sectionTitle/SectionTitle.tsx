type Props = {
  titleBody: string;
  isTitleBodyWhite?: boolean;
  titleMain: string;
  titleDescription?: string;
};
const SectionTitle = ({
  titleBody,
  isTitleBodyWhite,
  titleMain,
  titleDescription,
}: Props) => {
  return (
    <div className="w-full lg:w-[60%] mb-4 lg:mb-0 max-lg:flex max-lg:text-justify max-lg:items-center max-lg:flex-col">
      <div>
        <h2
          className={` main_title ${
            !isTitleBodyWhite ? "text-black" : "text-white"
          }`}
        >
          <span className="text-color_main">{titleMain}</span>{" "}
          {titleBody?.toLowerCase()}
        </h2>
      </div>
      <div>
        <p
          className={`max-lg:px-10 bg-red-400 max-md:px-1 max-lg:text-center min-lg:max-w-[610px] font-openSans min-w-full ${
            !isTitleBodyWhite ? "text-black" : "text-white"
          }`}
        >
          {titleDescription}
        </p>
      </div>
    </div>
  );
};

export default SectionTitle;
