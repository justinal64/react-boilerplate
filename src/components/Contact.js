import React, { Component } from "react";
import logo from "../logo.svg";
import "../App.css";

class Contact extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the Contact Page</h2>
        </div>
        <p className="App-Contact">
          To get started, edit <code>src/Contact.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Contact;
