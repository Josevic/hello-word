import React, { Component } from "react";
import "./App.css";
import Cabecera from "./components/Cabecera";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cabecera saludo={"Bienvenido React"} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
export default App;
