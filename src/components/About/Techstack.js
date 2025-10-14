import React from "react";
import { Col, Row } from "react-bootstrap";

function Techstack() {
  const skills = [
    "User Research",
    "Insight Synthesis",
    "Information Architecture",
    "User Flows & Journeys",
    "Wireframing",
    "Interaction Design",
    "Usability Testing",
    "Design Systems",
    "Storytelling",
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "12px" }}>
      {skills.map((s) => (
        <Col
          key={s}
          xs={6}
          md={4}
          lg={3}
          className="tech-icons skill-item"
        >
          <div className="skill-badge">{s}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
