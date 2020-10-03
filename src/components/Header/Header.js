import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

function Header() {
  return (
    <nav className="px-md-4 mb-4 align-items-center border-bottom shadow-sm">
      <Container>
        <Row>
          <Col md="auto" className="mr-md-auto my-md-4 text-center">
            <Link
              to="/"
              className="text-white p-2 text-center col-md-auto"
              style={{
                textDecoration: "none"
              }}
            >
              Zan Hong Mok
          </Link>
          </Col>
          <Col md="auto"></Col>
          <Col md="auto" className="my-3 my-md-4 pr-0 text-center">
            <Link
              to="/about"
              className="p-2 text-white"
              style={{
                textDecoration: "none"
              }}
            >
              About
            </Link>
            <Link
              to="/projects"
              className="p-2 text-white"
              style={{
                textDecoration: "none"
              }}
            >
              Projects
            </Link>
          </Col>
        </Row>
      </Container>
    </nav >
  );
}

export default Header;