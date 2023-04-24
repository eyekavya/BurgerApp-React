import React from "react";
import { StyledTab } from "./StyledTab";

function Tab({ setActiveTab }) {
  const changeTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <StyledTab>
      <div className="wrapper">
        <button
          className="tab-btn topping-btn"
          onClick={() => changeTab("toppings")}
        >
          Toppings
        </button>
        <button className="tab-btn size-btn" onClick={() => changeTab("sizes")}>
          Size
        </button>
        <button
          className="tab-btn cheese-btn"
          onClick={() => changeTab("cheese")}
        >
          Cheese
        </button>
      </div>
    </StyledTab>
  );
}

export default Tab;
