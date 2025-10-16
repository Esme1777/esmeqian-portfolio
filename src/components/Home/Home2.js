import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/about-life.jpg"; // 用你的新生活照
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  const handleEmailClick = () => {
    window.alert("Email: qianyuxin2025@163.com");
  };

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A LITTLE <span className="purple"> ABOUT </span> ME
            </h1>

            <p className="home-about-body">
              I’m <span className="purple">Esme Qian</span>, an
              <b> empathetic UX designer</b> exploring how{" "}
              <b className="purple">human emotions</b> shape meaningful
              interactions.
              <br />
              <br />
              I focus on <b className="purple">human-centered research</b>,
              translating insights into calm, intuitive flows that feel natural.
              <br />
              <br />
              I love <b className="purple">storytelling</b>—turning complex
              systems into narratives people can understand and feel.
              <br />
              <br />
              And I care about <b className="purple">aesthetic, creative design</b>,
              where nature meets technology to create resonant experiences.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="Esme Qian portrait"
                style={{
                  width: 320,
                  height: 320,
                  borderRadius: "50%",
                  objectFit: "cover"
                }}
              />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect</span> with me
            </p>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <button
                  onClick={handleEmailClick}
                  className="icon-colour home-social-icons"
                  aria-label="Show Email"
                  title="Show Email"
                  style={{ background: "transparent", border: "none", cursor: "pointer" }}
                >
                  <AiOutlineMail />
                </button>
              </li>

              <li className="social-icons">
                <a
                  href="https://github.com/Esme1777"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/esme-qian-947136386"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
