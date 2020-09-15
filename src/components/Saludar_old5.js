import React from "react";

export default function Saludar(props) {
  const { userInfo, saludarFn } = props;
  const { nombre = "Anónimo", edad } = userInfo;
  console.log(props);
  console.log(userInfo);
  return (
    <div>
      <button onClick={() => saludarFn(nombre, edad)}> Saludar</button>
    </div>
  );
}
