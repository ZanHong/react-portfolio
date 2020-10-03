import React from "react";
import "./style.css";
import { Container } from "react-bootstrap";

function Wrapper(props) {
  return (
    <Container className="wrapper bg-light border shadow-lg py-md-4 px-md-4">
      {props.children}
    </Container>
  );
}

export default Wrapper;