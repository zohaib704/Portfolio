import React from "react";

const Contact = () => {
  return (
    <>
      <div
        name="contact"
        className="bg-gradient-to-b from-black to-gray-800 w-full h-screen text-white"
      >
        <div className="flex flex-col justify-center p-4 max-w-screen-lg mx-auto h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-600">
              Contact
            </p>
            <p className="py-6">
              Submit the form below to get in touch with me
            </p>
          </div>
          <div className="flex justify-center items-center">
            <form
              action="https://getform.io/f/b3e6e760-f9bb-422e-88f4-f8e923af7268"
              method="POST"
              className="flex flex-col h-full md:w-1/2 "
            >
              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                className="p-2 bg-transparent focus:outline-none rounded-md text-white border-2"
              />
              <input
                type="text"
                name="email"
                placeholder="Enter your Email"
                className="my-4 p-2 bg-transparent focus:outline-none rounded-md text-white border-2"
              />
              <textarea
                rows="10"
                name="message"
                placeholder="Enter Your Message"
                className="bg-transparent rounded-md text-white border-2 focus:outline-none"
              ></textarea>
              <button className="bg-gradient-to-b from-cyan-500 to-blue-600 px-6 py-2 my-8 mx-auto flex justify-center items-center hover:scale-110 duration-300 rounded-md text-white">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
