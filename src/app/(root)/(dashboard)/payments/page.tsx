"use client";
import React, { useState } from "react";
import {
  FaCcVisa,
  FaCcMastercard,
  FaPlusCircle,
  FaDownload,
  FaTrash,
  FaShareSquare,
} from "react-icons/fa";
import { FcSimCardChip } from "react-icons/fc";
import { IoCloseSharp } from "react-icons/io5";
import { FaRegCreditCard } from "react-icons/fa6";

const PaymentPage = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [cards, setCards] = useState([
    { type: "Visa", number: "5342", expiry: "12/24" },
    { type: "Mastercard", number: "4291", expiry: "12/24" },
  ]);

  const deleteCard = (cardNumber: string) => {
    setCards(cards.filter((card) => card.number !== cardNumber));
  };

  return (
    <div className="relative">
      <section className="flex min-h-screen flex-1 flex-col pt-2 px-4 pb-4">
        <h1 className="text-2xl font-bold mb-4">Payment Methods</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((card) => (
            <div
              key={card.number}
              className="relative p-6 bg-black text-white rounded-[6px] shadow-lg flex flex-col justify-between w-[260px] h-[160px] hover:scale-[.98] transition-all duration-150"
              onMouseEnter={() => setHoveredCard(card.number)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`absolute w-[22px] h-[22px] bg-color_main text-white right-1 top-1 rounded-[6px]  items-center justify-self-center cursor-pointer ${
                  hoveredCard === card.number ? "flex" : "hidden"
                }`}
              >
                <IoCloseSharp className="text-[22px] font-bold" />
              </div>

              <div className="absolute top-2 right-2 hidden group-hover:block">
                <FaTrash
                  size={20}
                  className="text-red-500 cursor-pointer"
                  onClick={() => deleteCard(card.number)}
                />
              </div>
              <div className="flex justify-between items-center">
                <FcSimCardChip className="text-[34px]" />
                {card.type === "Visa" ? (
                  <FaCcVisa size={30} />
                ) : (
                  <FaCcMastercard size={30} />
                )}
              </div>
              <div className="mt-6">
                <p className="text-lg font-semibold tracking-widest">
                  **** **** {card.number}
                </p>
                <p className="text-[14px] mt-2">Exp. {card.expiry}</p>
              </div>
            </div>
          ))}
          <div className="p-4 bg-transparent border-2 border-color_main rounded-[6px] shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-100 transition duration-150 w-[260px] h-[160px] hover:scale-[.98]">
            <FaPlusCircle size={26} className="text-color_main" />
            <p className="ml-2 text-color_main font-semibold">Add New Card</p>
          </div>
        </div>
        <h1 className="text-2xl font-bold mt-8 mb-4">Payment History</h1>
        <div className="w-full h-[44px] bg-[#F5F5F5] flex px-2 rounded-[6px]">
          <div className="w-[25%] h-full bg-fuchsisdfa-100 flex items-center justify-start">
            <span className="text-[14px] font-semibold font-raleway text-slate-700">
              Invoice
            </span>
          </div>
          <div className="w-[15%] h-full flex items-center justify-start">
            <span className="text-[14px] font-semibold font-raleway text-slate-700">
              Date
            </span>
          </div>
          <div className="w-[15%] h-full flex items-center justify-start">
            <span className="text-[14px] font-semibold font-raleway text-slate-700">
              Amout
            </span>
          </div>
          <div className="w-[15%] h-full flex items-center justify-start">
            <span className="text-[14px] font-semibold font-raleway text-slate-700">
              Pay Method
            </span>
          </div>
          <div className="w-[15%] h-full flex items-center justify-start">
            <span className="text-[14px] font-semibold font-raleway text-slate-700">
              Status
            </span>
          </div>
          <div className="w-[15%] h-full flex items-center justify-start">
            <span className="text-[14px] font-semibold font-raleway text-slate-700">
              Info
            </span>
          </div>
        </div>
        <div className="">
          {[...Array(2)].map((_, index) => (
            <div className="w-full h-[44px] bg-white rounded-[6px] shadow-md my-2 flex px-2 mb">
              <div className="w-[25%] h-full flex items-center justify-start cursor-pointer">
                <span className="text-[15px] font-openSans text-color_main font-bold">
                  Invoice A/09
                </span>
              </div>
              <div className="w-[15%] h-full flex items-center justify-start">
                <span className="text-[15px] font-semibold font-openSans text-slate-700">
                  20/10/2024
                </span>
              </div>
              <div className="w-[15%] h-full flex items-center justify-start">
                <span className="text-[15px] font-semibold font-openSans text-slate-700">
                  <p className="font-semibold">$143.00</p>
                </span>
              </div>
              <div className="w-[15%] h-full flex items-center justify-start gap-1">
                <FaRegCreditCard className="text-[18px]" />
                <span className="text-[15px] font-semibold font-openSans text-slate-700">
                  **** 1448
                </span>
              </div>
              <div className="w-[15%] h-full flex items-center justify-start">
                <span className="text-[15px] font-semibold font-openSans text-white bg-green-500 px-2 py-[1px] rounded-[6px]">
                  Paid
                </span>
              </div>
              <div className="w-[15%] h-full flex items-center justify-start">
                <div className="flex items-center space-x-4">
                  <FaDownload className="text-[16px] text-gray-600 cursor-pointer" />
                  <FaShareSquare className="text-[16px] text-gray-600 cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PaymentPage;
