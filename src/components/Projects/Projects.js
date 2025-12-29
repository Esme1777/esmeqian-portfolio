import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import p1cover from "../../Assets/Projects/p1cover.jpg";
import p2cover from "../../Assets/Projects/p2cover.jpg";
import p3cover from "../../Assets/Projects/p3cover.jpg";
import p4cover from "../../Assets/Projects/p4cover.jpg";
import p0cover from "../../Assets/Projects/p0cover.jpg"; // 新项目封面若暂时没有，可先复用任意图

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Selected <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white", textAlign: "center" }}>
          A snapshot of my recent work at the intersection of nature and technology.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Project 1 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p0cover}
              isBlog={false}
              title="AgentSkill"
              description="UX Design & Website Design"
              demoLink="/viewer?p=/work/p0-long.jpg&title=AgentSkill"
            />
          </Col>

          {/* Project 2 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p1cover}
              isBlog={false}
              title="PathPal"
              description="User Interface & Product Design"
              demoLink="/viewer?p=/work/p1-long.jpg&title=Pathpal"
            />
          </Col>

          {/* Project 3 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p2cover}
              isBlog={false}
              title="Let's Dance"
              description="User Interface & Product Design"
              demoLink="/viewer?p=/work/p2-long.jpg&title=Let%27s%20dance"
            />
          </Col>

          {/* Project 4 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p3cover}
              isBlog={false}
              title="POOD"
              description="Visual Design & UX Design"
              demoLink="/viewer?p=/work/p3-long.jpg&title=POOD"
            />
          </Col>

          {/* Project 5 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p4cover}
              isBlog={false}
              title="Eligible"
              description="Visual Design & Device Design"
              demoLink="/viewer?p=/work/p4-long.jpg&title=Eligible"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
