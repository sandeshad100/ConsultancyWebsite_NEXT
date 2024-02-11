import React from "react";

import { FaChalkboardTeacher } from "react-icons/fa";
import { SiGoogledocs } from "react-icons/si";
import { PiFoldersFill } from "react-icons/pi";
import { FaPeopleArrows } from "react-icons/fa";
import { AiOutlineDollar } from "react-icons/ai";
import { FaWpforms } from "react-icons/fa";

const Services = () => {
  return (
    <section className="mt-12  css-color-2">
      <div className="text-center">
        <p class="text-4xl css-family section-title">STUDENT SERVICES</p>
        <p className="text-md mt-4 section-subtitle">
          Take Advantage of Our Top-Notch Student Services from Highly Qualified
          Education Counselors and Visa Expert Teams
        </p>
      </div>
      <div class="mt-14 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-3.5  md:gap-y-16 ">
        <div className="flex justify-center items-center flex-col">
          <FaChalkboardTeacher size={70} color="#9e0105" />
          <span className="text-1xl">Student Screening</span>
        </div>
        <div className="flex justify-center items-center flex-col ">
          <SiGoogledocs size={70} color="#9e0105" />
          <span className="text-1xl">University Application Assistance</span>
        </div>
        <div className="flex justify-center items-center flex-col ">
          <PiFoldersFill size={70} color="#9e0105" />
          <span className="text-1xl">Documentation Guidance</span>
        </div>

        <div className="flex justify-center items-center flex-col ">
          <FaPeopleArrows size={70} color="#9e0105" />
          <span className="text-1xl">Interview Assistance</span>
        </div>

        <div className="flex justify-center items-center flex-col">
          <AiOutlineDollar size={70} color="#9e0105" />
          <span className="text-1xl">Scholarship Assistance</span>
        </div>

        <div className="flex justify-center items-center flex-col ">
          <FaWpforms size={70} color="#9e0105" />
          <span className="text-1xl">Student Visa Declaration Form</span>
        </div>
      </div>
    </section>
  );
};

export default Services;
