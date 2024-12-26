import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="container px-52 py-12">
      <div className="hero-content  p-12">
        <h1 className="text-12 font-bold mb-4 text-black">I am Full Stack Developer </h1>
        <p>Your hero description goes here.</p>
        <button>Learn More</button>
      </div>
      <div className="hero-img">
        <Image
          src="/—Pngtree—freelancer software developer programmer coder_16198325.png"
          alt="Description of the image"
          width={500} // Set appropriate width
          height={500} // Set appropriate height
        />
      </div>
    </div>
  );
};

export default Hero;
