import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Tagline from "./components/Tagline/Tagline";
import Pizza from "./components/Pizza/Pizza";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <div className="flex">
          <div className="content-section">
            <Tagline />
          </div>
          <div className="image-section">
            <Pizza />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
