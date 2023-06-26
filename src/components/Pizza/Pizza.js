import React from "react";
import { StyledPizza } from "./StyledPizza";
import pizzaBase from "../../images/pizza-base.png";
import paneer from "../../images/toppings/paneer.png";
import corn from "../../images/toppings/corn.png";
import onion from "../../images/toppings/onion.png";
import tomato from "../../images/toppings/tomato.png";
import mushroom from "../../images/toppings/mushroom.png";
import redpepper from "../../images/toppings/redpepper.png";
import capsicum from "../../images/toppings/capsicum.png";
import jalapeno from "../../images/toppings/jalapeno.png";
import { usePizza } from "../../context/pizzaContext";

function Pizza() {
  const { pizza } = usePizza();
  const { toppings } = pizza;
  return (
    <StyledPizza>
      <div style={{ position: "relative" }}>
        <img src={pizzaBase} alt="pizza base" className="pizza-img base-img" />

        {toppings.paneer && (
          <img src={paneer} alt="paneer" className="pizza-img topping-img" />
        )}

        {toppings.corn && (
          <img src={corn} alt="corn" className="pizza-img topping-img" />
        )}

        {toppings.onion && (
          <img src={onion} alt="onion" className="pizza-img topping-img" />
        )}

        {toppings.tomato && (
          <img src={tomato} alt="tomato" className="pizza-img topping-img" />
        )}

        {toppings.mushroom && (
          <img
            src={mushroom}
            alt="mushroom"
            className="pizza-img topping-img"
          />
        )}

        {toppings.redpepper && (
          <img
            src={redpepper}
            alt="redpepper"
            className="pizza-img topping-img"
          />
        )}

        {toppings.capsicum && (
          <img
            src={capsicum}
            alt="capsicum"
            className="pizza-img topping-img"
          />
        )}

        {toppings.jalapeno && (
          <img
            src={jalapeno}
            alt="jalapeno"
            className="pizza-img topping-img"
          />
        )}
      </div>
    </StyledPizza>
  );
}

export default Pizza;
