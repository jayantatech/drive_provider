"use client";
import { useState } from "react";
import Image from "next/image";
import ContentWrapper from "@/components/contentWrapper/ContentWrapper";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import { CarOnMountain } from "@/contants/img/others/img";
import { IoLocationSharp } from "react-icons/io5";
import { MdPhoneInTalk } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdOutlineAccessTime } from "react-icons/md";

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

const GetInTouchSection = () => {
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
      // console.log(formData);
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
    <div className="py-10 text-white">
      <ContentWrapper>
        <div className="w-full flex flex-col md:flex-row min-h-[640px] max-lg:min-h-[594px] h-auto max-md:h-auto max-lg:h-auto bg-[#131131] relative shadow-xl rounded-[6px]">
          <div className="w-full h-full bg-color_main translate-x-6 translate-y-6 absolute -z-10 rounded-[6px] max-md:hidden"></div>
          <div className="w-full md:w-1/2 h-full max-md:h-auto p-6 max-lg:p-4">
            <div className="w-full h-auto py-2 flex gap-2 items-center justify-between">
              <h3 className="text-[18px] max-lg:text-[14px] font-raleway font-bold text-white">
                Let's Connect
              </h3>
              <div className="w-[74%] max-lg:w-[66%] h-[1px] border-t border-dashed border-color_main"></div>
            </div>
            <div className="w-full h-auto mb-10 text-start">
              <SectionTitle
                isTitleBodyWhite={true}
                titleMain="Send"
                titleBody="us a message"
                titleDescription="By delivering superior digital solutions, we continuously surpass our clients' expectations. Get in touch with us for a free quote!"
                customClass={{
                  containerDiv: "max-lg:item-start",
                  titleBody: "max-lg:text-[20px]",
                  titleMain: "max-lg:text-[20px] max-lg:text-start ",
                  titleDescription:
                    "max-lg:text-[14px] max-lg:p-0 max-lg:text-start max-md:text-start",
                }}
              />
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
          <div className="w-full  max-md:h-[420px] md:w-1/2 h-auto relative rounded-r-[6px] overflow-hidden">
            <div className="w-full h-full bg-black absolute z-10 top-0 left-0 opacity-30"></div>
            <Image
              src={CarOnMountain}
              alt="Testimonial Background"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <div className="w-[90%] max-lg:w-[94%] h-[144px] max-lg:h-[204px] rounded-[6px] bg-color_main absolute bottom-10 left-1/2 transform -translate-x-1/2 px-4 py-3 flex items-start justify-evenly flex-col bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 z-20 gap-2">
              <p className="text-[14px] font-openSans">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                debitis magnam, vero animi recusandae aperiam nihil reiciendis
                dolor non maxime expedita cum itaque, alias illum repellendus
                eaque numquam. Ipsum, quas?
              </p>
              <div className="flex flex-col">
                <span className="text-[18px] font-openSans font-bold">
                  Jay Biswas
                </span>
                <span>Softwer enginer</span>
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default GetInTouchSection;
