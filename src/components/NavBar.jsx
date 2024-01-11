import React, { useState } from "react";
// import { FaBar, FaTimes } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-scroll";
export const NavBar = () => {
  const [nav, setnav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <>
      <div className="bg-black text-white flex justify-between px-4 items-center w-full h-20 fixed">
        <div>
          <h1 className="text-4xl font-signature ml-2">Zohaib</h1>
        </div>

        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 capitalize text-gray-500 font-medium hover:scale-105 duration-150 cursor-pointer"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>

        <div
          onClick={() => setnav(!nav)}
          className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        >
          {nav ? <IoMdClose size={30} /> : <TiThMenu size={30} />}
        </div>
        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-black to-gray-800 text-gray-500">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 capitalize text-gray-500 text-4xl p-4 font-medium hover:scale-105 duration-150 cursor-pointer"
              >
                <Link
                  onClick={() => setnav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
