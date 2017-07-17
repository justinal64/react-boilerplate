import React, { Component } from "react";
import "./navigation.css";
class Navigation extends Component {
  render() {
    return (
      <ul className="nav">
        <li>
          <a href="#intro">Intro</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    );
  }
}

export default Navigation;
