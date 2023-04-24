import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.js";
import Tagline from "./components/Tagline/Tagline.js";
import Pizza from "./components/Pizza/Pizza.js";
import Topping from "./components/Topping/Topping.js";
import Size from "./components/Size/Size.js";
import Cheese from "./components/Cheese/Cheese.js";
import Tab from "./components/Tab/Tab.js";

function App() {
  const [toppings, setToppings] = useState({
    paneer: false,
    corn: false,
    onion: false,
    tomato: false,
    mushroom: false,
    redpepper: false,
    capsicum: false,
    jalapeno: false,
  });
  const [activeTab, setActiveTab] = useState("toppings");
  return (
    <>
      <div>
        <Navbar />
        <div className="flex">
          <div className="content-section">
            <Tagline />
            <Tab setActiveTab={setActiveTab} activeTab={activeTab} />
            {activeTab === "toppings" && (
              <Topping toppings={toppings} setToppings={setToppings} />
            )}

            {activeTab === "sizes" && <Size />}
            {activeTab === "cheese" && <Cheese />}
          </div>
          <div className="image-section">
            <Pizza toppings={toppings} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
