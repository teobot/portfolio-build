import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import sigInvert from "../img/sig-invert.png";
import sig from "../img/sig.png";

function NavBar(props) {
  const locations = props.locations.reverse().filter(function(el) { return el.nav; });
  const darkMode = props.darkMode;
  return (
    <Navbar
      collapseOnSelect={true}
      expand="sm"
      bg={darkMode ? "dark" : "light"}
      variant={darkMode ? "dark" : "light"}
      className="p-3"
      id="navbar"
    >
      <NavLink to="/">
        <Navbar.Brand>
          <img
            src={darkMode ? sigInvert : sig}
            height="50"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
      </NavLink>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        className={`bg-${darkMode ? "dark" : "light"} p-3`}
        id="responsive-navbar-nav"
      >
        <Nav className="mr-auto"></Nav>
        {props.darkModeButton}
        <Nav>
          {locations.map((obj, index) => (
            <CustomLink
              darkMode={darkMode}
              key={index}
              index={index}
              object={obj}
            />
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

function CustomLink(props) {
  const to = props.object.to;
  const name = props.object.name;
  const darkMode = props.darkMode;
  return (
    <Nav.Link eventKey={`${props.index}`}>
      <NavLink
        activeClassName={darkMode ? "selected-dark" : "selected-light"}
        exact
        className={`nav-link nav-hover-${darkMode ? "dark" : "light"}`}
        to={to}
      >
        <span className="poppins-text">{name}</span>
      </NavLink>
    </Nav.Link>
  );
}

export default NavBar;
