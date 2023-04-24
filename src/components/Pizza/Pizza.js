import React from "react";
import { StyledPizza } from "./StyledPizza";
import pizzaBase from "../../images/pizza-base.png";
import paneer from "../../images/toppings/paneer.png";
import corn from "../../images/toppings/corn.png";
import onion from "../../images/toppings/onion.png";
import tomato from "../../images/toppings/tomato.png";
import mushroom from "../../images/toppings/mushroom.png";
import redPepper from "../../images/toppings/redPepper.png";
import capsicum from "../../images/toppings/capsicum.png";
import jalapeno from "../../images/toppings/jalapeno.png";

function Pizza({ toppings }) {
  return (
    <StyledPizza>
      <div style={{ position: "relative" }}>
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

        {toppings.paneer && (
          <img
            src={paneer}
            alt="paneer"
            className="pizza-base-img"
            style={{
              position: "absolute",
              zIndex: "0",
              right: "60px",
              top: "16px",
            }}
          />
        )}

        {toppings.corn && (
          <img
            src={corn}
            alt="corn"
            className="pizza-base-img"
            style={{
              position: "absolute",
              zIndex: "0",
              right: "60px",
              top: "16px",
            }}
          />
        )}

        {toppings.onion && (
          <img
            src={onion}
            alt="onion"
            className="pizza-base-img"
            style={{
              position: "absolute",
              zIndex: "0",
              right: "60px",
              top: "16px",
            }}
          />
        )}

        {toppings.tomato && (
          <img
            src={tomato}
            alt="tomato"
            className="pizza-base-img"
            style={{
              position: "absolute",
              zIndex: "0",
              right: "60px",
              top: "16px",
            }}
          />
        )}

        {toppings.mushroom && (
          <img
            src={mushroom}
            alt="mushroom"
            className="pizza-base-img"
            style={{
              position: "absolute",
              zIndex: "0",
              right: "60px",
              top: "16px",
            }}
          />
        )}

        {toppings.redpepper && (
          <img
            src={redPepper}
            alt="redpepper"
            className="pizza-base-img"
            style={{
              position: "absolute",
              zIndex: "0",
              right: "60px",
              top: "16px",
            }}
          />
        )}

        {toppings.capsicum && (
          <img
            src={capsicum}
            alt="capsicum"
            className="pizza-base-img"
            style={{
              position: "absolute",
              zIndex: "0",
              right: "60px",
              top: "16px",
            }}
          />
        )}

        {toppings.jalapeno && (
          <img
            src={jalapeno}
            alt="jalapeno"
            className="pizza-base-img"
            style={{
              position: "absolute",
              zIndex: "0",
              right: "60px",
              top: "16px",
            }}
          />
        )}
      </div>
    </StyledPizza>
  );
}

export default Pizza;
