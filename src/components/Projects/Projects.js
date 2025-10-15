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
          <Col xs={12} md={6} className="project-card">
            <ProjectCard
              imgPath={p1cover}
              isBlog={false}
              title="Project1: Pathpal"
              description="How to enhance communication among hikers during the hiking process?"
              demoLink="/viewer?p=/work/p1-long.jpg&title=Pathpal"
            />
          </Col>

          {/* Project 2 */}
          <Col xs={12} md={6} className="project-card">
            <ProjectCard
              imgPath={p2cover}
              isBlog={false}
              title="Project2: Let's dance"
              description="How to improve the enthusiasm of elderly people who want to join the square dance?"
              demoLink="/viewer?p=/work/p2-long.jpg&title=Let%27s%20dance"
            />
          </Col>

          {/* Project 3 */}
          <Col xs={12} md={6} className="project-card">
            <ProjectCard
              imgPath={p3cover}
              isBlog={false}
              title="Project3: POOD"
              description="In the future of food shortage and plastic surplus, what changes will occur in diets?"
              demoLink="/viewer?p=/work/p3-long.jpg&title=POOD"
            />
          </Col>

          {/* Project 4 */}
          <Col xs={12} md={6} className="project-card">
            <ProjectCard
              imgPath={p4cover}
              isBlog={false}
              title="other work: Eligible"
              description="When we are stared at, does the other person see me, or what they imagine me to be?"
              demoLink="/viewer?p=/work/p4-long.jpg&title=Eligible"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
