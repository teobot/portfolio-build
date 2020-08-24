import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";

import Home from "../components/Home";
import Stuff from "../components/Stuff";
import Projects from "../components/Projects";

function AnimatedSwitch({ location }) {
  return (
    <Wrapper>
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={{ enter: 250, exit: 250 }}
          classNames={"fade"}
        >
          <div className="route-section w-100 h-100">
            <Switch location={location} className="w-100">
              <Route exact path="/" component={Home} />
              <Route path="/Projects" component={Projects} />
              <Route path="/stuff" component={Stuff} />
            </Switch>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  div.transition-group {
    position: relative;
    width: 100%;
  }
  div.route-section {
    position: absolute;
    left: 0;
  }
`;

export default withRouter(AnimatedSwitch);
