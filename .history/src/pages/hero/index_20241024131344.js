import React from 'react'

const Hero = () => {
  return (
    <div className="container">
      <div className="hero-content">
        <h1>Your Hero Title</h1>
        <p>Your hero description goes here.</p>
        <button>Learn More</button>
      </div>
      <div className="hero-img">
        <img src="/." alt="Hero" />
      </div>
    </div>
  );
}

export default Hero
