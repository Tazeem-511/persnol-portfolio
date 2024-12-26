import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const words = ["Developer", "Programmer"];
  const [currentWord, setCurrentWord] = useState(words[0]);
  const textRef = useRef(null);
  const animationDuration = 1; // Animation duration in seconds

  useEffect(() => {
    const changeWord = () => {
      // Flip out animation
      gsap.to(textRef.current, {
        rotationY: 90,
        opacity: 0,
        duration: animationDuration,
        onComplete: () => {
          setCurrentWord((prev) => {
            const nextIndex = (words.indexOf(prev) + 1) % words.length;
            return words[nextIndex];
          });
          // Reset rotation for flip-in animation
          gsap.set(textRef.current, { rotationY: -360, opacity: 0 });
          // Flip in animation
          gsap.to(textRef.current, {
            rotationY: 0,
            opacity: 1,
            duration: animationDuration,
          });
        },
      });
    };

    const interval = setInterval(changeWord, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [words]);

  return (
    <div className="container px-52 py-12">
      <div className="hero-content p-12">
        <h1 className="main-heading font-bold mb-4 text-black">
          I am Full Stack{" "}
          <span className="text-red-900" ref={textRef}>
            {currentWord}
          </span>
        </h1>
      </div>
      <div className="hero-img">
        <Image
          src="/—Pngtree—freelancer software developer programmer coder_16198325.png"
          alt="Description of the image"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default Hero;