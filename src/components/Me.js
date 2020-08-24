import React, { Component } from "react";

import { Container } from "react-bootstrap";

export class Me extends Component {
  render() {
    const darkMode = this.props.dm;
    const textColor = this.props.dm ? "light" : "dark";
    const bgColor = this.props.dm ? "dark" : "light";
    return (
      <Container
        className="h-100 d-flex align-items-center custom-card-container"
        fluid="md"
      >
        <div id="custom-card-column" className={`text-${textColor}`}>
          <h1>Heading1</h1>
          <h2>Heading2</h2>
        </div>
      </Container>
    );
  }
}

export default Me;
