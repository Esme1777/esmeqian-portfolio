// src/components/Home/Type.js
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
          "Aesthetic Creative Designer"
        ],
        autoStart: true,
        loop: true,
        // 仅调整速度（≈ 2x 更快）
        delay: 35,        // 每个字符输入间隔（数值越小越快）
        deleteSpeed: 30,  // 删除速度（数值越大越快）
        pauseFor: 900,    // 每段文字结束后的停顿
        cursor: "|"
      }}
    />
  );
}

export default Type;
