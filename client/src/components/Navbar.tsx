import React, { useRef } from "react";
import logo from "../assets/logo2.png";
import Enquiry from "./Enquiry";

const Navbar = () => {
  const formRef = useRef<HTMLDivElement | null>(null);

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full ">
      <div className="border-b border-black upper">
        <div className="flex justify-end mr-72 gap-2 pb-2 ">
          <div className="flex items-center justify-center gap-2 rounded-b-3xl bg-[#4e4e4e] text-white px-5 py-3">
            <i className="fa-solid fa-phone text-sm  text-green-400 "></i>
            <span className="text-sm">
              {" "}
              <a href="tel:+2349046827127">+234 9046827127</a>
            </span>
            <span> | </span>
            <i className="fa-solid fa-envelope text-green-400 text-sm "></i>
            <span className="text-sm">
              {" "}
              <a href="mailto:skspowertech@gmail.com">skspowertech@gmail.com</a>
            </span>
          </div>
        </div>
      </div>
      <div className="middle p-2  border-b border-black flex justify-around">
        <div className="logo">
          <img
            className="w-3xs h-28 hover:scale-110 hover:opacity-80 duration-300 transition-all "
            src={logo}
            alt="logo"
          />
        </div>
        <div className="flex gap-2 items-center ">
          <div className="px-4 text-sm font-semibold">Contact Us</div>
          <div className="px-4 text-sm font-semibold">
            Media <i className="fa-solid fa-chevron-down"></i>
          </div>
          <div className="px-4 text-sm font-semibold">
            Products <i className="fa-solid fa-chevron-down"></i>
          </div>
          <div
            className=" h-12 w-3xs flex items-center justify-center rounded-lg px-4 bg-green-600 hover:bg-green-700 text-sm  text-white"
            onClick={scrollToForm}
          >
            <a href="/enquiry">BUSINESS ENQUIRY</a>
          </div>
        </div>
      </div>
      <div className=" lower flex justify-center items-center gap-2 border-b border-black h-14 bg-[#494949] text-white">
        <div className="px-4 text-sm font-semibold">Home</div>
      </div>
      <Enquiry formRef={formRef} />
    </div>
  );
};

export default Navbar;
