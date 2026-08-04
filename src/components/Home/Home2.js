import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/about-life.jpg";
import Tilt from "react-parallax-tilt";

function Home2() {
  const contactColor = "#58b9b0";
  const textColor = "#202529";

  const copyToClipboard = async (value, successMessage) => {
    try {
      await navigator.clipboard.writeText(value);
      window.alert(successMessage);
    } catch (error) {
      window.alert(value);
    }
  };

  const buttonStyle = {
    padding: "8px 18px",
    borderRadius: "999px",
    border: `1px solid ${contactColor}`,
    background: "transparent",
    color: contactColor,
    fontSize: "0.9rem",
    fontWeight: 600,
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const contactItemStyle = {
    minHeight: "150px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    textAlign: "center",
    padding: "8px 16px",
  };

  const contactTitleStyle = {
    color: contactColor,
    fontSize: "1.1rem",
    fontWeight: 600,
    marginBottom: "14px",
  };

  const contactTextStyle = {
    color: textColor,
    marginBottom: "20px",
    fontSize: "1.02rem",
    minHeight: "26px",
    lineHeight: 1.5,
  };

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        {/* About Me */}
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

        {/* Contact */}
        <section
          id="contact"
          style={{
            scrollMarginTop: "90px",
            marginTop: "80px",
            padding: "38px 0 10px",
          }}
        >
          <Row className="justify-content-center">
            <Col xs={12} lg={11}>
              <div style={{ textAlign: "center" }}>
                <h1
                  style={{
                    color: textColor,
                    fontSize: "2.5rem",
                    marginBottom: "14px",
                  }}
                >
                  LET&apos;S{" "}
                  <span style={{ color: contactColor }}>CONNECT</span>
                </h1>

                <p
                  style={{
                    maxWidth: "620px",
                    margin: "0 auto 38px",
                    color: textColor,
                    lineHeight: 1.7,
                    fontSize: "1rem",
                    opacity: 0.82,
                  }}
                >
                  Always happy to chat about design, new opportunities, or
                  collaborations.
                </p>
              </div>

              <Row className="g-3 justify-content-center">
                {/* Phone */}
                <Col xs={12} md={4}>
                  <div style={contactItemStyle}>
                    <h5 style={contactTitleStyle}>Phone</h5>

                    <p style={contactTextStyle}>
                      +1 (206) 579-4487
                    </p>

                    <button
                      type="button"
                      style={buttonStyle}
                      onClick={() =>
                        copyToClipboard(
                          "+12065794487",
                          "Phone number copied!"
                        )
                      }
                    >
                      Copy Number
                    </button>
                  </div>
                </Col>

                {/* Email */}
                <Col xs={12} md={4}>
                  <div style={contactItemStyle}>
                    <h5 style={contactTitleStyle}>Email</h5>

                    <p
                      style={{
                        ...contactTextStyle,
                        wordBreak: "break-word",
                      }}
                    >
                      yuxinqian17@gmail.com
                    </p>

                    <button
                      type="button"
                      style={buttonStyle}
                      onClick={() =>
                        copyToClipboard(
                          "yuxinqian17@gmail.com",
                          "Email copied!"
                        )
                      }
                    >
                      Copy Email
                    </button>
                  </div>
                </Col>

                {/* LinkedIn */}
                <Col xs={12} md={4}>
                  <div style={contactItemStyle}>
                    <h5 style={contactTitleStyle}>LinkedIn</h5>

                    <p
                      style={{
                        ...contactTextStyle,
                        wordBreak: "break-word",
                      }}
                    >
                      linkedin.com/in/yuxinqian
                    </p>

                    <a
                      href="https://www.linkedin.com/in/yuxinqian/"
                      target="_blank"
                      rel="noreferrer"
                      style={buttonStyle}
                    >
                      Visit Profile
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </section>
      </Container>
    </Container>
  );
}

export default Home2;