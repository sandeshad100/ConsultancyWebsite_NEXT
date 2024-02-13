"use client";
import React, { useState } from "react";

function MainModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (modalId) => {
    document.getElementById(modalId).style.display = "block";
    document.getElementsByTagName("body")[0].classList.add("overflow-y-hidden");
    setIsModalOpen(true);
  };

  const closeModal = (modalId) => {
    document.getElementById(modalId).style.display = "none";
    document
      .getElementsByTagName("body")[0]
      .classList.remove("overflow-y-hidden");
    setIsModalOpen(false);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 27) {
      document
        .getElementsByTagName("body")[0]
        .classList.remove("overflow-y-hidden");
      let modals = document.getElementsByClassName("modal");
      Array.prototype.slice.call(modals).forEach((i) => {
        i.style.display = "none";
      });
      setIsModalOpen(false);
    }
  };

  return (
    <>
      {/* <button
        className="bg-rose-500 text-white rounded-md px-4 py-2 hover:bg-rose-700 transition"
        onClick={() => openModal("modelConfirm")}
      >
        Click to Open modal
      </button> */}

      <button
        className="fixed top-1/2 transform -translate-y-1/2 left-0 css-bg-primary text-white font-bold px-2 py-1 rounded-sm rotate-90"
        style={{
          transform: "translateX(0px)",
          opacity: "0.7",
        }}
        onClick={() => openModal("modelConfirm")}
      >
        Register Now
      </button>

      <div
        id="modelConfirm"
        className={`fixed z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4 ${
          isModalOpen ? "" : "hidden"
        }`}
        onKeyDown={handleKeyDown}
      >
        <div className="relative top-40 mx-auto shadow-xl rounded-md bg-white max-w-md p-4">
          <div className="flex justify-end p-2">
            <button
              onClick={() => closeModal("modelConfirm")}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <form action="">
            <p className="text-center mb-3 font-bold">Register Now</p>
            <div>
              <input
                type="text"
                placeholder="Full Name"
                className="block w-full  py-3 pl-7 pr-20 bg-slate-200 font-bold text-[#8a97a0] ring-0 focus:ring-0 outline-pink-700"
              />
            </div>
            <div className="mt-6">
              <input
                type="text"
                placeholder="Email Address*"
                className="block w-full  py-3 pl-7 pr-20   bg-slate-200 font-bold text-[#8a97a0] ring-0 focus:ring-0 outline-pink-700"
              />
            </div>
            <div className="mt-6">
              <input
                type="text"
                placeholder="Mobile Number*"
                className="block w-full  py-3 pl-7 pr-20  bg-slate-200 font-bold text-[#8a97a0] ring-0 focus:ring-0 outline-pink-800"
              />
            </div>
            <div className="mt-6">
              <select
                id="country"
                name="country"
                autocomplete="country-name"
                placeholder="Country"
                class="block w-full rounded-md border-0 py-3 pl-7 pr-20 bg-slate-200 font-bold text-[#8a97a0] ring-0 focus:ring-0"
              >
                <option default disabled selected hidden>
                  Choose Country
                </option>
                <option value="">USA</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>

            <div className="mt-9 ">
              <button className="w-full rounded-sm py-3 css-bg-primary text-white">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default MainModal;
