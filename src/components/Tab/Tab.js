import React from "react";
import { StyledTab } from "./StyledTab";

function Tab() {
  return (
    <StyledTab>
      <div className="wrapper">
        <button className="tab-btn topping-btn">Toppings</button>
        <button className="tab-btn size-btn">Size</button>
        <button className="tab-btn cheese-btn">Cheese</button>
      </div>
    </StyledTab>
  );
}

export default Tab;
