import React from "react";
import { StyledCheese } from "./StyledCheese";

function Cheese() {
  return (
    <StyledCheese>
      <div className="wrapper">
        <h3 className="sub-heading">Extra Cheese</h3>
        <div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value="cheese"
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Say Cheese! Add extra please!
            </label>
          </div>
        </div>
      </div>
    </StyledCheese>
  );
}

export default Cheese;
