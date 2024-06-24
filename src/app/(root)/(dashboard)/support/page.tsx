"use client";
import { useState } from "react";
import Image from "next/image";
import ContentWrapper from "@/components/contentWrapper/ContentWrapper";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import { CarOnMountain } from "@/contants/img/others/img";
import { IoLocationSharp } from "react-icons/io5";
import { MdAddBox, MdOutlineEmail, MdPhoneInTalk } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdOutlineAccessTime } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

const Page = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log(formData);
      setSuccessMessage("Submit successful! We will contact you shortly.");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setErrors({});
    } else {
      setErrors(validationErrors);
      setSuccessMessage("");
    }
  };

  const validateForm = () => {
    let errors: FormErrors = {};
    if (!formData.firstName) errors.firstName = "Enter this field.";
    if (!formData.lastName) errors.lastName = "Enter this field.";
    if (!formData.email) errors.email = "Enter this field.";
    if (!formData.phone) errors.phone = "Enter this field.";
    if (!formData.subject) errors.subject = "Enter this field.";
    if (!formData.message) errors.message = "Enter this field.";
    return errors;
  };

  return (
    <>
      <div className="w-full h-[40px] mb-2 flex items-center justify-between">
        <h3 className="text-[26px] font-raleway font-bold capitalize">
          Support
        </h3>{" "}
        <div className="w-auto h-full flex items-center justify-end ">
          <button className="py-1 px-2 bg-color_main font-raleway text-[14px] font-bold rounded-[6px] flex items-center justify-center gap-1 text-white">
            <MdAddBox className="text-[18px]" />
            Create Support Ticket{" "}
          </button>
        </div>
      </div>{" "}
      <div className="w-full h-auto py-2 bg-cyan-200 px-2 ">
        <div className="w-full h-[148px] bg-slate-400 rounded-[4px] flex items-center justify-center font-bold text-[20px] font-raleway border border-black border-dashed">
          No Active Support Ticket
        </div>
      </div>
      <div className="py-10 bg-red-300">
        <div className="w-full flex flex-col md:flex-row min-h-[640px] max-lg:min-h-[594px] h-auto max-md:h-auto max-lg:h-auto bg-[#131131] relative shadow-xl rounded-[6px]">
          <div className="w-full md:w-2/3 h-full max-md:h-auto p-6 max-lg:p-4">
            <div className="w-full h-auto py-2 flex gap-2 items-center justify-between">
              <h3 className="text-[18px] max-lg:text-[14px] font-raleway font-bold text-white">
                Help Center{" "}
              </h3>
              <div className="w-[74%] max-lg:w-[66%] h-[1px] border-t border-dashed border-color_main"></div>
            </div>
            <div className="w-full h-auto mb-4 text-start">
              <SectionTitle
                isTitleBodyWhite={true}
                titleMain="Your "
                titleBody="Car Rental Support"
                titleDescription="Need assistance? Our support team is here to help you with your car rental needs, from booking to troubleshooting."
                customClass={{
                  containerDiv: "max-lg:item-start",

                  titleBody: "max-lg:text-[20px] text-[26px]",
                  titleMain:
                    "max-lg:text-[20px] max-lg:text-start text-[26px] ",
                  titleDescription:
                    "max-lg:text-[14px] max-lg:p-0 max-lg:text-start max-md:text-start",
                }}
              />
            </div>
            <div className="w-full h-auto py-2 my-4 flex items-center justify-evenly gap-2">
              <div className="w-1/3 h-[40px] bg-white text-black rounded-[6px] flex items-center justify-start px-2 gap-2 shadow-md">
                <FiPhoneCall className="text-[20px]" />
                <span className="text-[16px] font-semibold">+9845858764</span>
              </div>
              <div className="w-w-1/3 h-[40px] bg-white text-black rounded-[6px] flex items-center justify-start px-2 gap-2 shadow-md">
                <FaWhatsapp className="text-[20px]" />
                <span className="text-[16px] font-semibold">+9845858764</span>
              </div>
              <div className="w-auto h-[40px] bg-white text-black rounded-[6px] flex items-center justify-start px-2 gap-2 shadow-md">
                <MdOutlineEmail className="text-[20px]" />
                <span className="text-[16px] font-semibold">
                  jaysadfsdf@gmil.com
                </span>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="w-full h-auto space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="w-full h-[40px] text-[16px] p-2 rounded-[4px] text-white placeholder-gray-400 border-none bg-[#313235]"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div className="w-full md:w-1/2">
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="w-full h-[40px] text-[16px] p-2 rounded-[4px] text-white placeholder-gray-400 border-none bg-[#313235]"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full h-[40px] text-[16px] p-2 rounded-[4px] text-white placeholder-gray-400 border-none bg-[#313235]"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                <div className="w-full md:w-1/2">
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full h-[40px] text-[16px] p-2 rounded-[4px] text-white placeholder-gray-400 border-none bg-[#313235]"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full h-[40px] text-[16px] p-2 rounded-[4px] text-white placeholder-gray-400 border-none bg-[#313235]"
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                )}
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className="w-full h-[148px] text-[16px] p-2 rounded-[4px] bg-[#313235] text-white placeholder-gray-400"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full h-[40px] bg-color_main text-white text-[16px] rounded-[4px] font-bold"
              >
                Submit Requst
              </button>
              {successMessage && (
                <p className="text-green-500 text-sm mt-4">{successMessage}</p>
              )}
            </form>
          </div>
          <div className="w-full  max-md:h-[420px] md:w-1/3 h-auto relative rounded-r-[6px] overflow-hidden">
            <div className="w-full h-full bg-black absolute z-10 top-0 left-0 opacity-30"></div>
            <Image
              src={CarOnMountain}
              alt="Testimonial Background"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
