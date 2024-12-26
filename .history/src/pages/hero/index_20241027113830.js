import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const words = ["Developer", "Programmer"];
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [displayedText, setDisplayedText] = useState("");
  const textRef = useRef(null);
  const typingDelay = 100; // Delay between each character
  const pauseDelay = 1000; // Pause before changing the word

  useEffect(() => {
    let index = 0;
    let typingTimeout;

    const typeText = (word) => {
      if (index < word.length) {
        setDisplayedText((prev) => prev + word.charAt(index));
        index++;
        typingTimeout = setTimeout(() => typeText(word), typingDelay);
      } else {
        // Pause and then start fading out
        setTimeout(() => {
          gsap.to(textRef.current, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
              const nextIndex = (words.indexOf(currentWord) + 1) % words.length;
              setCurrentWord(words[nextIndex]);
              setDisplayedText(""); // Clear displayed text
              index = 0; // Reset index for the new word
              gsap.to(textRef.current, { opacity: 1, duration: 0.5 });
              typeText(words[nextIndex]); // Start typing the new word
            },
          });
        }, pauseDelay);
      }
    };

    // Start typing the initial word
    typeText(currentWord);

    // Cleanup on component unmount
    return () => clearTimeout(typingTimeout);
  }, [currentWord]);

  return (
    <div className="container px-52 py-12">
      <div className="hero-content p-12">
        <h1 className="main-heading font-bold mb-4 text-black">
          I am Full Stack{" "}
          <span className="text-red-900" ref={textRef}>
            {displayedText}
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
