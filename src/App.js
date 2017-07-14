import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Intro from "./components/Intro";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

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
