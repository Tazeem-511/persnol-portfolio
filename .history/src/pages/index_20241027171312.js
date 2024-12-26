// index.js
import React from "react";
import Hero from "./hero";
import About from "./about";

export default function Home() {
  return (
    <div className=" hero text-white">
      
      <Hero></Hero>
      <About />
      
    </div>
  );
}
