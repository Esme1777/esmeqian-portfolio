import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProjectCards({ imgPath, title, description, demoLink, isBlog = false }) {
  return (
    <Card className="project-card-view">
      {imgPath && (
        <Card.Img
          variant="top"
          src={imgPath}
          alt={title}
          className="card-img-top"
        />
      )}

      <Card.Body>
        <Card.Title style={{ textAlign: "center" }}>{title}</Card.Title>

        {description && (
          <Card.Text className="project-desc">{description}</Card.Text>
        )}

        {demoLink && (
          <div style={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
            <Button variant="primary" href={demoLink} target="_blank" rel="noreferrer">
              {isBlog ? "Read Blog" : "View Case"}
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;

