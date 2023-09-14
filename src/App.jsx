import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import NavBar from "./components/NavBar/NavBar";
import Sponsors from "./components/Sponsors/Sponsors";
import Benefits from "./components/Benefits/Benefits";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <NavBar />
        <HomePage />
      </div>
      <Sponsors />
      <Benefits />
    </>
  );
}

export default App;
