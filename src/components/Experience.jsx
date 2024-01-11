import React from "react";
import css from "../assets/css.png";
import github from "../assets/guthub.png";
import html from "../assets/html.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
const Experience = () => {
  const Portfolios = [
    {
      id: 1,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 2,
      src: github,
      title: "GitHub",
      style: "shadow-yellow-500",
    },
    {
      id: 3,
      src: html,
      title: "HTML",
      style: "shadow-red-500",
    },
    {
      id: 4,
      src: js,
      title: "Java Script",
      style: "shadow-green-500",
    },
    {
      id: 5,
      src: react,
      title: "React",
      style: "shadow-blue-700",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-pink-500",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-600 to-black  md:h-full md:py-52  "
    >
      <div className="max-w-screen-lg mx-auto h-full w-full flex flex-col justify-center text-white p-4">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-400 p-2">
            Experience
          </p>
          <p className="py-6">These different fields in experties</p>
        </div>

        <div className=" w-full h-full grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 items-center ">
          {Portfolios.map(({ id, src, title, style }) => (
            <div key={id} className=" rounded-lg">
              <img
                src={src}
                alt=""
                className={`h-[200px] w-[200px]   shadow-blue-600  shadow-md  hover:scale-105 duration-300 rounded-3xl ${style}`}
              />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
