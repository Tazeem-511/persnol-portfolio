// index.js
import React from "react";
import Hero from "./hero";
import About from "./about";
import ProjectPage from "./project";
import ContactPage from "./contact";

export default function Home() {
  return (
    <div className=" hero text-white">
      
      <Hero></Hero>
      <About />
      <ProjectPage />
     =
    </div>
  );
}
