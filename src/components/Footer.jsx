import React from "react";
import carseralogo from "../assets/carseralogo.svg";

function Footer() {
  const day = new Date();
  const year = day.getFullYear();
  return (
    <div className=" bg-purple-700">
    <div className=" py-8 text-white w-10/12 m-auto">
      <div className="md:flex items-center justify-between">
        <div className="flex justify-center">
          <img src={carseralogo} alt="" />
        </div>
        <div className="grid md:grid-cols-3 gap-4 pt-4 text-sm justify-between">
          <div className="">
            <h1 className="font-bold pb-2">Find Support</h1>
            <ul>
              <li>info@carserra.com </li>
              <li>www.carserra.com </li>
              <li>admin@carserra.com </li>
            </ul>
          </div>
          <div className="">
            <h1 className="font-bold pb-2">Find Us On</h1>
            <ul>
              <li>Facebook </li>
              <li>Twitter </li>
              <li>Instagram </li>
            </ul>
          </div>
          <div className="">
            <h1 className="font-bold pb-2">Find Specifications</h1>
            <div className="flex items-center gap-2">
            <ul>
              <li>Toyota </li>
              <li>Honda </li>
              <li>Tesla </li>
            </ul>
            <ul>
              <li>Porsche</li>
              <li>KIA </li>
              <p>Mercedes </p>
            </ul>
            <ul>
              <li>BMW</li>
              <li>Audi </li>
              <li>Nissan </li>
            </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="">
        <p className="text-lg py-4 bg-violet-500 text-center text-white">
          &copy;Kachi All Rights Reserved • Carserra •{year} {""}
        </p>
      </div>
    </div>
  );
}

export default Footer;
