import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import p0cover from "../../Assets/Projects/p0cover.jpg";
import p1cover from "../../Assets/Projects/p1cover.jpg";
import p2cover from "../../Assets/Projects/p2cover.jpg";
import p3cover from "../../Assets/Projects/p3cover.jpg";
import p4cover from "../../Assets/Projects/p4cover.jpg";
import bbctCover from "../../Assets/Projects/bbct-cover.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />

      <Container>
        <h1 className="project-heading">
          Selected <strong className="purple">Projects</strong>
        </h1>

        <p
          style={{
            color: "white",
            textAlign: "center",
            maxWidth: "720px",
            margin: "0 auto 42px",
          }}
        >
          A selection of UX, web, visual, and communication design projects.
        </p>

        <Row
          style={{
            justifyContent: "center",
            paddingBottom: "20px",
          }}
        >
          <Col md={6} lg={6} className="project-card">
            <ProjectCard
              imgPath={bbctCover}
              title="BBCT Website Redesign"
              description="Web Design · UX Research · WordPress"
              demoLink="/viewer?p=/work/bbct-long.jpg&title=BBCT%20Website%20Redesign"
            />
          </Col>

          <Col md={6} lg={6} className="project-card">
            <ProjectCard
              imgPath={p0cover}
              title="AgentSkill"
              description="UX Research · Product Design · AI"
              demoLink="/viewer?p=/work/p0-long.jpg&title=AgentSkill"
            />
          </Col>

          <Col md={6} lg={6} className="project-card">
            <ProjectCard
              imgPath={p1cover}
              title="PathPal"
              description="Mobile UX · User Flows · Prototyping"
              demoLink="/viewer?p=/work/p1-long.jpg&title=PathPal"
            />
          </Col>

          <Col md={6} lg={6} className="project-card">
            <ProjectCard
              imgPath={p2cover}
              title="Let's Dance"
              description="UI/UX Design · Product Design · Interaction"
              demoLink="/viewer?p=/work/p2-long.jpg&title=Let%27s%20Dance"
            />
          </Col>

          <Col md={6} lg={6} className="project-card">
            <ProjectCard
              imgPath={p3cover}
              title="POOD"
              description="Visual Design · Research · Storytelling"
              demoLink="/viewer?p=/work/p3-long.jpg&title=POOD"
            />
          </Col>

          <Col md={6} lg={6} className="project-card">
            <ProjectCard
              imgPath={p4cover}
              title="Eligible"
              description="Graphic Design · Interaction · Concept"
              demoLink="/viewer?p=/work/p4-long.jpg&title=Eligible"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;