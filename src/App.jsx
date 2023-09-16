import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import NavBar from "./components/NavBar/NavBar";
import Sponsors from "./components/Sponsors/Sponsors";
import Benefits from "./components/Benefits/Benefits";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bgColor">
        <NavBar />
        <HomePage />
      </div>
      <Sponsors />
      <Benefits />
      <Experience />
      <Footer />
    </>
  );
}

export default App;
