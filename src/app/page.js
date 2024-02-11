import Test from "./components/Test";
import ContactUs from "./components/home/ContactUs";
import Destinations from "./components/home/Destinations";
import Hero from "./components/home/Hero";
import Services from "./components/home/Services";
import Testimonials from "./components/home/Testimonials";
import USP from "./components/home/USP";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <div className="flex justify-center css-section-bg pb-24 pt-16">
        <USP />
      </div>

      <Destinations />

      <div className="flex justify-center css-section-bg pb-24 pt-16 ">
        <Services />
      </div>
      <div className="text-center flex flex-col items-center">
        <ContactUs />
      </div>
      {/* <Testimonials/> */}
    </main>
  );
}
