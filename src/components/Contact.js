import React from "react";
import Container from "react-bootstrap/Container";
import Slide from "react-reveal/Slide";
import Row from "react-bootstrap/Row";
import { Col, Card } from "react-bootstrap";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/all";
import { Fade, Zoom } from "react-reveal";

function Contact(props) {
  const ContainerSlideDelay = 250;
  const cards = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <Container className="h-100 d-flex align-items-center justify-content-center">
      <div className="text-white text-center container-holder">
        <Row className="d-flex justify-content-center">
          {cards.map((obj, index) => (
            <NeuCard key={index} index={index} delay={250 + index * 250} />
          ))}
        </Row>
      </div>
    </Container>
  );
}

function NeuCard(props) {
  const icons = [
    <AiOutlineMail />,
    <AiOutlinePhone />,
    <AiOutlineGithub />,
    <AiOutlineLinkedin />,
  ];
  return (
    <Zoom delay={props.delay}>
      <div className="neu-card d-flex justify-content-center align-items-center">
        {icons[Math.floor(Math.random() * icons.length)]}
      </div>
    </Zoom>
  );
}

export default Contact;
