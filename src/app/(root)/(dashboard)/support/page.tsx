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
import { FaFilter, FaWhatsapp } from "react-icons/fa6";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

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
          <Sheet>
            <SheetTrigger className="py-1 px-2 bg-color_main font-raleway text-[14px] font-bold rounded-[6px] flex items-center justify-center gap-1 text-white">
              <MdAddBox className="text-[18px]" />
              Create Support Ticket{" "}
            </SheetTrigger>
            <SheetContent className="bg-white min-w-[464px] max-lg:min-w-[380px] max-md:min-w-[90%]">
              {" "}
              <div className="w-full flex flex-col md:flex-row min-h-[590px] max-lg:min-h-[594px] h-auto max-md:h-auto max-lg:h-auto bg-white  relative shadow-xl rounded-[6px] mt-10">
                <div className="w-full h-auto max-md:h-auto p-6 max-lg:p-4 border-2 border-color_main rounded-[4px]">
                  <div className="w-full h-auto py-2 flex gap-2 items-center justify-between">
                    <h3 className="text-[18px] max-lg:text-[14px] font-raleway font-bold text-black">
                      Help Center{" "}
                    </h3>
                    <div className="w-[64%] max-lg:w-[66%] h-[1px] border-t border-dashed border-color_main"></div>
                  </div>
                  <div className="w-full h-auto mb-4 text-start">
                    <SectionTitle
                      isTitleBodyWhite={false}
                      titleMain="Your "
                      titleBody="Car Rental Support"
                      titleDescription="Need assistance? Our support team is here to help you with your car rental needs, from booking to troubleshooting."
                      customClass={{
                        containerDiv: "max-lg:item-start",

                        titleBody: "max-lg:text-[20px] text-[26px]",
                        titleMain:
                          "max-lg:text-[20px] max-lg:text-start text-[26px] ",
                        titleDescription:
                          "max-lg:text-[14px] max-lg:p-0 max-lg:text-start max-md:text-start text-black",
                      }}
                    />
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    className="w-full h-auto space-y-4"
                  >
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="w-full md:w-1/2">
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="First Name"
                          className="w-full h-[40px] text-[16px] p-2 rounded-[4px] placeholder-gray-600 border bg-white text-black"
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
                          className="w-full h-[40px] text-[16px] p-2 rounded-[4px] placeholder-gray-600 border bg-white text-black"
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
                          className="w-full h-[40px] text-[16px] p-2 rounded-[4px] placeholder-gray-600 border bg-white text-black"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.email}
                          </p>
                        )}
                      </div>
                      <div className="w-full md:w-1/2">
                        <input
                          type="text"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Phone Number"
                          className="w-full h-[40px] text-[16px] p-2 rounded-[4px] placeholder-gray-600 border bg-white text-black"
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.phone}
                          </p>
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
                        className="w-full h-[40px] text-[16px] p-2 rounded-[4px] placeholder-gray-600 border bg-white text-black"
                      />
                      {errors.subject && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.subject}
                        </p>
                      )}
                    </div>
                    <div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message"
                        className="w-full min-h-[148px] text-[16px] p-2 rounded-[4px] bg-white text-black placeholder-gray-600 border"
                      ></textarea>
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.message}
                        </p>
                      )}
                    </div>
                    <button
                      type="submit"
                      className="w-full h-[40px] bg-color_main text-white text-[16px] rounded-[4px] font-bold"
                    >
                      Submit Ticket Requst
                    </button>
                    {successMessage && (
                      <p className="text-green-500 text-sm mt-4">
                        {successMessage}
                      </p>
                    )}
                  </form>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>{" "}
      <div className="w-full h-auto py-2  px-2 ">
        <div className="w-full h-[148px] shadow-md cursor-not-allowed rounded-[4px] flex items-center justify-center font-bold text-[18px] text-gray-600 font-raleway border border-black border-dashed">
          No Active Support Ticket
        </div>
      </div>
    </>
  );
};

export default Page;
