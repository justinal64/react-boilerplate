import React, { Component } from "react";
import "./App.css";
import Intro from "./sections/Intro/Intro";
import Contact from "./sections/Contact/Contact";
import Projects from "./sections/Projects/Projects";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Intro />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
