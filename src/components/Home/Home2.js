import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/about-life.jpg";
import Tilt from "react-parallax-tilt";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  const handleEmailClick = async () => {
    const email = "yuxinqian17@gmail.com";

    try {
      await navigator.clipboard.writeText(email);
      window.alert(`Email copied: ${email}`);
    } catch (error) {
      window.alert(`Email: ${email}`);
    }
  };

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple">ABOUT</span> ME
            </h1>

            <p className="home-about-body">
              I enjoy turning ideas into thoughtful{" "}
              <b className="purple">digital experiences</b>
              <br />
              by understanding people, organizing information,
              <br />
              and creating clear visual solutions.
              <br />
              <br />
              Whether designing a website, product, or campaign,
              <br />
              I focus on{" "}
              <b className="purple">
                making information easier to understand
              </b>
              <br />
              and experiences more intuitive.
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
                  objectFit: "cover",
                }}
              />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>LET'S CONNECT</h1>

            <p>
              Feel free to{" "}
              <span className="purple">
                reach out for opportunities or collaborations
              </span>
              .
            </p>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <button
                  type="button"
                  onClick={handleEmailClick}
                  className="icon-colour home-social-icons"
                  aria-label="Copy email address"
                  title="Copy email address"
                  style={{
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <AiOutlineMail />
                </button>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/yuxinqian/"
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