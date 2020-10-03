import React from 'react';
import Wrapper from "../components/Wrapper/Wrapper";
import LineBreak from "../components/LineBreak/LineBreak";
import { Row, Col } from "react-bootstrap";

function Portfolio() {
  return (
    <Wrapper>
      <Row>
        <Col md={12} className="text-info font-weight-bold">
          <h4>Contact</h4>
        </Col>
      </Row>
      <LineBreak />
      <form>
        <div className="form-group">
          <label>Name</label>
          <input type="email" className="form-control" placeholder="John Smith" />
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input type="email" className="form-control" placeholder="name@example.com" />
        </div>
        <div className="form-group">
          <label>Message Me</label>
          <textarea className="form-control" rows="7"
            placeholder="Ask me anything!"></textarea>
        </div>
        <button type="submit" className="btn btn-dark">Submit</button>
        <br /><br />
      </form>
    </Wrapper>
  )
}

export default Portfolio;