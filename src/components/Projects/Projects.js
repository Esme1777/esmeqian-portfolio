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
              title="Pathpal"
              description="Wayfinding experience shaped by human-centered insights."
              demoLink="/viewer?p=/work/p1-long.jpg&title=Pathpal"
            />
          </Col>

          {/* Project 2 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p2cover}
              isBlog={false}
              title="Let's dance"
              description="Interactive choreography and playful motion storytelling."
              demoLink="/viewer?p=/work/p2-long.jpg&title=Let%27s%20dance"
            />
          </Col>

          {/* Project 3 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p3cover}
              isBlog={false}
              title="POOD"
              description="Designing clarity for complex decisions with calm visuals."
              demoLink="/viewer?p=/work/p3-long.jpg&title=POOD"
            />
          </Col>

          {/* Project 4 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p4cover}
              isBlog={false}
              title="Eligible"
              description="From research to flows—making eligibility intuitive."
              demoLink="/viewer?p=/work/p4-long.jpg&title=Eligible"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
