import React, { useState } from 'react';
import Wrapper from "../components/Wrapper/Wrapper";
import LineBreak from "../components/LineBreak/LineBreak";
import Project from "../components/Project/Project";
import projects from "../utils/projects.json"
import { Row, Col } from "react-bootstrap";

function Portfolio() {
  const [apps, setApps] = useState([...projects])

  return (
    <Wrapper>
      <Row>
        <Col md={12} className="text-info font-weight-bold">
          <h4>Portfolio</h4>
        </Col>
      </Row>
      <LineBreak />
      <Row className="justify-content-md-center">
        {/* <Col xs={6} md={4}> */}
        {apps.map(item => (
          <Project
            key={item.id}
            title={item.title}
            deployed={item.deployed}
            repo={item.repo}
            image={item.image}
          />
        ))}
        {/* </Col> */}
      </Row>
    </Wrapper>

  )
}

export default Portfolio;