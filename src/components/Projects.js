import React, { Component } from "react";
import logo from "../logo.svg";
import "../App.css";

class Projects extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the Projects Page</h2>
        </div>
        <p className="App-Projects">
          To get started, edit <code>src/Projects.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Projects;