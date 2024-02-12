import React from "react";

const page = () => {
  return (
    <div>
      <div class="relative bg-[url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-56">
        <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
        <div className="relative p-6 px-6 py-14 md:px-12 flex items-center h-full">
          <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-white">
            Home / Contact Us
          </h5>
        </div>
      </div>

      <div className="flex justify-center">
        <div className=" w-11/12 lg:w-4/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 mt-9">
            <div className="item">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1828901.7378328787!2d86.00556405889316!3d26.453352971920776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef6d74c533b773%3A0x9feb33f6bd3009fd!2sBlue%20Fox%20Pvt%20Ltd!5e0!3m2!1sen!2snp!4v1707732951979!5m2!1sen!2snp"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
            <div className="item  px-4 lg:px-10 py-6 lg:py-8 shadow-lg">
              <form action="">
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
                <div className="mt-6 flex gap">
                  <div>
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      class="h-4 w-4 rounded font-bold text-[#8a97a0] ring-0 focus:ring-0"
                    />
                  </div>
                  <div>
                    <label
                      for="comments"
                      class="font-medium text-gray-900 text-left text-sm"
                    >
                      Yes, I would like to receive information on study abroad
                      news and events from TheNext.
                    </label>
                  </div>
                </div>
                <div className="mt-9 ">
                  <button className="w-full rounded-sm py-3 css-bg-primary text-white">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
