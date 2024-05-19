// components/HowWeWork.tsx
import { IoCarSport } from "react-icons/io5";

const steps = [
  {
    number: "01.",
    title: "Choose Your Car",
    description:
      "Browse our diverse selection of vehicles to find the perfect car for your needs.",
    icon: "/icons/choose-car.svg", // Replace with actual icon path
  },
  {
    number: "02.",
    title: "Book Online",
    description:
      "Easily reserve your chosen vehicle with our user-friendly online booking system.",
    icon: "/icons/book-online.svg", // Replace with actual icon path
  },
  {
    number: "03.",
    title: "Pick Up",
    description:
      "Collect your car from our convenient location or have it delivered to your doorstep.",
    icon: "/icons/pick-up.svg", // Replace with actual icon path
  },
  {
    number: "04.",
    title: "Enjoy Your Ride",
    description:
      "Drive with confidence and enjoy your journey with our well-maintained, reliable vehicles.",
    icon: "/icons/enjoy-ride.svg", // Replace with actual icon path
  },
];

const WorkProcess: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">How We Works</h2>
        </div>
        <div className="flex flex-wrap -mx-4 w-full h-auto py-4 gap-8 items-center justify-center">
          {steps.map((step, index) => (
            <div className=" w-[274px] h-[288px] p-6 bg-white rounded-[6px] shadow-md border-[1px] border-black_main">
              <div className=" flex w-full h-[64px] items-center justify-between">
                <IoCarSport className="text-[46px] text-color_main" />
                <span className="text-[38px] font-semibold">{step.number}</span>
              </div>
              <h3 className=" text-[24px] font-semibold py-1">
                {" "}
                {step.title}{" "}
              </h3>
              <p className="font-[Poppins]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
