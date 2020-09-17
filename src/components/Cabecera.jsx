import React, { Component } from "react";
import logo from "../logo.svg";

export default class Cabecera extends Component {
  render() {
    const { saludar, click } = this.props;
    return (
      <header className="App-header">
        <img
          onClick={click}
          src={logo}
          className="App-logo"
          alt="logo"
          style={{ pointerEvents: "all" }}
        />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {saludar}
        </a>
      </header>
    );
  }
}
