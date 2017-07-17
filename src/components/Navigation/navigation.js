import React, { Component } from "react";
import { Menu } from "antd";
import "./navigation.css";
class Navigation extends React.Component {
  state = {
    current: "mail"
  };
  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };
  render() {
    return (
      <Menu
        className="nav"
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="0">
          <a href="#" rel="noopener noreferrer">
            Intro
          </a>
        </Menu.Item>
        <Menu.Item key="1">
          <a href="#projects" rel="noopener noreferrer">
            Projects
          </a>
        </Menu.Item>
        <Menu.Item key="2">
          <a href="#contact" rel="noopener noreferrer">
            Contact
          </a>
        </Menu.Item>
      </Menu>
    );
  }
}

// ReactDOM.render(<App />, mountNode);
export default Navigation;
