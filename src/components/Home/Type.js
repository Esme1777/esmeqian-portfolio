import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Empathetic UX Designer",
          "Human-Centered Researcher",
          "Passionate Storyteller",
          "Aesthetic Creative Designer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
