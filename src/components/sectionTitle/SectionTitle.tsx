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
    <div className="mb-4 lg:mb-0 max-lg:flex max-lg:text-justify max-lg:items-center max-lg:flex-col">
      <div className="w-full h-auto max-lg:text-center">
        <h2
          className={` main_title ${
            !isTitleBodyWhite ? "text-black" : "text-white"
          }`}
        >
          <span className="text-color_main">{titleMain}</span>{" "}
          {titleBody?.toLowerCase()}
        </h2>
      </div>
      <div className="max-lg:px-10 max-md:px-1 max-lg:text-center main_description w-full max-md:text-center">
        <p className={`${!isTitleBodyWhite ? "text-black" : "text-white"}`}>
          {titleDescription}
        </p>
      </div>
    </div>
  );
};

export default SectionTitle;
