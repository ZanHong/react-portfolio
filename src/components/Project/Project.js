import React from "react";
import { Card } from "react-bootstrap";
import "./style.css";

function Project(props) {
  return (
    <Card className="card mb-4 shadow-sm col-xs-6 col-md-4 mx-2">
      <a href={props.deployed} target="_blank" rel="noopener noreferrer">
        <img className="card-img-top" src={props.image} alt={props.title} />
      </a>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <a href={props.deployed} className="btn btn-dark mr-md-1" target="_blank" rel="noopener noreferrer">
          Deployed Link
              </a>
        <a href={props.repo} className="btn btn-dark" target="_blank" rel="noopener noreferrer">
          GitHub Repo
              </a>
      </Card.Body>
    </Card>
  )
}

export default Project;