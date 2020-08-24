import React, { useState } from "react";

import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Me from "./components/Me";
import { Button } from "react-bootstrap";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const locations = [
    {
      nav: true,
      to: "/contact",
      name: "Contact",
      comp: <Contact dm={darkMode} />,
    },
    {
      nav: true,
      to: "/projects",
      name: "Projects",
      comp: <Projects dm={darkMode} />,
    },
    {
      nav: true,
      to: "/me",
      name: "Me",
      comp: <Me dm={darkMode} />,
    },
    {
      nav: false,
      to: "/",
      name: "Home",
      comp: <Home dm={darkMode} />,
    },
  ];
  const setDarkModeButton = (
    <Button
      size="sm"
      variant="outline-danger"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? "dark" : "light"} Mode
    </Button>
  );
  return (
    <div className={`App bg-${darkMode ? "dark" : "light"}`}>
      <NavBar
        darkMode={darkMode}
        darkModeButton={setDarkModeButton}
        locations={locations}
      />
      <Switch>
        {locations.map((obj, index) => (
          <Route key={index} path={obj.to}>
            {obj.comp}
          </Route>
        ))}
      </Switch>
    </div>
  );
}

export default App;
