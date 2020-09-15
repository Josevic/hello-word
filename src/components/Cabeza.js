import React from "react";
import logo from "../logo.svg";

export default function Cabeza(props) {
  console.log(props);

  return (
    <>
      <img
        onClick={props.manejaClick}
        src={logo}
        className="App-logo"
        alt="logo"
        style={{ pointerEvents: "all" }}
      />
      <h1>{props.name}</h1>
    </>
  );
}
