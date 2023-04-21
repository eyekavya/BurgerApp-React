import React from "react";
import { StyledTopping } from "./StyledTopping";

function Topping() {
  return (
    <StyledTopping>
      <div className="wrapper">
        <h3 className="sub-heading">Select Toppings</h3>
        <div className="flex-topping">
          <div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="paneer"
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Paneer
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="corn"
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Corn
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="onion"
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Onion
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="tomato"
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Tomato
              </label>
            </div>
          </div>
          <div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="mushroom"
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Mushroom
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="redpepper"
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Red Pepper
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="capsicum"
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Capsicum
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="jalapeno"
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Jalapeno
              </label>
            </div>
          </div>
        </div>
      </div>
    </StyledTopping>
  );
}

export default Topping;
