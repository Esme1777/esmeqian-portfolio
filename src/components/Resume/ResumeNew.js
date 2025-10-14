import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function ResumeNew() {
  const pdfPath = "/esmeqian-resume.pdf"; 

  return (
    <Container fluid className="resume-section" style={{ paddingTop: "100px" }}>
      <Container>
        <Row className="justify-content-center" style={{ marginBottom: "16px" }}>
          <Col md="auto">
            <Button as="a" href={pdfPath} target="_blank" rel="noreferrer" className="btn-primary">
              View in new tab
            </Button>
          </Col>
          <Col md="auto">
            <Button as="a" href={pdfPath} download className="btn-primary">
              Download PDF
            </Button>
          </Col>
        </Row>

                <Row className="justify-content-center">
          <Col md={10}>
            <div
              style={{
                position: "relative",
                paddingBottom: "141%", 
                height: 0,
                overflow: "hidden",
                borderRadius: "12px",
                boxShadow: "0 8px 22px rgba(0,0,0,.25)",
              }}
            >
              <iframe
                title="Resume"
                src={pdfPath}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                  background: "white",
                }}
              />
            </div>
            <p style={{ textAlign: "center", marginTop: "12px", opacity: 0.8 }}>
              If the preview doesn’t load, <a href={pdfPath} target="_blank" rel="noreferrer">open the PDF</a>.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ResumeNew;
