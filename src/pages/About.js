import React, { useState } from 'react';
import Wrapper from "../components/Wrapper/Wrapper";
import LineBreak from "../components/LineBreak/LineBreak";
import { Row, Col, Image } from "react-bootstrap";

function About() {
  const [about, setAbout] = useState({
    name: "Zan Hong Mok",
    image: "../images/profile-picture.jpg",
    occupation: "Soon-to-be Full Stack Developer",
    age: parseInt(new Date().getFullYear()) - 1992,
    address: "Unit 205, 1 Post Parade, St Clair, SA 5011",
    POB: "Kuala Lumpur, Malaysia",
    education: "Bachelor of Engineering (Mechanical and Sustainable Energy)",
    phone: "+61 411 857 714",
    email: "mokzanhong92@hotmail.com",
    resume: "../images/Zan Hong Mok - Resume .pdf"
  })

  return (
    <Wrapper>
      <Row>
        <Col md={12} className="text-info font-weight-bold">
          <h4>About</h4>
        </Col>
      </Row>
      <LineBreak />
      <Row>
        <Col md={4}>
          <Image
            className="float-left mb-3"
            src={about.image}
            style={{ maxWidth: "400px" }}
            alt="My Profile Pic"
            fluid
          />
        </Col>
        <Col md={8}>
          <h4>I'm <span className="font-weight-bold">{about.name}</span></h4>
          <h5>{about.occupation}</h5>
          <table className="table table-responsive-sm table-borderless">
            <tbody>
              <tr>
                <th scope="row">Age</th>
                <td>{about.age}</td>
              </tr>
              <tr>
                <th scope="row">Address</th>
                <td>{about.address}</td>
              </tr>
              <tr>
                <th scope="row">Place of Birth</th>
                <td>{about.POB}</td>
              </tr>
              <tr>
                <th scope="row">Education</th>
                <td>{about.education}</td>
              </tr>
              <tr>
                <th scope="row">Phone</th>
                <td>{about.phone}</td>
              </tr>
              <tr>
                <th scope="row">Email</th>
                <td>
                  <a href={"mailto: " + about.email}>{about.email}</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Resume</th>
                <td>
                  <a href={about.resume} target="_blank">Zan Hong Mok - Resume</a>
                </td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
    </Wrapper>

  )
}

export default About;