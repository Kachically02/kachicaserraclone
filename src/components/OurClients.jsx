import React from "react";
import logo1 from "../assets/logo1.svg";
import logo2 from "../assets/logo2.svg";
import logo3 from "../assets/logo3.svg";
import logo4 from "../assets/logo4.svg";
import logo5 from "../assets/logo5.svg";
import logo6 from "../assets/logo6.svg";
import logo7 from "../assets/logo7.svg";
import logo8 from "../assets/logo8.svg";

function OurClients() {
  return (
    <div className="bg-white py-8">
      <div className="w-10/12 m-auto">
        <div className="text-purple-700 mx-20  text-2xl  font-bold">
          <h1>Featured Market :</h1>
        </div>
        <div className="bg-gray-50 border-[1px] border-purple-300">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 items-center justify-between">
            <div className="border w-[80px] h-[80px] bg-white m-8 border-purple-300">
              <img src={logo1} alt="" />
            </div>
            <div className="border w-[80px] h-[80px] bg-white m-8 border-purple-300">
              <img src={logo2} alt="" />
            </div>
            <div className="border w-[80px] h-[80px] bg-white m-8 border-purple-300">
              <img src={logo3} alt="" />
            </div>
            <div className="border w-[80px] h-[80px] bg-white m-8 border-purple-300">
              <img src={logo4} alt="" />
            </div>
            <div className="border w-[80px] h-[80px] bg-white m-8 border-purple-300">
              <img src={logo5} alt="" />
            </div>
            <div className="border w-[80px] h-[80px] bg-white m-8 border-purple-300">
              <img src={logo6} alt="" />
            </div>
            <div className="border w-[80px] h-[80px] bg-white m-8 border-purple-300">
              <img src={logo7} alt="" />
            </div>
            <div className="border w-[80px] h-[80px] bg-white m-8 border-purple-300">
              <img src={logo8} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurClients;
