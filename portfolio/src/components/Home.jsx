import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
const Home = () => {
  return (
    <div className="w-full h-screen bg-[#0a192f]" name="home">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hola! mi nombre es</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Fernando Ariel Niscola
        </h1>
        <h3 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          Full Stack Developer
        </h3>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          aasdadadadasdasd42123412312313332 123 15234152312 13531435413 12
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:boder-pink-600">
            Más Info
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-2" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
