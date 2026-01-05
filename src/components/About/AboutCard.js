// src/components/About/AboutCard.js
import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p
            style={{
              textAlign: "left",
              lineHeight: "1.42",
              letterSpacing: "0.1px",
              marginBottom: 0,
            }}
          >
            <span style={{ whiteSpace: "nowrap" }}>
              Hi, I’m <span className="purple">Esme Qian</span> — a{" "}
              <span className="purple">designer</span> shaping calm, human-centered experiences.
            </span>
            <br />
            <br />
            I’m pursuing an M.S. in Digital Media at the{" "}
            <span className="purple">University of Washington</span>.
            <br />
            <br />
            I design with sensitivity and curiosity, translating subtle cues into{" "}
            <span className="purple">clear, intuitive flows</span>.
            <br />
            <br />
            I start from <span className="purple">small, lived details</span> and refine them into systems that feel natural, generous, and grounded.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
