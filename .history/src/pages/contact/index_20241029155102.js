import React from "react";

const ContactPage = () => {
  return (
    <div className=" mt-12  mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-6">Contact Me</h1>
      <div className="flex flex-col justify-center md:flex-row md:space-x-10">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <form className="p-6  rounded-lg shadow-lg">
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="border border-gray-300 p-2 w-full text-black rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="border border-gray-300 p-2 w-full rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                className="border border-gray-300 p-2 w-full rounded h-32"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
