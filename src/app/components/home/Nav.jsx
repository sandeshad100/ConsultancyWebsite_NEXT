import React, { useState } from "react";
import Logo from "../../../../public/logo/logo.jpg";
import Head from "next/head";
import Link from "next/link";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-white border-gray-200 dark:white border-b css-font-1">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <Link
            href="/"
            className="flex items-center space-x-2 rtl:space-x-reverse"
          >
            <img
              src="https://cdn.dribbble.com/userupload/5834280/file/original-853ec43de02b5cc8663df5b26afef2e7.jpg?resize=400x300&vertical=center"
              className="h-20"
              alt="RedPoint"
            />
          </Link>
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
                <Link
                  href="/"
                  class="block py-2 px-3  css-color-1 rounded md:bg-transparent  md:p-0 "
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/user/prepration"
                  class="block py-2 px-3   rounded md:bg-transparent  md:p-0"
                  aria-current="page"
                >
                  IELTS
                </Link>
              </li>
              <li>
                <Link
                  href="/user/universities"
                  class="block py-2 px-3 rounded md:bg-transparent  md:p-0"
                  aria-current="page"
                >
                  Universities
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  class="block  px-3 rounded md:bg-transparent  md:p-0"
                  aria-current="page"
                >
                  <div class="group relative cursor-pointer  w-fit">
                    <div class="flex items-center justify-between bg-white">
                      <a
                        class="menu-hover  text-base font-medium text-black lg:mx-4"
                        onClick=""
                      >
                        {" "}
                        Services{" "}
                      </a>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="h-3 w-3"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </span>
                    </div>
                    <div
                      class="invisible absolute z-50 flex w-full flex-col bg-gray-100 px-4 py-1 text-gray-800 shadow-xl group-hover:visible"
                      onClick=""
                    >
                      <Link
                        href=""
                        class=" block border-b border-gray-100 text-xs text-gray-500 hover:text-black md:mx-2"
                      >
                        Study in Australia
                      </Link>

                      <Link
                        href=""
                        class="my-2 block border-b border-gray-100 text-xs text-gray-500 hover:text-black md:mx-2"
                      >
                        Study in New Zealand
                      </Link>
                      <Link
                        href=""
                        class="my-2 block border-b border-gray-100 text-xs text-gray-500 hover:text-black md:mx-2"
                      >
                        Study in Canada{" "}
                      </Link>
                      <Link
                        href=""
                        class="my-2 block border-b border-gray-100 text-xs text-gray-500 hover:text-black md:mx-2"
                      >
                        Study In UK{" "}
                      </Link>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href="/user/blogs"
                  class="block py-2 px-3   rounded md:bg-transparent  md:p-0 "
                  aria-current="page"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/user/about"
                  class="block py-2 px-3   rounded md:bg-transparent  md:p-0"
                  aria-current="page"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/user/contactus"
                  class="block py-2 px-3   rounded md:bg-transparent  md:p-0"
                  aria-current="page"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
