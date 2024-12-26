import React from "react";
import { FaReact, FaNodeJs, FaGithub, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiNextdotjs } from "react-icons/si";
import { DiHtml5, DiCss3, DiJavascript1 } from "react-icons/di";

const About = () => {
  return (
    <div className="about-container flex flex-col lg:flex-row p-4">
      <section className="mb-10 left-about-container lg:w-1/2 lg:mr-4">
        <h2 className="text-3xl text-black font-bold mb-4">About Me!</h2>
        <p className="text-lg text-black text-justify">
          I am a Frontend Focused Web Developer dedicated to building and
          managing the front-end of websites and web applications, contributing
          to the overall success of the product. Feel free to check out some of
          my work in the Projects section.
        </p>
        <p className="text-lg text-black mt-4 text-justify">
          I enjoy sharing knowledge about web development that I've gathered
          over the years, helping others in the developer community. Connect
          with me on LinkedIn and Instagram, where I regularly post useful
          content related to web development and programming.
        </p>
        <p className="text-lg text-black mt-4 text-justify">
          I am open to job opportunities where I can contribute, learn, and
          grow. If you have a role that matches my skills and experience, please
          don't hesitate to reach out.
        </p>
      </section>

      <section className="mb-10 right-about-container lg:w-1/2 p-4 lg:p-16">
        <h2 className="text-3xl font-bold mb-4 text-black">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {[
            { icon: <DiHtml5 className="text-5xl" />, label: "HTML" },
            { icon: <DiCss3 className="text-5xl" />, label: "CSS" },
            {
              icon: <DiJavascript1 className="text-5xl" />,
              label: "JavaScript",
            },
            { icon: <FaReact className="text-5xl" />, label: "React" },
            { icon: <FaNodeJs className="text-5xl" />, label: "Node.js" },
            { icon: <SiNextdotjs className="text-5xl" />, label: "Next.js" },
            {
              icon: <SiTailwindcss className="text-5xl" />,
              label: "Tailwind CSS",
            },
            { icon: <SiExpress className="text-5xl" />, label: "Express.js" },
            { icon: <FaDatabase className="text-5xl" />, label: "MongoDB" },
            { icon: <FaGithub className="text-5xl" />, label: "Git & GitHub" },
          ].map((skill, index) => (
            <div
              key={index}
              className="skill-card flex flex-col items-center shadow-lg hover:shadow-xl transition-shadow duration-300 p-5 rounded-lg bg-white"
            >
              <div className="mb-2">{skill.icon}</div>
              <span className="text-lg">{skill.label}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
