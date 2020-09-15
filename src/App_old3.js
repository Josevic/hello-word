import React from "react";
import "./App.css";
import Cabeza from "./components/Cabeza";

function App() {
  const manejaClick = () => {
    console.log("He sido clickliado!!");
  };
  return (
    <div className="App">
      <header className="App-header">
        <Cabeza name={"Jose vicente"} manejaClick={manejaClick} />
      </header>
    </div>
  );
}

export default App;
