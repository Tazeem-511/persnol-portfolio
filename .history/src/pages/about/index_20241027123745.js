import React, { useEffect } from "react";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress } from "react-icons/si";
import { gsap } from "gsap";

const About = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".fade-in");
    const handleScroll = () => {
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          gsap.to(section, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger scroll animation on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="about-container">
      <section className="fade-in opacity-0 transform translate-y-10 mb-10">
        <h2 className="text-3xl font-bold mb-4">Get to Know Me!</h2>
        <p className="text-lg">
          I am a Frontend Focused Web Developer building and managing the
          Front-end of Websites and Web Applications that leads to the success
          of the overall product. Check out some of my work in the Projects
          section.
        </p>
        <p className="text-lg mt-4">
          I also like sharing content related to the stuff that I have learned
          over the years in Web Development so it can help other people of the
          Dev Community. Feel free to Connect or Follow me on my LinkedIn and
          Instagram where I post useful content related to Web Development and
          Programming.
        </p>
        <p className="text-lg mt-4">
          I am open to Job opportunities where I can contribute, learn and grow.
          If you have a good opportunity that matches my skills and experience
          then don not hesitate to contact me.
        </p>
      </section>

      <section className="fade-in opacity-0 transform translate-y-10 mb-10">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="skill-card shadow-lg hover:shadow-xl transition-shadow duration-300 p-5 rounded-lg bg-white flex items-center">
            <FaReact className="text-4xl text-blue-500 mr-3" />
            <span>React</span>
          </div>
          <div className="skill-card shadow-lg hover:shadow-xl transition-shadow duration-300 p-5 rounded-lg bg-white flex items-center">
            <FaNodeJs className="text-4xl text-green-500 mr-3" />
            <span>Node.js</span>
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
