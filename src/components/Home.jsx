import React from "react";
import HeroImage from "../assets/Heroimage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      id="Home"
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full text-center md:text-left md:w-1/2">
          <h2 className="text-2xl sm:text-7xl font-bold text-white">
            I'm a Web Developer
          </h2>
          <p className="text-gray-500 py-2 md:py-4 max-w-md mx-auto md:mx-0 text-sm md:text-lg ">
            👋 Hello, I'm Anahat Basnet, a passionate front-end developer with a
            keen eye for creating immersive and user-centric web experiences. My
            skill set extends to working with popular front-end frameworks such
            as React.js, where I leverage the power of components to build
            dynamic and interactive web applications.
          </p>
          <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-blue-700 cursor-pointer mx-auto md:mx-0">
            Portfolio{" "}
            <span className="group-hover:rotate-90 duration-300">
              <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
            </span>
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center md:mt-0">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl w-full max-w-sm md:max-w-full mt-52 md:mt-10 pb-5 md:pb-0 "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
