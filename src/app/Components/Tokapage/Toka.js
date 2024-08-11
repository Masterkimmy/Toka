import React from "react";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";





const Toka = () => {
  return (
    <div className="flex flex-col gap-12 py-8 bg-[#FBFAFB]">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-[#36BB91]"> OUR TEAM </h1>
        <h1 className="font-bold text-[#1A1A1A] text-[40px] max-sm:text-center">
          Meet our crypto experts
        </h1>
        <p className="text-[#646665] w-[35vw] text-center max-sm:w-[96vw] line-height:20px">
          Our company was founded in 2020. We work daily to become better and we
          are ready to share best practices.
        </p>
      </div>
      <div className="flex items-center grid grid-cols-3 gap-20 max-sm:grid max-sm:grid-cols-1">
        <div className="flex flex-col gap-3.5 items-center justify-center">
          <img
            className="w-[17vw] rounded-3xl max-sm:w-[50vw]"
            src="/tream-1.png"
            alt=""
          />
          <h1 className="font-bold text-[#131B30] text-[20px]">Mike Jones</h1>
          <h3 className="text-[#9A9C9C]">Developer</h3>
          <div className="flex gap-1  ">
            <FaFacebook className=" h-9 w-12 font-bold hover:text-[#4AC29C]" />
            <AiFillTwitterCircle className="h-9 w-12 font-bold hover:text-[#4AC29C]" />
            <FaInstagramSquare className="h-9 w-12 font-bold hover:text-[#4AC29C]" />
          </div>
        </div>
        <div className="flex flex-col gap-3.5 items-center justify-center">
          <img
            className="w-[17vw] rounded-3xl  max-sm:w-[50vw]"
            src="/team-developer.png"
            alt=""
          />
          <h1 className="font-bold text-[#131B30] text-[20px]">Max Anderson</h1>
          <h3 className="text-[#9A9C9C]">Founder and CEO</h3>
          <div className="flex gap-1  ">
            <FaFacebook className=" h-9 w-12 font-bold hover:text-[#4AC29C]" />
            <AiFillTwitterCircle className="h-9 w-12 font-bold hover:text-[#4AC29C]" />
            <FaInstagramSquare className="h-9 w-12 font-bold hover:text-[#4AC29C]" />
          </div>
        </div>
        <div className="flex flex-col gap-3.5 items-center justify-center">
          <img
            className="w-[17vw] rounded-3xl  max-sm:w-[50vw]"
            src="/team-member-06.png"
            alt=""
          />
          <h1 className="font-bold text-[#131B30] text-[20px]">Anita Gold</h1>
          <h3 className="text-[#9A9C9C]">Senior consultant</h3>
          <div className="flex gap-1  ">
            <FaFacebook className=" h-9 w-12 font-bold hover:text-[#4AC29C]" />
            <AiFillTwitterCircle className="h-9 w-12 font-bold hover:text-[#4AC29C]" />
            <FaInstagramSquare className="h-9 w-12 font-bold hover:text-[#4AC29C]" />
          </div>
        </div>
        <div className="flex flex-col gap-3.5 items-center justify-center">
          <img
            className="w-[17vw] rounded-3xl  max-sm:w-[50vw]"
            src="/team-member-08.png"
            alt=""
          />
          <h1 className="font-bold text-[#131B30] text-[20px]">Peter Green</h1>
          <h3 className="text-[#9A9C9C]">Developer</h3>
          <div className="flex gap-1  ">
            <FaFacebook className=" h-9 w-12 font-bold hover:text-[#4AC29C]" />
            <AiFillTwitterCircle className="h-9 w-12 font-bold hover:text-[#4AC29C]" />
            <FaInstagramSquare className="h-9 w-12 font-bold hover:text-[#4AC29C]" />
          </div>
        </div>
        <div className="flex flex-col gap-3.5 items-center justify-center">
          <img
            className="w-[17vw] rounded-3xl  max-sm:w-[50vw]"
            src="/team-member-07.png"
            alt=""
          />
          <h1 className="font-bold text-[#131B30] text-[20px]">Kate Watson</h1>
          <h3 className="text-[#9A9C9C]"> Marketing manager</h3>
          <div className="flex gap-1  ">
            <FaFacebook className=" h-9 w-12 font-bold hover:text-[#4AC29C]" />
            <AiFillTwitterCircle className="h-9 w-12 font-bold hover:text-[#4AC29C]" />
            <FaInstagramSquare className="h-9 w-12 font-bold hover:text-[#4AC29C]" />
          </div>
        </div>
        <div className="flex flex-col gap-3.5 items-center justify-center">
          <img
            className="w-[17vw] rounded-3xl  max-sm:w-[50vw]"
            src="/team-member-09.png"
            alt=""
          />
          <h1 className="font-bold text-[#131B30] text-[20px]">Jacob Adams</h1>
          <h3 className="text-[#9A9C9C]">Senior developer</h3>
          <div className="flex gap-1  ">
            <FaFacebook className=" h-9 w-12 font-bold hover:text-[#4AC29C]" />
            <AiFillTwitterCircle className="h-9 w-12 font-bold hover:text-[#4AC29C]" />
            <FaInstagramSquare className="h-9 w-12 font-bold hover:text-[#4AC29C]" />
          </div>
        </div>
        <div className="flex flex-col gap-3.5 items-center justify-center">
          <img
            className="w-[17vw] rounded-3xl  max-sm:w-[50vw]"
            src="/team-member-04.png"
            alt=""
          />
          <h1 className="font-bold text-[#131B30] text-[20px]">Rita Griffin</h1>
          <h3 className="text-[#9A9C9C]">Accountant</h3>
          <div className="flex gap-1  ">
            <FaFacebook className=" h-9 w-12 font-bold hover:text-[#4AC29C]" />
            <AiFillTwitterCircle className="h-9 w-12 font-bold hover:text-[#4AC29C]" />
            <FaInstagramSquare className="h-9 w-12 font-bold hover:text-[#4AC29C]" />
          </div>
        </div>
        <div className="flex flex-col gap-3.5 items-center justify-center">
          <img
            className="w-[17vw] rounded-3xl  max-sm:w-[50vw]"
            src="/team-member-05.png"
            alt=""
          />
          <h1 className="font-bold text-[#131B30] text-[20px]">Paul Jin</h1>
          <h3 className="text-[#9A9C9C]"> Creative manager</h3>
          <div className="flex gap-1  ">
            <FaFacebook className=" h-9 w-12 font-bold hover:text-[#4AC29C]" />
            <AiFillTwitterCircle className="h-9 w-12 font-bold hover:text-[#4AC29C]" />
            <FaInstagramSquare className="h-9 w-12 font-bold hover:text-[#4AC29C]" />
          </div>
        </div>
        <div className="bg-[#F9F3FB] flex flex-col items-center h-[50vh] w-[25vw]  justify-center rounded-3xl max-sm:w-full max-sm:h-[40vh]">
          <div className="flex flex-col gap-4">
            <h1 className="text-[#1A1A1A] font-bold text-[25px]">
              Want to join our team?
            </h1>
            <div className="flex items-center gap-2 justify-center">
              <button className="text-orange-600 font-bold hover:text-[#3D3D3D]">
                Apply now
              </button>
              <FaLongArrowAltRight className="text-orange-600 hover:text-[#3D3D3D]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toka;
