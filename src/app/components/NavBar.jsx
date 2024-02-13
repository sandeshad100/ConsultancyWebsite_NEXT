"use client";

import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Facebooklogo from "../../../public/logo/fblogo.png";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

import Link from "next/link";
import { Navbar } from "flowbite-react";
import Nav from "./home/Nav";

const NavBar = () => {
  return (
    <>
      <header className="px-10 pt-3 pb-5 css-bg-primary w-100 css-font-1 ">
        <div className="top_bar text-white grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="top_left_bar_info flex flex-row gap-2">
            <span>
              <a href="">info@thenext.edu.np</a>
            </span>
            <span>
              <a href="">+977-01-5970268</a>
            </span>
          </div>
          <div className="top_right_bar_info flex flex-row  justify-center lg:justify-end gap-6">
            <a href="https://web.whatsapp.com/">
              <span>
                <FaWhatsapp
                  style={{
                    backgroundColor: "green",
                    borderRadius: "50%",
                    color: "white",
                    width: "25px",
                    height: "25px",
                  }}
                />
              </span>
            </a>
            <a href="https://www.facebook.com/">
              <span>
                <CiFacebook
                  style={{
                    backgroundColor: "#316FF6",
                    borderRadius: "50%",
                    color: "white",
                    width: "25px",
                    height: "25px",
                  }}
                />
              </span>
            </a>

            <a href="">
              <span>
                <FaInstagram
                  className="instagram"
                  style={{
                    backgroundColor: "#316FF6",
                    borderRadius: "50%",
                    color: "white",
                    width: "25px",
                    height: "25px",
                  }}
                />
              </span>
            </a>
          </div>
        </div>
      </header>

      <>
        <Nav />
      </>
    </>
  );
};

export default NavBar;
