import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const words = ["Developer",, "Programmer"];
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [index, setIndex] = useState(0);
  const textRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (index + 1) % words.length;
      gsap.to(textRef.current, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          setCurrentWord(words[nextIndex]);
          gsap.to(textRef.current, { opacity: 1, duration: 0.5 });
        },
      });
      setIndex(nextIndex);
    }, 3000); // Change every 4 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [index, words]);

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
