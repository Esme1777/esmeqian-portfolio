import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function ProjectCards({ imgPath, title, description, demoLink }) {
  const CardInner = (
    <Card
      className="project-card-view"
      style={{ cursor: demoLink ? "pointer" : "default" }}
    >
      <Card.Img
        variant="top"
        src={imgPath}
        alt={title}
        loading="lazy"
        className="img-fluid"
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {description && (
          <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>
        )}
        {/* No GitHub/Demo buttons */}
      </Card.Body>
    </Card>
  );

  return demoLink ? (
    <Link
      to={demoLink}
      style={{ textDecoration: "none", color: "inherit" }}
      aria-label={`Open ${title}`}
    >
      {CardInner}
    </Link>
  ) : (
    CardInner
  );
}

export default ProjectCards;
