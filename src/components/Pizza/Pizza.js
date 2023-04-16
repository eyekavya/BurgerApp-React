import React from "react";
import { StyledPizza } from "./StyledPizza";
import pizzaBase from "../../images/pizza-base.png";
import onion from "../../images/toppings/onion.png";
import tomato from "../../images/toppings/tomato.png";
import capsicum from "../../images/toppings/capsicum.png";
import redPepper from "../../images/toppings/redPepper.png";
import paneer from "../../images/toppings/paneer.png";
import mushroom from "../../images/toppings/mushroom.png";
import corn from "../../images/toppings/corn.png";

function Pizza() {
  return (
    <StyledPizza>
      <div style={{ position: "relative" }}>
        {/* <img
            src={mushroom}
            alt="pizza base"
            className="pizza-base-img"
            style={{
              position: "absolute",
              zIndex: "0",
              right: "60px",
              top: "16px",
            }}
          /> */}
        <img
          src={onion}
          alt="pizza base"
          className="pizza-base-img"
          style={{
            position: "absolute",
            zIndex: "0",
            right: "60px",
            top: "16px",
          }}
        />
        <img
          src={tomato}
          alt="pizza base"
          className="pizza-base-img"
          style={{
            position: "absolute",
            zIndex: "0",
            right: "60px",
            top: "16px",
          }}
        />
        <img
          src={capsicum}
          alt="pizza base"
          className="pizza-base-img"
          style={{
            position: "absolute",
            zIndex: "0",
            right: "60px",
            top: "16px",
          }}
        />
        {/* <img
            src={redPepper}
            alt="pizza base"
            className="pizza-base-img"
            style={{
              position: "absolute",
              zIndex: "0",
              right: "60px",
              top: "16px",
            }}
          /> */}
        <img
          src={pizzaBase}
          alt="pizza base"
          className="pizza-base-img"
          style={{
            position: "absolute",
            zIndex: "-999",
            right: "0",
          }}
        />
        <img
          src={paneer}
          alt="pizza base"
          className="pizza-base-img"
          style={{
            position: "absolute",
            zIndex: "0",
            right: "60px",
            top: "16px",
          }}
        />

        {/* <img
            src={corn}
            alt="pizza base"
            className="pizza-base-img"
            style={{
              position: "absolute",
              zIndex: "0",
              right: "60px",
              top: "16px",
            }}
          /> */}
      </div>
    </StyledPizza>
  );
}

export default Pizza;
