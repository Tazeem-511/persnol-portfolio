import React from "react";
import "./HeroPage.css"; // CSS file for styling

const HeroPage = () => {
  return (
    <div className="container">
      <div className="hero-content">
        <h1>Your Hero Title</h1>
        <p>Your hero description goes here.</p>
        <button>Learn More</button>
      </div>
      <div className="hero-img">
        <img src="your-image-url.jpg" alt="Hero" />
      </div>
    </div>
  );
};

export default HeroPage;
