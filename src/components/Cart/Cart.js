import React from "react";
import { StyledCart } from "./StyledCart";

function Cart() {
  return (
    <StyledCart>
      <div>
        <nav className="navbar navbar-expand-lg nav">
          <div className="container-fluid d-flex justify-content-between">
            <a className="navbar-brand title" href="/">
              Cheesy Slice
            </a>
          </div>
        </nav>
      </div>
    </StyledCart>
  );
}

export default Cart;
