import React from "react";
import carserapng from "../assets/CARSERRA.png";
import { GoSearch } from "react-icons/go";

function Community() {
  return (
    <div className="bg-gray-100 w-10/12 m-auto md:py-16 py-8 border-[1px] border-purple-400">
      <div className="w-[85%] m-auto">
        <p className="text-purple-700 font-bold text-3xl pb-8">
          Finding a dream car is not that easy, but we made it easy for you in
          just one click you may able to get market details.
        </p>
        <div className="w-40 h-10 m-auto object-cover">
          <img src={carserapng} alt="" />
        </div>
        <form className="py-8">
          <div className="flex items-center">
            <input
              type="search"
              className="w-full text-sm p-4 bg-gray-50 outline-none"
              placeholder="Find your dream car here......"
            ></input>
            <button className="bg-purple-400 w-15 h-15 p-2">
              <GoSearch className="search-icon" size={30} />
            </button>
          </div>
        </form>

        <div className="border p-4 ">
          <h1 className="font-bold pb-2">Recent Searches :</h1>
          <ul className="md:flex md:gap-6">
            <li>Tesla X</li>
            <li>Juke</li>
            <li>Fortunate</li>
            <li>Thundra</li>
            <li>Elentra</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Community;
