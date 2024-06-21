import React from "react";
import Logo from "../../../public/logo/logo.jpg";

const Footer = () => {
  return (
    <>
      <footer className="flex items-center flex-col justify-center bg-[#333] pt-16 pb-9 mt-28">
        <div className="w-11/12">
          {/* footer basic links  */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="items flex flex-col">
              <p className="text-5xl text-white font-bold">
                Step<span className="css-color-primary">Study</span>
              </p>
            </div>
            <div className="items flex flex-col">
              <p className="text-white font-bold text-lg">Scholarships</p>
              <a
                href=""
                className="mt-3 text-sm text-white transition ease-in-out duration-150 font-bold hover:text-[#b45053]"
              >
                Student Visa in Uk
              </a>
              <a
                href=""
                className="mt-1 text-sm text-white transition ease-in-out duration-150 font-bold hover:text-[#b45053]"
              >
                Student Visa in Australia
              </a>
              <a
                href=""
                className="mt-1 text-sm text-white transition ease-in-out duration-150 font-bold hover:text-[#b45053]"
              >
                Student Visa in Canada
              </a>
              <a
                href=""
                className=" mt-1 text-sm text-white transition ease-in-out duration-150 font-bold hover:text-[#b45053]"
              >
                Student Visa in New Zealand
              </a>
            </div>
            <div className="items flex flex-col">
              <p className="text-white font-bold text-lg">Support</p>
              <a
                href=""
                className="mt-3 text-sm text-white transition ease-in-out duration-150 font-bold hover:text-[#b45053]"
              >
                Student Visa in Uk
              </a>
              <a
                href=""
                className="mt-1 text-sm text-white transition ease-in-out duration-150 font-bold hover:text-[#b45053]"
              >
                Student Visa in Australia
              </a>
              <a
                href=""
                className="mt-1 text-sm text-white transition ease-in-out duration-150 font-bold hover:text-[#b45053]"
              >
                Student Visa in Canada
              </a>
              <a
                href=""
                className=" mt-1 text-sm text-white transition ease-in-out duration-150 font-bold hover:text-[#b45053]"
              >
                Student Visa in New Zealand
              </a>
            </div>
            <div className="items flex flex-col">
              <p className="text-white font-bold text-lg">Resources</p>
              <a
                href=""
                className="mt-3 text-sm text-white transition ease-in-out duration-150 font-bold hover:text-[#b45053]"
              >
                Student Visa in Uk
              </a>
              <a
                href=""
                className="mt-1 text-sm text-white transition ease-in-out duration-150 font-bold hover:text-[#b45053]"
              >
                Student Visa in Australia
              </a>
              <a
                href=""
                className="mt-1 text-sm text-white transition ease-in-out duration-150 font-bold hover:text-[#b45053]"
              >
                Student Visa in Canada
              </a>
              <a
                href=""
                className=" mt-1 text-sm text-white transition ease-in-out duration-150 font-bold hover:text-[#b45053]"
              >
                Student Visa in New Zealand
              </a>
            </div>
          </div>
          {/* footer locations  */}
          {/* developer credit  */}
        </div>
      </footer>
      <div className="css-bg-primary text-white flex justify-between px-3 py-2 text-xs">
        <div>
          <a className="font-bold">Privacy Policy </a> Designed and Developer by
          <a href=""> BlueFox Pvt Ltd</a>
        </div>

        <div>
          <p>StepStudy © All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
