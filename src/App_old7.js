import React from "react";

import "./App.css";
import Saludar from "./components/Saludar";

function App() {
  const enviarSaludo = (nombre) => {
    console.log("Hola " + nombre);
  };
  return (
    <div className="App">
      <h1>Mi primer componente</h1>
      <Saludar nombre="Diana" apellidos="Becerra" enviarSaludo={enviarSaludo} />
      <Saludar nombre="Vicente" apellidos="Cruz" />
    </div>
  );
}

export default App;
