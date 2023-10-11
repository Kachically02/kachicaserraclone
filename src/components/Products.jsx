import React from "react";
import carlogo from "../assets/carlogo.svg";
import carseralogo from "../assets/carseralogo.svg";

function Products() {
  return (
    <div className="bg-white md:py-16 py-8">
    <div className="w-10/12 m-auto md:flex items-center justify-between">
      <div className="md:pt-10 w-[50%] pb-4">
        <img src={carlogo} alt="" />
      </div>
      <div className="border-[1px] border-purple-400 bg-gray-100 p-8 mx-20 rounded">
        <div className="text-[30px] font-extrabold flex gap-3 text-purple-700 justify items-center py-10 ">
          Why
          <span>
            {" "}
            <img
              src={carseralogo}
              alt=""
              className="w-[150px] object-contain"
            />
          </span>{" "}
          ?
        </div>
        <p className="pr-20">
          We’ve a variety of market details for cars like suzuki, toyota,
          nissan, kia, tesla, ford and honda. <br/> 
          <br/>
          You may find updated market price,
          model and complete specifications of your dream car. <br/>
          <br/>
          So you may able
          to buy it.
        </p>
        <button className="bg-purple-700 p-4 text-white my-8 rounded hover:bg-purple-900">Get Market Details</button>
      </div>
    </div>
    </div>
  );
}

export default Products;
