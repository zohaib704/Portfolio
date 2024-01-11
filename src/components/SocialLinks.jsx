import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { FaAddressCard } from "react-icons/fa";
const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={20} />
        </>
      ),
      href: "https://www.linkedin.com/in/zohaib-akbar-575a2b1a0/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={20} />
        </>
      ),
      href: "https://github.com/zohaib704/",
    },
    {
      id: 3,
      child: (
        <>
          Gmail <BiLogoGmail size={20} />
        </>
      ),
      href: "https://mail.google.com/mail/u/0/#inbox",
    },
    {
      id: 4,
      child: (
        <>
          Resume <FaAddressCard size={20} />
        </>
      ),
      href: "/Zohaib's Resume (6).pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div
      name="scrollLinks"
      className="hidden lg:flex flex-col top-[35%] left-0 fixed"
    >
      <ul>
        {links.map(({ id, href, child, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] duration-300 rounded-sm bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white "
              download={download}
              target="_blank"
              rel="norefferer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
