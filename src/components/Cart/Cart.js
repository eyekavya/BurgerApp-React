import React from "react";
import { StyledCart } from "./StyledCart";
import { usePizza } from "../../context/pizzaContext";

function Cart() {
  const { pizza, toppingPrice } = usePizza();

  const { toppings, size, cheese } = pizza;

  return (
    <StyledCart>
      <div className="wrapper">
        <div className="container">
          <h2>Crust Me, You Knead This Pizza!</h2>
          <div className="pizza-item-container">
            <div className="pizza-item">
              <div className="pizza-desc">
                <h3>
                  Your Custom Pizza
                  <i className="fa-sharp fa-solid fa-xmark"></i>
                </h3>
                <p style={{ marginBottom: "0.5rem" }}>
                  {Object.entries(toppings)
                    .filter(([key, value]) => value === true)
                    .map((e, i, a) => (
                      <span
                        key={i}
                        style={{
                          lineHeight: "1.5rem",
                          display: "inline-block",
                        }}
                      >
                        {e}
                        {a.length - 1 !== i && ","} &nbsp;
                      </span>
                    ))}
                </p>

                <p style={{ textTransform: "capitalize" }}>{size}</p>
                <p>Extra Cheese: {cheese ? "Yup!" : "Nope!"}</p>
              </div>
              <div className="pizza-price">
                <p>{toppingPrice}</p>
              </div>
            </div>
          </div>

          <div className="total">
            <div className="total-desc">
              <p>SUB TOTAL</p>
              <p>TAX</p>
              <p className="grand-total">GRAND TOTAL</p>
            </div>
            <div className="total-price">
              <p>₹ 548</p>
              <p>₹ 51</p>
              <p className="grand-total">₹ 599</p>
            </div>
          </div>
          <div className="order-btn-container">
            <button
              className="btn-general"
              // onClick={calcToppingPrice}
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </StyledCart>
  );
}

export default Cart;
