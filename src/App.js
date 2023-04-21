import React from "react";
import Navbar from "./components/Navbar/Navbar.js";
import Tagline from "./components/Tagline/Tagline.js";
import Pizza from "./components/Pizza/Pizza.js";
import "./App.css";
import Topping from "./components/Topping/Topping.js";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <div className="flex">
          <div className="content-section">
            <Tagline />
            <Topping />
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
