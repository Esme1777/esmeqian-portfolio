// src/components/Home/Type.js

import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Human-Centered Design",
          "Visual Storytelling",
          "Design Systems",
          "Bringing Ideas to Life"
        ],
        autoStart: true,
        loop: true,
        delay: 35,
        deleteSpeed: 30,
        pauseFor: 900,
        cursor: "|"
      }}
    />
  );
}

export default Type;