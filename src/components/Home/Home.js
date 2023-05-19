import React, { useState } from "react";
import Tab from "../Tab/Tab";
import Tagline from "../Tagline/Tagline";
import Pizza from "../Pizza/Pizza";
import Topping from "../Topping/Topping";
import Size from "../Size/Size";
import Cheese from "../Cheese/Cheese";
import CartBtn from "../CartBtn/CartBtn";

function Home() {
  const [activeTab, setActiveTab] = useState("toppings");

  return (
    <div className="flex">
      <div className="content-section">
        <Tagline />
        <Tab setActiveTab={setActiveTab} activeTab={activeTab} />
        {activeTab === "toppings" && <Topping />}

        {activeTab === "sizes" && <Size />}
        {activeTab === "cheese" && <Cheese />}
        <CartBtn />
      </div>
      <div className="image-section">
        <Pizza />
      </div>
    </div>
  );
}

export default Home;
