// src/components/About/About.js

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import aboutPhoto from "../../Assets/about-portrait.jpg";

function About() {
  const strengths = [
    {
      title: "Visual Craft",
      text:
        "With a background in digital media arts, I create polished interfaces, graphics, and illustrations with speed, consistency, and refined visual quality.",
    },
    {
      title: "UX Research",
      text:
        "My UX training helps me turn research, usability testing, and user feedback into practical design decisions that improve real experiences.",
    },
    {
      title: "Marketing Insight",
      text:
        "Managing social media and websites has strengthened my understanding of audience behavior, content strategy, and business communication.",
    },
    {
      title: "Systems Thinking & AI",
      text:
        "I improve information architecture, build reusable design systems, and use AI to streamline workflows while maintaining quality and consistency.",
    },
  ];

  return (
    <Container fluid className="about-section">
      <Particle />

      <Container>
        {/* ===== What I Bring Intro ===== */}
        <Row
          className="align-items-center g-4"
          style={{
            padding: "30px 10px 80px",
          }}
        >
          <Col xs={12} md={7} lg={7}>
            <h1
              style={{
                fontSize: "2.4em",
                marginBottom: "46px",
              }}
            >
              What I <strong className="purple">Bring</strong>
            </h1>

            <p
              style={{
                color: "white",
                fontSize: "1.15em",
                lineHeight: 1.8,
                maxWidth: "720px",
                marginBottom: 0,
                textAlign: "left",
              }}
            >
              My background combines visual design, UX research, marketing
              experience, and systems thinking.
              <br />
              <br />
              Together, these skills help me move from insight to execution
              while keeping the work clear, consistent, and practical.
            </p>
          </Col>

          <Col
            xs={12}
            md={5}
            lg={5}
            className="about-img"
            style={{
              paddingTop: "20px",
              paddingBottom: "20px",
            }}
          >
            <img
              src={aboutPhoto}
              alt="Esme Qian portrait"
              className="img-fluid about-photo"
              style={{
                maxWidth: "340px",
                width: "100%",
                height: "auto",
              }}
            />
          </Col>
        </Row>

        {/* ===== What I Bring Cards ===== */}
        <Row
          className="g-4"
          style={{
            justifyContent: "center",
            paddingBottom: "110px",
          }}
        >
          {strengths.map((item) => (
            <Col xs={12} md={6} key={item.title}>
              <Card
                style={{
                  height: "100%",
                  background: "rgba(255, 255, 255, 0.06)",
                  border: "1px solid rgba(255, 255, 255, 0.14)",
                  borderRadius: "16px",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.18)",
                }}
              >
                <Card.Body
                  style={{
                    padding: "24px 30px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Card.Title
                    className="purple"
                    style={{
                      fontSize: "1.45em",
                      fontWeight: 600,
                      marginBottom: "16px",
                      textAlign: "center",
                    }}
                  >
                    {item.title}
                  </Card.Title>

                  <Card.Text
                    style={{
                      color: "white",
                      fontSize: "1em",
                      lineHeight: 1.65,
                      marginBottom: 0,
                      textAlign: "left",
                      maxWidth: "470px",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    {item.text}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* ===== Skills ===== */}
        <section
          style={{
            marginBottom: "110px",
          }}
        >
          <h1
            className="project-heading"
            style={{
              marginBottom: "46px",
            }}
          >
            Professional <strong className="purple">Skillset</strong>
          </h1>

          <Techstack />
        </section>

        {/* ===== Tools ===== */}
        <section
          style={{
            paddingBottom: "40px",
          }}
        >
          <h1
            className="project-heading"
            style={{
              marginBottom: "42px",
            }}
          >
            Design <strong className="purple">Toolkit</strong>
          </h1>

          <Toolstack />
        </section>
      </Container>
    </Container>
  );
}

export default About;