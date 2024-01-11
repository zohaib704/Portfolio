import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import HeroImg from "../assets/Zohaib.jpg";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-4xl sm:text-7xl font-bold text-white text-pretty">
            React Js Developer
          </h1>
          <p className="py-4 text-gray-300 max-w-md  text-justify">
            Skilled React.js developer with expertise in crafting user-friendly
            web applications using Tailwind CSS. Dedicated to clean, efficient
            code and continual innovation. Let's build something extraordinary
            together!
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white max-w-40 cursor-pointer flex items-center bg-gradient-to-r from-cyan-300 to-blue-600 p-3 m-2 my-2 rounded-md "
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300 ml-2">
                <FaArrowRightLong />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImg}
            alt=""
            className="rounded-2xl w-2/3 mx-auto md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
