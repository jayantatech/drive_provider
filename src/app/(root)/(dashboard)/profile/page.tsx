"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { MdOutlineEdit } from "react-icons/md";
import { GiSave } from "react-icons/gi";
import { User_Profile_Image } from "@/contants/img/others/img";

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  type UseType = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    gender: string;
    dob: {
      day: number;
      month: number;
      year: number;
    };
    profileImage: StaticImageData | string;
  };
  const [user, setUser] = useState<UseType>({
    firstName: "Arthur",
    lastName: "Nancy",
    email: "bradley.ortiz@gmail.com",
    phone: "477-046-1827",
    address: "116 Jaskolski Stravenue Suite 883",
    city: "Colombia",
    gender: "Male",
    dob: {
      day: 31,
      month: 9,
      year: 1990,
    },
    profileImage: User_Profile_Image,
  });
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name.includes("dob.")) {
      const [_, key] = name.split(".");
      setUser((prevUser) => ({
        ...prevUser,
        dob: { ...prevUser.dob, [key]: value },
      }));
    } else {
      setUser({ ...user, [name]: value });
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        setUser((prevUser) => ({
          ...prevUser,
          profileImage: reader.result as string,
        }));
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const validateAge = () => {
    const today = new Date();
    const birthDate = new Date(user.dob.year, user.dob.month - 1, user.dob.day);
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      return age - 1;
    }
    return age;
  };

  const toggleEdit = () => {
    if (isEditing) {
      const age = validateAge();
      if (age < 20) {
        setError("User must be at least 20 years old.");
        return;
      } else {
        setError("");
      }
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full mx-auto font-raleway">
      <div className="w-full h-[40px] mb-2 flex items-center justify-between">
        <h3 className="text-[26px] font-raleway font-bold capitalize">
          My Profile
        </h3>{" "}
        <div className="w-auto h-full flex items-center justify-end ">
          <button
            className="py-1 px-2 bg-color_main font-raleway text-[14px] font-bold rounded-[6px] flex items-center justify-center gap-1 text-white"
            onClick={toggleEdit}
          >
            {!isEditing ? (
              <MdOutlineEdit className="text-[18px]" />
            ) : (
              <GiSave className="text-[18px]" />
            )}{" "}
            {isEditing ? "Save" : "Edit"} profile
          </button>
        </div>
      </div>
      {error && <p className="text-red-600">{error}</p>}
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 flex flex-col items-start mb-8">
          <Image
            src={user.profileImage}
            alt="Profile Avatar"
            width={128}
            height={128}
            className="rounded-[6px] object-cover bg-cyan-500"
          />
          {isEditing && (
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="mt-4"
            />
          )}
        </div>
        <div>
          <label className="block text-gray-700 font-bold text-[14px]">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-full px-3 py-2 border border-gray-300 rounded-[6px] focus:outline-none text-[14px] font-semibold "
          />
        </div>
        <div>
          <label className="block text-gray-700 font-bold text-[14px]">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-full px-3 py-2 border border-gray-300 rounded-[6px] focus:outline-none text-[14px] font-semibold"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-bold text-[14px]">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-full px-3 py-2 border border-gray-300 rounded-[6px] focus:outline-none text-[14px] font-semibold"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-bold text-[14px]">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-full px-3 py-2 border border-gray-300 rounded-[6px] focus:outline-none text-[14px] font-semibold"
          />
        </div>
        <div className="col-span-2">
          <label className="block text-gray-700 font-bold text-[14px]">
            Address
          </label>
          <input
            type="text"
            name="address"
            value={user.address}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-full px-3 py-2 border border-gray-300 rounded-[6px] focus:outline-none text-[14px] font-semibold"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-bold text-[14px]">
            City
          </label>
          <input
            type="text"
            name="city"
            value={user.city}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-full px-3 py-2 border border-gray-300 rounded-[6px] focus:outline-none text-[14px] font-semibold"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-bold text-[14px]">
            Gender
          </label>
          <select
            name="gender"
            value={user.gender}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-full px-3 py-2 border border-gray-300 rounded-[6px] focus:outline-none text-[14px] font-semibold"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="col-span-2">
          <label className="block text-gray-700 font-bold text-[14px]">
            Date of Birth
          </label>
          <div className="grid grid-cols-3 gap-2">
            <input
              type="number"
              name="dob.day"
              value={user.dob.day}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-full px-3 py-2 border border-gray-300 rounded-[6px] focus:outline-none text-[14px] font-semibold"
              placeholder="Day"
              min="1"
              max="31"
            />
            <input
              type="number"
              name="dob.month"
              value={user.dob.month}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-full px-3 py-2 border border-gray-300 rounded-[6px] focus:outline-none text-[14px] font-semibold"
              placeholder="Month"
              min="1"
              max="12"
            />
            <input
              type="number"
              name="dob.year"
              value={user.dob.year}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-full px-3 py-2 border border-gray-300 rounded-[6px] focus:outline-none text-[14px] font-semibold"
              placeholder="Year"
              min="1900"
              max={new Date().getFullYear()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
