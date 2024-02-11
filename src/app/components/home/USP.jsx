import React from "react";
import { GiProgression } from "react-icons/gi";
import { HiOutlineTrophy } from "react-icons/hi2";
import { PiCertificate } from "react-icons/pi";
import { RiTeamLine } from "react-icons/ri";

const USP = () => {
  return (
    <section className="mt-12 w-11/12">
      <div className="text-center">
        <p class="css-text-primary text-white text-5xl  css-family section-title">
          Welcome To The RedPoint
        </p>
        <p className="text-3xl css-family  css-color-1 mt-4 section-subtitle">
          The Leading Education Consultancy in Nepal
        </p>
        <div className="flex justify-center">
          <p className="mt-8 w-5/6">
            The Next Education Consultancy has a long-standing reputation for
            being one of the best educational consultancy in Nepal for studying
            abroad. Our head office is located at Dillibazar, Kathmandu
            including branches at Parsa, Birtamode, Pokhara, Nawalparasi,
            Chitwan, Butwal in Nepal. And we have a support office in Sydney.
          </p>
        </div>
      </div>
      <div class="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-3.5  md:gap-0">
        <div className="flex justify-center items-center flex-col ">
          <GiProgression size={70} color="#9e0105" />
          <span className="text-1xl">High Visa Success Rate</span>
        </div>
        <div className="flex justify-center items-center flex-col ">
          <HiOutlineTrophy size={70} color="#9e0105" />
          <span className="text-1xl">20 Years of Experience</span>
        </div>
        <div className="flex justify-center items-center flex-col ">
          <PiCertificate size={70} color="#9e0105" />
          <span className="text-1xl">Certified Career Counselors</span>
        </div>
        <div className="flex justify-center items-center flex-col ">
          <RiTeamLine size={70} color="#9e0105" />
          <span className="text-1xl">Visa Expert Team</span>
        </div>
      </div>
    </section>
  );
};

export default USP;
