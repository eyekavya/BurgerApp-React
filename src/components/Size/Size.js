import React from "react";
import { StyledSize } from "./StyledSize";

function Size() {
  return (
    <StyledSize>
      <div className="wrapper">
        <h3 className="sub-heading">Choose Size</h3>
        <div className="flex-size">
          <div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">
                Junior
              </label>
            </div>
          </div>
          <div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                Mega
              </label>
            </div>
          </div>
          <div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                Monster
              </label>
            </div>
          </div>
        </div>
      </div>
    </StyledSize>
  );
}

export default Size;
