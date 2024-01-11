import React from "react";
import arraydestructure from "../assets/Portfolio/arraydestrure.jpeg";
import smoothscrolling from "../assets/Portfolio/smootscrolling.jpg";
import parallelx from "../assets/Portfolio/parallelx.jpg";
// import node from "../assets/Portfolio/nodejs.png";
import ecommerce from "../assets/Portfolio/ecommerce.jpg";

const Portfolio = () => {
  const Portfolios = [
    {
      id: 1,
      src: parallelx,
      href: "https://github.com/zohaib704/",
    },
    {
      id: 2,
      src: smoothscrolling,
      href: "https://github.com/zohaib704/",
    },
    {
      id: 3,
      src: arraydestructure,
      href: "https://github.com/zohaib704/",
    },
    {
      id: 4,
      src: smoothscrolling,
      href: "https://github.com/zohaib704/",
    },
    {
      id: 5,
      src: parallelx,
      href: "https://github.com/zohaib704/",
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-600 text-white md:h-screen"
    >
      <div className="max-w-screen-lg mx-auto h-full w-full flex flex-col justify-center p-4">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-600">
            Portfolio
          </p>
          <p className="py-6">Click out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
          {Portfolios.map(({ id, src, href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md hover:scale-105 duration-300 "
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 py-3 px-3 m-3 hover:scale-105 duration-300 ">
                  <a href={href}>Demo</a>
                </button>
                <button className="w-1/2 py-3 px-3 m-3 hover:scale-105 duration-300 ">
                  <a href={href}>Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
