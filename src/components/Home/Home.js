// src/components/Home/Home.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { FiChevronDown } from "react-icons/fi";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            {/* Full-width heading column */}
            <Col md={12} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M <strong className="main-name">ESME QIAN</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
          </Row>
        </Container>

        {/* Scroll-down arrow to #about */}
        <a href="#about" className="scroll-down" aria-label="Scroll down">
          <FiChevronDown className="scroll-down-icon" />
        </a>
      </Container>

      <Home2 />
    </section>
  );
}

export default Home;
