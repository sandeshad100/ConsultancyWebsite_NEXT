import React from "react";

function Testimonial({ name, imageSrc, quote }) {
  return (
    <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
      <div className="w-full flex mb-4 items-center">
        <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
          <img src={imageSrc} alt={name} />
        </div>
        <div className="flex-grow pl-3">
          <h6 className="font-bold text-sm uppercase text-gray-600">{name}</h6>
        </div>
      </div>
      <div className="w-full">
        <p className="text-sm leading-tight">
          <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
            "
          </span>
          {quote}
          <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
            "
          </span>
        </p>
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <div className="min-w-screen min-h-screen bg-gray-50 flex items-center justify-center py-5">
      <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto">
            <h1 className="text-2xl md:text-7xl font-bold mb-5 text-gray-600">
              What people <br />
              are saying.
            </h1>
            <h3 className="text-xl mb-5 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className="text-center mb-10">
              <span className="inline-block w-1 h-1 rounded-full css-bg-primary"></span>
              <span className="inline-block w-3 h-1 rounded-full css-bg-primary"></span>
              <span className="inline-block w-40 h-1 rounded-full css-bg-primary"></span>
              <span className="inline-block w-3 h-1 rounded-full css-bg-primary"></span>
              <span className="inline-block w-1 h-1 rounded-full css-bg-primary"></span>
            </div>
          </div>
          {/* <div className="-mx-3 md:flex items-start gap-3"> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {/* Testimonial components go here */}
            <Testimonial
              name="Rita Thapa"
              imageSrc="https://i.pravatar.cc/100?img=1"
              quote="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti."
            />

            <Testimonial
              name="Rita Thapa"
              imageSrc="https://i.pravatar.cc/100?img=1"
              quote="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti."
            />
            <Testimonial
              name="Balen Shah"
              imageSrc="https://i.pravatar.cc/100?img=2"
              quote="Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Dolore quod necessitatibus, labore sapiente, est, dignissimos ullam error ipsam sint quam tempora vel."
            />
            <Testimonial
              name="Rita Thapa"
              imageSrc="https://i.pravatar.cc/100?img=1"
              quote="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti."
            />
            <Testimonial
              name="Balen Shah"
              imageSrc="https://i.pravatar.cc/100?img=2"
              quote="Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Dolore quod necessitatibus, labore sapiente, est, dignissimos ullam error ipsam sint quam tempora vel."
            />

            <Testimonial
              name="Balen Shah"
              imageSrc="https://i.pravatar.cc/100?img=2"
              quote="Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Dolore quod necessitatibus, labore sapiente, est, dignissimos ullam error ipsam sint quam tempora vel."
            />
            {/* More testimonials can be added similarly */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
