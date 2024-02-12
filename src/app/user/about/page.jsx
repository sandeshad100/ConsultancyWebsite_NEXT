import Image from "next/image";
import React from "react";
import TeamImg from "../../../../public/team.jpg";
import Team from "./components/Team";

const page = () => {
  return (
    <div>
      <div class="relative bg-[url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-56">
        <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
        <div className="relative p-6 px-6 py-14 md:px-12 flex items-center h-full">
          <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-white">
            Home / About Us
          </h5>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="mt-20 w-11/12">
          <div className="lg:grid lg:grid-cols-2 gap-5">
            <Image src={TeamImg} width={500} height={500} />

            <div className="mt-5 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptate cupiditate atque consectetur quis distinctio ad at?
              Doloribus quos odio consequatur autem dignissimos debitis? Magni
              iure aliquid deserunt magnam, aut quidem nesciunt, qui fugit
              perferendis praesentium maiores consequuntur dolore repellendus
              accusantium molestias facilis voluptatem aperiam libero ullam rem
              enim. Reiciendis quis doloremque ad aliquam magnam, similique
              iusto commodi repudiandae reprehenderit. Ut explicabo, tempore
              adipisci doloremque repudiandae voluptatibus temporibus at maxime
              nisi sapiente maiores esse provident et quasi corporis eos nobis,
              reiciendis nemo laudantium! Aut sunt velit repellat officiis
              inventore alias rerum, hic labore optio molestias dolore adipisci
              veritatis voluptatibus ullam voluptates!
            </div>
          </div>

          <div className="lg:grid lg:grid-cols-2 gap-5 mt-6" dir="rtl">
            <Image src={TeamImg} width={500} height={500} />
            <div className="mt-5 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptate cupiditate atque consectetur quis distinctio ad at?
              Doloribus quos odio consequatur autem dignissimos debitis? Magni
              iure aliquid deserunt magnam, aut quidem nesciunt, qui fugit
              perferendis praesentium maiores consequuntur dolore repellendus
              accusantium molestias facilis voluptatem aperiam libero ullam rem
              enim. Reiciendis quis doloremque ad aliquam magnam, similique
              iusto commodi repudiandae reprehenderit. Ut explicabo, tempore
              adipisci doloremque repudiandae voluptatibus temporibus at maxime
              nisi sapiente maiores esse provident et quasi corporis eos nobis,
              reiciendis nemo laudantium! Aut sunt velit repellat officiis
              inventore alias rerum, hic labore optio molestias dolore adipisci
              veritatis voluptatibus ullam voluptates!
            </div>
          </div>
        </div>
      </div>

      <Team/>
    </div>
  );
};

export default page;
