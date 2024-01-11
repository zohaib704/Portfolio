import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg h-full w-full flex flex-col justify-center mx-auto p-4">
        <div className="text-4xl ">
          <h1 className="font-bold border-b-4 inline border-gray-500 ">
            About
          </h1>
        </div>
        <div className="text-xl mt-16 text-justify ">
          <p>
            Welcome! I'm a React.js developer adept at crafting dynamic web
            applications. With expertise in HTML, CSS, and JavaScript, I
            specialize in building scalable React projects. I prioritize clean
            and efficient code, utilizing Tailwind CSS for streamlined styling,
            ensuring a seamless user experience.
          </p>
          <br />
          <p>
            My passion is translating concepts into reality through meticulous
            code. I stay ahead of React.js trends, bringing innovation to each
            project. Beyond coding, I actively engage in collaborative
            environments, fostering open communication for successful project
            outcomes. Explore my portfolio for firsthand examples, and let's
            build something extraordinary together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
