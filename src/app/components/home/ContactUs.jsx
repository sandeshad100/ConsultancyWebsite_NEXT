import React from "react";

const ContactUs = () => {
  return (
    <section className="mt-12 css-color-2 w-4/5">
      <div className="text-center">
        <p class="text-4xl  css-family section-title">GET IN TOUCH</p>
        <p className="text-md   mt-4 section-subtitle">
          We value your inquiries, send us a message and we'll get back to you
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 mt-9">
        <div className="item">
          <div className="inset-0 m-0 h-full w-full overflow-hidden rounded-lg bg-transparent bg-[url('https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?q=80&w=1633&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none"></div>
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
                  Yes, I would like to receive information on study abroad news
                  and events from TheNext.
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
    </section>
  );
};

export default ContactUs;
