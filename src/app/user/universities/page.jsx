import React from "react";
import ImageCard from "./components/ImageCard";

const page = () => {
  return (
    <div>
      <div class="relative bg-[url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-56">
        <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
        <div className="relative p-6 px-6 py-14 md:px-12 flex items-center h-full">
          <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-white">
            Home / Universities
          </h5>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <div className="w-11/12">
          <p class="text-3xl lg:text-4xl  css-family css-color-2 section-title css-color-primary font-bold">
            Australia
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mt-4">
            <ImageCard imagePath="https://thenext.edu.np/wp-content/uploads/2022/09/southern-queensland.png" />
            <ImageCard imagePath="https://thenext.edu.np/wp-content/uploads/2022/09/southern-queensland.png" />
            <ImageCard imagePath="https://thenext.edu.np/wp-content/uploads/2023/11/deakin.png" />
            <ImageCard imagePath="https://thenext.edu.np/wp-content/uploads/2022/09/southern-queensland.png" />
            <ImageCard imagePath="https://thenext.edu.np/wp-content/uploads/2022/09/southern-queensland.png" />
            <ImageCard imagePath="https://thenext.edu.np/wp-content/uploads/2022/09/southern-queensland.png" />
            <ImageCard imagePath="https://thenext.edu.np/wp-content/uploads/2022/09/southern-queensland.png" />
            <ImageCard imagePath="https://thenext.edu.np/wp-content/uploads/2022/09/mit.png" />
            <ImageCard imagePath="https://thenext.edu.np/wp-content/uploads/2017/09/1.png" />
            <ImageCard imagePath="https://thenext.edu.np/wp-content/uploads/2017/09/1.png" />
            <ImageCard imagePath="https://thenext.edu.np/wp-content/uploads/2022/09/mit.png" />
            <ImageCard imagePath="https://thenext.edu.np/wp-content/uploads/2017/09/1.png" />
          </div>
          <p class="text-3xl lg:text-4xl  css-family css-color-2 section-title css-color-primary font-bold mt-11">
            Canada
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mt-4">
            <ImageCard imagePath="https://thenext.edu.np/wp-content/uploads/2023/12/durham.png" />
            <ImageCard imagePath="https://thenext.edu.np/wp-content/uploads/2022/09/southern-queensland.png" />
            <ImageCard imagePath="https://thenext.edu.np/wp-content/uploads/2023/11/deakin.png" />
            <ImageCard imagePath="https://thenext.edu.np/wp-content/uploads/2023/12/durham.png" />
            <ImageCard imagePath="https://thenext.edu.np/wp-content/uploads/2023/01/brescia.jpg" />
            <ImageCard imagePath="https://thenext.edu.np/wp-content/uploads/2022/09/southern-queensland.png" />
            <ImageCard imagePath="https://thenext.edu.np/wp-content/uploads/2022/09/southern-queensland.png" />
            <ImageCard imagePath="https://thenext.edu.np/wp-content/uploads/2022/09/mit.png" />
            <ImageCard imagePath="https://thenext.edu.np/wp-content/uploads/2017/09/1.png" />
            <ImageCard imagePath="https://thenext.edu.np/wp-content/uploads/2017/09/1.png" />
            <ImageCard imagePath="https://thenext.edu.np/wp-content/uploads/2022/09/mit.png" />
            <ImageCard imagePath="https://thenext.edu.np/wp-content/uploads/2017/09/1.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
