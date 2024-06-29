type Props = {
  titleBody: string;
  isTitleBodyWhite?: boolean;
  titleMain: string;
  titleDescription?: string;
  customClass?: {
    containerDiv?: string;
    titleBody?: string;
    titleMain?: string;
    titleDescription?: string;
  };
};
const SectionTitle = ({
  titleBody,
  isTitleBodyWhite,
  titleMain,
  titleDescription,
  customClass,
}: Props) => {
  return (
    <div
      className={`mb-4 lg:mb-0 max-lg:flex max-lg:text-start max-lg:items-start max-lg:flex-col ${
        customClass?.containerDiv ? customClass?.containerDiv : ""
      }`}
    >
      <div className="w-full h-auto max-lg:text-center">
        <h2
          className={` main_title ${
            !isTitleBodyWhite ? "text-black" : "text-white"
          } ${customClass?.titleMain ? customClass.titleMain : ""}`}
        >
          <span className={`text-color_main `}>{titleMain}</span>{" "}
          <span
            className={`${customClass?.titleBody ? customClass.titleBody : ""}`}
          >
            {titleBody?.toLowerCase()}
          </span>
        </h2>
      </div>
      <div>
        <p
          className={`max-md:px-1 max-lg:text-center main_description w-full max-md:text-center ${
            !isTitleBodyWhite ? "text-black" : "text-white"
          } ${
            customClass?.titleDescription ? customClass.titleDescription : ""
          } `}
        >
          {titleDescription}
        </p>
      </div>
    </div>
  );
};

export default SectionTitle;
