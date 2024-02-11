import React, { useState } from "react";
import Logo from "../../../../public/logo/logo.jpg";
import Head from "next/head";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-white border-gray-200 dark:white border-b css-font-1">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <a
            href=""
            className="flex items-center space-x-2 rtl:space-x-reverse"
          >
            <img
              src="https://cdn.dribbble.com/userupload/5834280/file/original-853ec43de02b5cc8663df5b26afef2e7.jpg?resize=400x300&vertical=center"
              className="h-20"
              alt="RedPoint"
            />
          </a>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`w-full md:block md:w-auto ${
              isMenuOpen ? "" : "hidden"
            }`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:border-gray-700 ">
              {/* Menu items go here */}
              <li>
                <a
                  href="#"
                  class="block py-2 px-3  css-color-1 rounded md:bg-transparent  md:p-0 "
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3   rounded md:bg-transparent  md:p-0"
                  aria-current="page"
                >
                  Test Prepration
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 rounded md:bg-transparent  md:p-0"
                  aria-current="page"
                >
                  Study Abroad
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3   rounded md:bg-transparent  md:p-0 "
                  aria-current="page"
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3   rounded md:bg-transparent  md:p-0"
                  aria-current="page"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3   rounded md:bg-transparent  md:p-0"
                  aria-current="page"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
