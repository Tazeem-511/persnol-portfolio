import React from "react";
import Image from "next/image";
import { useEffect } from "react";
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
      <section
        className="fade-in"
        style={{ opacity: 0, transform: "translateY(50px)" }}
      >
        <h2>About Me</h2>
        <p>
          I am a passionate full-stack developer with experience in building
          dynamic web applications.
        </p>
      </section>
      <section
        className="fade-in"
        style={{ opacity: 0, transform: "translateY(50px)" }}
      >
        <h2>Skills</h2>
        <p>My skills include JavaScript, React, Node.js, and more.</p>
      </section>
      <section
        className="fade-in"
        style={{ opacity: 0, transform: "translateY(50px)" }}
      >
        <h2>Projects</h2>
        <p>
          I have worked on several projects that showcase my abilities in web
          development.
        </p>
      </section>
    </div>
  );
};

export default About;
