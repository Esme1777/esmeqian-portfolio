import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md="12" className="footer-copywright">
            <span>© {year} Esme Qian</span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
