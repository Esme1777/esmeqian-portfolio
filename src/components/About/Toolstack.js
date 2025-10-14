import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPython,
  SiFigma,
  SiNotion,
  SiAdobephotoshop,
  SiSketch,
  SiAdobexd,
  SiAdobeillustrator,
} from "react-icons/si";

import tdLogo from "../../Assets/logos/touchdesigner.jpg";

function Toolstack() {
  const iconStyle = { width: "32px", height: "32px" }; 

  const IconItem = ({ Icon }) => (
    <Col xs={3} md={2} className="tech-icons" style={{ textAlign: "center", marginBottom: 16 }}>
      <Icon style={iconStyle} />
    </Col>
  );

  const ImgItem = ({ src, alt }) => (
    <Col xs={3} md={2} className="tech-icons" style={{ textAlign: "center", marginBottom: 16 }}>
      <img src={src} alt={alt} style={{ width: 32, height: 32, objectFit: "contain" }} />
    </Col>
  );

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "40px" }}>
      <IconItem Icon={SiPython} />
      <IconItem Icon={SiFigma} />
      <IconItem Icon={SiNotion} />
      <IconItem Icon={SiAdobephotoshop} />
      <IconItem Icon={SiSketch} />
      <IconItem Icon={SiAdobexd} />
      <IconItem Icon={SiAdobeillustrator} />
      <ImgItem src={tdLogo} alt="TouchDesigner" />
    </Row>
  );
}

export default Toolstack;
