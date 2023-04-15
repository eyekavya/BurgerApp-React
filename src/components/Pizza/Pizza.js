import React from "react";
import { StyledPizza } from "./StyledPizza";
import pizzaBase from "../../images/pizza-base.png";

function Pizza() {
  return (
    <StyledPizza>
      <div className="flex">
        <div className="tagline">
          <h1>Your Pizza, your way!</h1>
          <h2>Unless you like pineapple, then we've to talk.</h2>
        </div>
        <div>
          <img src={pizzaBase} alt="pizza base" className="pizza-base-img" />
        </div>
      </div>
    </StyledPizza>
  );
}

export default Pizza;
