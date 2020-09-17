import React, { Component } from "react";
import logo from "../logo.svg";

export default class Cabecera extends Component {
  render() {
    const { saludo } = this.props;
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {saludo}
        </a>
      </header>
    );
  }
}
