import React from "react";
import { Container, Row } from "react-bootstrap";
import { Fade } from "react-reveal";

function Home(props) {
  const ContainerFadeDelay = 250;
  const bd = new Date("February 06, 98");
  const darkMode = props.dm;
  const badges = [
    {
      t: "Projects",
      n: "23+",
    },
    {
      t: "Projected Grade",
      n: "1-1",
    },
    {
      t: "Industry Experience",
      n: "2 years",
    },
  ];

  const age = () => {
    var ageDifMs = Date.now() - bd.getTime();
    var ageDate = new Date(ageDifMs);
    return ":lvl " + Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  return (
    <Container className={`text-${props.dm ? "light" : "dark"} h-100 d-flex align-items-center`} fluid>
      <Container>
        <Fade delay={ContainerFadeDelay}>
          <div className="p-1">
            <div className="main-text text-left titillium-text">
              Theo Clapperton
            </div>
            <div className="sub-text text-left titillium-text">
              Full Stack Developer,
            </div>
            <div className="lead-text">
              I'm a Software Engineer based in Manchester, Currently studying at
              Manchester Metropolitan University.
            </div>
          </div>
          <Row className="p-1 m-0 position-relative">
            {badges.map((obj, index) => (
              <Badge
                t={obj.t}
                n={obj.n}
                darkMode={darkMode}
                key={index}
                delay={400 + ContainerFadeDelay + index * 200}
                c={"#2f9e06"}
              />
            ))}
            <Fade delay={400 + ContainerFadeDelay + badges.length * 200} top>
              <div className="age-text">{age()}</div>
            </Fade>
          </Row>
        </Fade>
      </Container>
    </Container>
  );
}

function Badge(props) {
  return (
    <div className="badge-gutter h-100 text-light">
      <Fade delay={props.delay} className="w-100 h-100" top>
        <Row className="m-0 p-0 h-100 w-100">
          <div
            className={`p-1 titillium-text h-100`}
            style={{ backgroundColor: "#555" }}
          >
            {props.t}
          </div>
          <div
            className="p-1 titillium-text h-100"
            style={{ backgroundColor: `${props.c}` }}
          >
            {props.n}
          </div>
        </Row>
      </Fade>
    </div>
  );
}

export default Home;
