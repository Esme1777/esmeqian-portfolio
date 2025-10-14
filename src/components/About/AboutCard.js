import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  const lineStyle = { textAlign: "justify", marginBottom: "12px" };

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          {/* 一句一行，中间留空行（品牌感版） */}
          <p style={lineStyle}>
            Hello, I’m <span className="purple">Esme Qian</span> from{" "}
            <span className="purple">China</span> — a UX designer shaping calm,
            human-centered experiences.
          </p>

          <p style={lineStyle}>
            I’m pursuing an <span className="purple">M.S. in Digital Media</span> at the{" "}
            <span className="purple">University of Washington</span>.
          </p>

          <p style={lineStyle}>
            I design with <span className="purple">sensitivity and curiosity</span>,
            translating subtle cues into clear, intuitive flows.
          </p>

          <p style={lineStyle}>
            I start from small, lived details and refine them into systems that feel{" "}
            <span className="purple">natural, generous, and grounded</span>.
          </p>

          {/* 爱好标题一行 */}
          <p style={{ ...lineStyle, marginTop: "16px" }}>
            Beyond design, I enjoy:
          </p>

          {/* 爱好清单：图标 + 一行一个 */}
          <ul>
            <li className="about-activity">
              <ImPointRight /> Hiking
            </li>
            <li className="about-activity">
              <ImPointRight /> Hand-brewed coffee
            </li>
            <li className="about-activity">
              <ImPointRight /> Plogging
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

