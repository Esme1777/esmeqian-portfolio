// src/components/About/About.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import aboutPhoto from "../../Assets/about-portrait.jpg";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row className="align-items-start g-4" style={{ padding: "10px" }}>
          {/* 左列：文字 */}
          <Col xs={12} md={7} lg={7} style={{ paddingTop: "30px", paddingBottom: "50px" }}>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>

          {/* 右列：照片 */}
          <Col xs={12} md={5} lg={5} className="about-img" style={{ paddingTop: "40px", paddingBottom: "40px" }}>
            <img
              src={aboutPhoto}
              alt="Esme Qian portrait"
              className="img-fluid about-photo"
              style={{ maxWidth: "340px", width: "100%", height: "auto" }}
            />
          </Col>
        </Row>

        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
