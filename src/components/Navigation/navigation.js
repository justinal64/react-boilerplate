import React from "react";
import { Row, Col } from "antd";
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
      <div className="nav">
        {/* <Row type="flex" align="middle">
          <Col span={1} offset={9}>
            <a href="#intro">Intro</a>
          </Col>
          <Col span={1} offset={1}>
            <a href="#projects">Projects</a>
          </Col>
          <Col span={1} offset={1}>
            <a href="#contact">Contact</a>
          </Col>
        </Row> */}
        <Row>
          <Col xs={8} sm={8} md={8} lg={8} xl={10}>
            <a href="#intro">Intro</a>
          </Col>
          <Col xs={8} sm={8} md={8} lg={8} xl={4}>
            <a href="#projects">Projects</a>
          </Col>
          <Col xs={8} sm={8} md={8} lg={8} xl={10}>
            <a href="#contact">Contact</a>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Navigation;
