import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { Card, Accordion, Badge } from "react-bootstrap";

import { BiWorld } from "react-icons/all";

import Fade from "react-reveal/Fade";

import data from "./data/ProjectData";

function Projects(props) {
  const darkMode = props.dm;
  const ContainerFadeDelay = 150;
  const projects = data;
  return (
    <Container className="h-100 d-flex align-items-center custom-card-container" fluid="md">
      <div id="custom-card-column">
        <Accordion defaultActiveKey="0">
          {projects.map((obj, index) => (
            <ProjectCard
              obj={obj}
              key={index}
              darkMode={darkMode}
              index={index}
              delay={ContainerFadeDelay + index * 125}
            ></ProjectCard>
          ))}
        </Accordion>
      </div>
    </Container>
  );
}

function ProjectCard(props) {
  const date_start = props.obj.date_start;
  const date_end = props.obj.date_end;
  const description = props.obj.desc;
  const project_title = props.obj.project_local.title;
  const job_title = props.obj.job;
  const badgeLangs = props.obj.langs;
  const web_url = props.obj.project_local.local;
  const web_url_exist = web_url ? true : false;
  const darkMode = props.darkMode;
  return (
    <Fade delay={props.delay}>
      <Card bg={darkMode ? "dark" : "light"} text={darkMode ? "light" : "dark"} className="border-faint">
        <Accordion.Toggle as={Card.Header} eventKey={`"${props.index}"`}>
          <div className="w-100 d-flex justify-content-between">
            <span>{project_title}</span>
            <span>
              {web_url_exist ? (
                <a href={web_url}>
                  <BiWorld className="link-css" />
                </a>
              ) : null}
            </span>
          </div>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={`"${props.index}"`}>
          <Card.Body style={{backgroundColor: (darkMode ? "#495057" : "#DCDCDC")}}>
            <Card.Title className="">{job_title}</Card.Title>
            {badgeLangs.map((lang, index) => (
              <Badge pill className="mr-1" key={index} variant="success">
                {lang}
              </Badge>
            ))}
            <Badge pill className="mr-1" variant="primary">
              {date_start} - {date_end}
            </Badge>
            <hr />
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Fade>
  );
}

export default Projects;
