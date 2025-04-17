import React, { useState, useEffect } from "react";

const RotatingTypingText = ({ texts = [], speed = 100, pause = 1500, reverse = true }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [typing, setTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (typing) {
      if (charIndex < texts[currentTextIndex].length) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + texts[currentTextIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, speed);
      } else if (reverse) {
        timeout = setTimeout(() => setTyping(false), pause);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        }, speed);
      } else {
        setTyping(true);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, typing, currentTextIndex, texts, speed, pause, reverse]);

  return (
    <p className="text-black-600 text-lg mb-6">
      {displayedText}
      <span className="blinking-cursor">|</span>
    </p>
  );
};

export default RotatingTypingText;
