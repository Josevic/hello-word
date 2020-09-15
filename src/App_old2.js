import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Saludar from "./components/Saludar";

function App() {
  const user = {
    nombre: "Jose Vicente de la Cruz",
    deparment: "Contabilidad",
    edad: 47,
  };
  const saludarFn = (nom) => {
    console.log("Hola " + nom);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludar userInfo={user} saludarFn={saludarFn} />
      </header>
      REACT EN ACCION
    </div>
  );
}

export default App;
