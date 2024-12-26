import React from "react";
import { FaReact, FaNodeJs, FaGithub, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiNextdotjs } from "react-icons/si";
import { DiHtml5, DiCss3, DiJavascript1 } from "react-icons/di"; // Importing specific icons

const About = () => {
  return (
    <div className="about-container">
      <section className="mb-10 left-about-container m">
        <h2 className="text-3xl text-black font-bold mb-4">About Me!</h2>
        <p className="text-lg text-black">
          I am a Frontend Focused Web Developer dedicated to building and
          managing the front-end of websites and web applications, contributing
          to the overall success of the product. Feel free to check out some of
          my work in the Projects section.
        </p>
        <p className="text-lg text-black mt-4">
          I enjoy sharing knowledge about web development that I've gathered
          over the years, helping others in the developer community. Connect
          with me on LinkedIn and Instagram, where I regularly post useful
          content related to web development and programming.
        </p>
        <p className="text-lg text-black mt-4">
          I am open to job opportunities where I can contribute, learn, and
          grow. If you have a role that matches my skills and experience, please
          don't hesitate to reach out.
        </p>
      </section>

      <section className="mb-10 right-about-container p-16">
        <h2 className="text-3xl font-bold mb-4">My Skills</h2>
        <div className="grid grid-cols-3 gap-4 w-100">
          <div className="skill-card shadow-lg hover:shadow-xl transition-shadow duration-300 p-5 rounded-lg bg-white flex items-center">
            <DiHtml5 className="text-4xl text-orange-500 mr-3" />
            <span>HTML</span>
          </div>
          <div className="skill-card shadow-lg hover:shadow-xl transition-shadow duration-300 p-5 rounded-lg bg-white flex items-center">
            <DiCss3 className="text-4xl text-blue-500 mr-3" />
            <span>CSS</span>
          </div>
          <div className="skill-card shadow-lg hover:shadow-xl transition-shadow duration-300 p-5 rounded-lg bg-white flex items-center">
            <DiJavascript1 className="text-4xl text-yellow-500 mr-3" />
            <span>JavaScript</span>
          </div>
          <div className="skill-card shadow-lg hover:shadow-xl transition-shadow duration-300 p-5 rounded-lg bg-white flex items-center">
            <FaReact className="text-4xl text-blue-500 mr-3" />
            <span>React</span>
          </div>
          <div className="skill-card shadow-lg hover:shadow-xl transition-shadow duration-300 p-5 rounded-lg bg-white flex items-center">
            <FaNodeJs className="text-4xl text-green-500 mr-3" />
            <span>Node.js</span>
          </div>
          <div className="skill-card shadow-lg hover:shadow-xl transition-shadow duration-300 p-5 rounded-lg bg-white flex items-center">
            <SiNextdotjs className="text-4xl text-black mr-3" />
            <span>Next.js</span>
          </div>
          <div className="skill-card shadow-lg hover:shadow-xl transition-shadow duration-300 p-5 rounded-lg bg-white flex items-center">
            <SiTailwindcss className="text-4xl text-teal-500 mr-3" />
            <span>Tailwind CSS</span>
          </div>
          <div className="skill-card shadow-lg hover:shadow-xl transition-shadow duration-300 p-5 rounded-lg bg-white flex items-center">
            <SiExpress className="text-4xl text-gray-700 mr-3" />
            <span>Express.js</span>
          </div>
          <div className="skill-card shadow-lg hover:shadow-xl transition-shadow duration-300 p-5 rounded-lg bg-white flex items-center">
            <FaDatabase className="text-4xl text-orange-500 mr-3" />
            <span>MongoDB</span>
          </div>
          <div className="skill-card shadow-lg hover:shadow-xl transition-shadow duration-300 p-5 rounded-lg bg-white flex items-center">
            <FaGithub className="text-4xl text-black mr-3" />
            <span>Git & GitHub</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
