"use client";

import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./styles.css";

const carousel = (slider) => {
  const z = 300;
  function rotate() {
    const deg = 360 * slider.track.details.progress;
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length;
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
    });
    rotate();
  });
  slider.on("detailsChanged", rotate);
};

export default function Testimonials() {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel]
  );

  return (
    <div className="">
      <div className="testimonials mt-28">
        <div className="text-center css-color-2">
          <p class="text-4xl  css-family section-title">Client Testinmonials</p>
          <p className="text-md   mt-4 section-subtitle">
            We value your inquiries, send us a message and we'll get back to you
          </p>
        </div>

        <div className="wrTestimonialser border flex justify-center mt-10">
          <div className="scene border">
            <div className="carousel keen-slider" ref={sliderRef}>
              <div className="carousel__cell number-slide1 border flex flex-col">
                <p className="text-sm text-center">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Veritatis cum facilis ipsum inventore optio, accusantium
                  pariatur expedita natus? Iure, incidunt?
                </p>
                <img
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                  className="w-9 h-9 rounded-full mt-4 object-cover"
                />
                <p className="text-sm text-center mt-2">Sagun Basnet</p>
              </div>
              <div className="carousel__cell number-slide2 border">2</div>
              <div className="carousel__cell number-slide3 border">3</div>
              <div className="carousel__cell number-slide4 border">4</div>
              <div className="carousel__cell number-slide5 border">5</div>
              <div className="carousel__cell number-slide6 border">6</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// import React from "react";

// const Testimonials = () => {
//   return <div>Testimonials</div>;
// };

// export default Testimonials;
