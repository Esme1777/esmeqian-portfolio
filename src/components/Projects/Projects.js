import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import p1cover from "../../Assets/Projects/p1cover.jpg";
import p2cover from "../../Assets/Projects/p2cover.jpg";
import p3cover from "../../Assets/Projects/p3cover.jpg";
import p4cover from "../../Assets/Projects/p4cover.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Selected <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          A snapshot of my recent work at the intersection of nature and technology.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Project 1 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p1cover}
              isBlog={false}
              title="Project One"
              description="Short one-liner about this project’s goal and the key outcome."
              ghLink=""
              demoLink=""
            />
          </Col>

          {/* Project 2 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p2cover}
              isBlog={false}
              title="Project Two"
              description="One sentence describing the experience, audience, or impact."
              ghLink=""
              demoLink=""
            />
          </Col>

          {/* Project 3 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p3cover}
              isBlog={false}
              title="Project Three"
              description="What problem it addresses and what makes it unique."
              ghLink=""
              demoLink=""
            />
          </Col>

          {/* Project 4 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p4cover}
              isBlog={false}
              title="Project Four"
              description="A concise highlight of the result or learning."
              ghLink=""
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
