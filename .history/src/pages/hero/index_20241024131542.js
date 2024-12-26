import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="container">
      <div className="hero-content">
        <h1>Your Hero Title</h1>
        <p>Your hero description goes here.</p>
        <button>Learn More</button>
      </div>
      <div className="hero-img">
        <Image
          src="/Untitled-15_copy-removebg-preview.png"
          alt="Description of the image"
          width={400} // Set appropriate width
          height={300} // Set appropriate height
        />
      </div>
    </div>
  );
};

export default Hero;
