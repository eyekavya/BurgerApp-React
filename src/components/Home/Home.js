import React, { useState } from "react";
import Tab from "../Tab/Tab";
import Tagline from "../Tagline/Tagline";
import Pizza from "../Pizza/Pizza";
import Topping from "../Topping/Topping";
import Size from "../Size/Size";
import Cheese from "../Cheese/Cheese";
import CartBtn from "../CartBtn/CartBtn";

function Home() {
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

  const [size, setSize] = useState("regular");

  const [cheese, setCheese] = useState(false);

  return (
    <div className="flex">
      <div className="content-section">
        <Tagline />
        <Tab setActiveTab={setActiveTab} activeTab={activeTab} />
        {activeTab === "toppings" && (
          <Topping toppings={toppings} setToppings={setToppings} />
        )}

        {activeTab === "sizes" && <Size size={size} setSize={setSize} />}
        {activeTab === "cheese" && (
          <Cheese cheese={cheese} setCheese={setCheese} />
        )}
        <CartBtn />
      </div>
      <div className="image-section">
        <Pizza toppings={toppings} />
      </div>
    </div>
  );
}

export default Home;
