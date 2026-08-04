// src/components/About/Techstack.js

import React from "react";
import { Row, Col } from "react-bootstrap";

function Techstack() {
  const groups = [
    {
      title: "Research",
      skills: ["User Research", "Usability Testing", "Insight Synthesis"],
    },
    {
      title: "UX Design",
      skills: ["Information Architecture", "User Flows", "Prototyping"],
    },
    {
      title: "Visual Design",
      skills: ["Graphic Design", "Storytelling", "Accessibility"],
    },
    {
      title: "Digital Products",
      skills: ["Product Design", "Web & Mobile", "Design Systems"],
    },
  ];

  return (
    <Row
      className="g-4"
      style={{
        justifyContent: "center",
        paddingBottom: 0,
      }}
    >
      {groups.map((group) => (
        <Col xs={12} sm={6} lg={3} key={group.title}>
          <div
            style={{
              height: "100%",
              padding: "8px 18px 12px",
              borderLeft: "2px solid rgba(88, 196, 185, 0.75)",
              textAlign: "left",
            }}
          >
            <h4
              className="purple"
              style={{
                fontSize: "1.15rem",
                fontWeight: 600,
                marginBottom: "16px",
              }}
            >
              {group.title}
            </h4>

            <p
              style={{
                color: "white",
                fontSize: "0.95rem",
                lineHeight: 1.8,
                marginBottom: 0,
              }}
            >
              {group.skills.join(" · ")}
            </p>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;