// src/components/About/Toolstack.js

import React from "react";

function Toolstack() {
  const toolRows = [
    [
      "Figma",
      "WordPress",
      "Photoshop",
      "Illustrator",
      "InDesign",
      "After Effects",
      "Premiere Pro",
    ],
    [
      "Canva",
      "Notion",
      "Procreate",
      "Sketch",
      "Adobe XD",
      "TouchDesigner",
      "ZBrush",
    ],
  ];

  return (
    <div
      style={{
        maxWidth: "1120px",
        margin: "0 auto",
        padding: "0 20px 30px",
      }}
    >
      {toolRows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "14px",
            marginBottom: rowIndex === 0 ? "16px" : 0,
          }}
        >
          {row.map((tool) => (
            <span
              key={tool}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "9px 16px",
                minWidth: "108px",
                borderRadius: "999px",
                background: "rgba(255, 255, 255, 0.08)",
                color: "white",
                fontSize: "0.94rem",
                lineHeight: 1,
                cursor: "default",
                userSelect: "none",
                whiteSpace: "nowrap",
              }}
            >
              {tool}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Toolstack;