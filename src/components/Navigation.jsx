import React, { useState } from "react";
import carseralogo from "../assets/carseralogo.svg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navigation() {
  const [open, setOpen] = useState(false);

  const switches = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div>
      <div className="bg-gray-100 flex items-center justify-between p-8">
        <p className="Desktop font-bold">News</p>
        <label for="cars" className="Desktop text-lg font-bold">
          Find a car:
          <select id="cars" name="cars">
            <option value="Toyota">Toyota</option>
            <option value="mercedes">Mercedes</option>
            <option value="tesla">Tesla</option>
            <option value="audi">Audi</option>
            <option value="kia">Kia</option>
            <option value="bmw">BMW</option>
            <option value="ferrari">Ferrari</option>
          </select>
        </label>
        <img src={carseralogo} alt="" />
        <p className="Desktop font-bold">About Us</p>
        <p className="Desktop font-bold">Contact</p>
      </div>

      {/*Mobile Screen*/}
      <div className="absolute top-8 right-4 md:hidden" onClick={ ()=>{}}>
        {open ? (
          <AiOutlineClose size={25} onClick={() => setOpen(false)} />
        ) : (
          <AiOutlineMenu size={25} onClick={() => setOpen(true)} />
        )}
      </div>
      {open && (
        <div className="md:hidden bg-purple-700 p-10 ">
          <ul>
            <li className="bg-purple-500 p-4 gap-10 rounded my-10 text-white font-bold hover:bg-purple-900">
              News
            </li>
            <li className="bg-purple-500 p-4 gap-10 rounded my-10 text-white font-bold hover:bg-purple-900">
              Find a car{" "}
            </li>
            <li className="bg-purple-500 p-4 gap-10 rounded my-10 text-white font-bold hover:bg-purple-900">
              About Us
            </li>
            <li className="bg-purple-500 p-4 gap-10 rounded my-10 text-white font-bold hover:bg-purple-900">
              Contact
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navigation;
