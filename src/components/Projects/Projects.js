import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import p1cover from "../../Assets/Projects/p1cover.jpg";
import p2cover from "../../Assets/Projects/p2cover.jpg";
import p3cover from "../../Assets/Projects/p3cover.jpg";
import p4cover from "../../Assets/Projects/p4cover.jpg";
import p0cover from "../../Assets/Projects/p0cover.jpg";
import bbctCover from "../../Assets/Projects/bbct-cover.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Selected <strong className="purple">Projects</strong>
        </h1>

        <p style={{ color: "white", textAlign: "center" }}>
          Product UX and UX research projects—plus a few creative explorations.
        </p>

        <h2
          style={{
            color: "white",
            marginTop: 36,
            marginBottom: 16,
            textAlign: "center",
          }}
        >
          Featured <span className="purple">Product UX / Research</span>
        </h2>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bbctCover}
              title="BBCT Website Redesign"
              description="UX Research · Website Design · WordPress"
              demoLink="/viewer?p=/work/bbct-long.jpg&title=BBCT%20Website%20Redesign"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p0cover}
              title="AgentSkill"
              description="Usability Testing · UX Design · Website Iteration"
              demoLink="/viewer?p=/work/p0-long.jpg&title=AgentSkill"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p1cover}
              title="PathPal"
              description="Product Design · User Flows · Prototyping"
              demoLink="/viewer?p=/work/p1-long.jpg&title=Pathpal"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p2cover}
              title="Let's Dance"
              description="Product Design · UI/UX Design"
              demoLink="/viewer?p=/work/p2-long.jpg&title=Let%27s%20dance"
            />
          </Col>
        </Row>

        <h2
          style={{
            color: "white",
            marginTop: 22,
            marginBottom: 16,
            textAlign: "center",
          }}
        >
          Additional <span className="purple">Visual / Creative Tech</span>
        </h2>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p3cover}
              title="POOD"
              description="Visual · UX Research · Storytelling"
              demoLink="/viewer?p=/work/p3-long.jpg&title=POOD"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p4cover}
              title="Eligible"
              description="Visual Design · Device/Interaction Concept"
              demoLink="/viewer?p=/work/p4-long.jpg&title=Eligible"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;