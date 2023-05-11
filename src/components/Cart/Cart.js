import React from "react";
import { StyledCart } from "./StyledCart";

function Cart() {
  return (
    <StyledCart>
      <div className="wrapper">
        <div class="container">
          <h2>Crust Me, You Knead This Pizza!</h2>
          <div className="pizza-item">
            <div className="pizza-desc">
              <h3>Pizza #1</h3>
              <p>Paneer, Corn, Red Pepper</p>
              <p>Super Yum</p>
              <p>Extra Cheese: Yup!</p>
            </div>
            <div className="pizza-price">
              <p>₹ 299</p>
            </div>
          </div>
          <div className="pizza-item">
            <div className="pizza-desc">
              <h3>Pizza #2</h3>
              <p>Paneer, Onion</p>
              <p>Happy Medium</p>
              <p>Extra Cheese: Nope!</p>
            </div>
            <div className="pizza-price">
              <p>₹ 249</p>
            </div>
          </div>
          <div className="total">
            <div className="total-desc">
              <p>SUB TOTAL</p>
              <p>TAX</p>
              <p>GRAND TOTAL</p>
            </div>
            <div className="total-price">
              <p>₹ 548</p>
              <p>₹ 51</p>
              <p>₹ 599</p>
            </div>
          </div>
          <div className="order-btn-container">
            <button className="btn-general">PLACE ORDER</button>
          </div>
        </div>
      </div>
    </StyledCart>
  );
}

export default Cart;
