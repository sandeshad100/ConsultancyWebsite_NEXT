import React from "react";
import { FaAssistiveListeningSystems } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { TfiWrite } from "react-icons/tfi";
import { FaTeamspeak } from "react-icons/fa";
const page = () => {
  return (
    <div>
      <section class="relative bg-[url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-56">
        <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
        <div className="relative p-6 px-6 py-14 md:px-12 flex items-center h-full">
          <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-white">
            Home / IELTS Prepration
          </h5>
        </div>
      </section>

      <section className="flex justify-center mt-8">
        <div className="text-left w-11/12 lg:w-4/5">
          <p class="text-3xl  css-family css-color-2 section-title font-bold">
            IELTS Overview
          </p>

          <p className="mt-3">
            The International English Language Testing System (IELTS) is a
            widely recognized English proficiency test. It was first introduced
            in 1980 and has since become one of the most popular English
            language tests worldwide. The test is designed to assess an
            individual’s ability to understand and use the English language in
            academic and general contexts.
          </p>

          <p class="text-3xl  css-family css-color-2 section-title mt-8 font-bold">
            How many types of IELTS tests are there?
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-3">
            <div>
              <p class="text-3xl  css-family css-color-2 section-title">
                1. IELTS Academic
              </p>
              <p className="mt-3">
                The IELTS Academic Test is suitable for individuals planning to
                enroll in international universities for undergraduate or
                postgraduate programs or those aiming to begin their
                professional journey in a foreign country. This test is
                specifically designed to evaluate the English language
                proficiency of candidates who intend to pursue higher education
                in an English-speaking nation.
              </p>
            </div>

            <div>
              <p class="text-3xl  css-family css-color-2 section-title">
                2. IELTS General Training
              </p>
              <p className="mt-3">
                The IELTS General Training test is suitable for individuals
                seeking to apply for educational programs below the degree
                level. Also, it can be taken for work-related purposes or other
                employment training. This test assesses the practical English
                language skills necessary for everyday communication in a social
                and professional environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center mt-8">
        <div className="w-11/12 lg:w-4/5">
          <p class="text-3xl  css-family css-color-2 section-title font-bold">
            Format of the IELTS Test
          </p>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mt-12 gap-y-6 md:gap-y-4 lg:gap-y-0">
            <div className="flex justify-center items-center flex-col">
              <div>
                <FaAssistiveListeningSystems size={60} />
                <p className="mt-3">Listening</p>
                <p>30 Mins</p>
                <p>4 Sections</p>
              </div>
            </div>
            <div className="flex justify-center items-center flex-col">
              <div>
                <IoBookSharp size={60} />
                <p className="mt-3">Reading</p>
                <p>30 Mins</p>
                <p>4 Sections</p>
              </div>
            </div>
            <div className="flex justify-center items-center flex-col">
              <div>
                <TfiWrite size={60} />
                <p className="mt-3">Writing</p>
                <p>30 Mins</p>
                <p>4 Sections</p>
              </div>
            </div>
            <div className="flex justify-center items-center flex-col">
              <div>
                <FaTeamspeak size={60} />
                <p className="mt-3">Speaking</p>
                <p>30 Mins</p>
                <p>4 Sections</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
