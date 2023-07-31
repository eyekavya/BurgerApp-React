import React from "react";
import { StyledTab } from "./StyledTab";

function Tab({ activeTab, setActiveTab }) {
  const changeTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <StyledTab>
      <div className="wrapper btnCenter">
        <button
          // point to be noted my lord
          className={`tab-btn topping-btn ${
            activeTab === "toppings" ? "active" : ""
          }`}
          onClick={() => changeTab("toppings")}
        >
          Toppings
        </button>
        <button
          className={`tab-btn size-btn ${
            activeTab === "sizes" ? "active" : ""
          }`}
          onClick={() => changeTab("sizes")}
        >
          Size
        </button>
        <button
          className={`tab-btn cheese-btn ${
            activeTab === "cheese" ? "active" : ""
          }`}
          onClick={() => changeTab("cheese")}
        >
          Cheese
        </button>
      </div>
    </StyledTab>
  );
}

export default Tab;
