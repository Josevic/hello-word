import React, { Component } from "react";
import "./App.css";
import Cabecera from "./components/Cabecera";

class App extends Component {
  hacerClick = () => {
    console.log("Ha echo click en el Logo!!!");
  };
  render() {
    const saludo = "Bienvenido React.";
    return (
      <div className="App">
        <Cabecera saludar={saludo} click={this.hacerClick} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
export default App;
