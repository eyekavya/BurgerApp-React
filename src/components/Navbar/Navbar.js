import React, { useEffect, useState } from "react";
import { StyledNavbar } from "./StyledNavbar";
import { useLocation, useNavigate } from "react-router-dom";
import cart from "../../images/cart.png";
import menu from "../../images/menu.png";
import { usePizza } from "../../context/pizzaContext";

function Navbar() {
  const [cartDisabled, setCartDisabled] = useState(true);

  const { pizza } = usePizza();
  const { toppings } = pizza;

  const navigate = useNavigate();

  const location = useLocation();

  const handleRouting = (route) => {
    navigate(route);
  };

  useEffect(() => {
    let selectedTopping = Object.keys(toppings).filter((key) => {
      return toppings[key];
    });
    selectedTopping.length > 0 ? setCartDisabled(false) : setCartDisabled(true);
  }, [toppings]);

  return (
    <StyledNavbar>
      <div>
        <nav className="navbar navbar-expand-lg nav">
          <div className="container-fluid d-flex justify-content-between">
            <h2
              className="navbar-brand title"
              onClick={() => {
                handleRouting("/");
              }}
            >
              Cheesy Slice
            </h2>
            <div>
              {location.pathname !== "/cart" ? (
                <img
                  src={cart}
                  alt="cart"
                  className="cart"
                  onClick={() => {
                    handleRouting("/cart");
                  }}
                  disabled={cartDisabled}
                  style={cartDisabled ? { cursor: "not-allowed" } : {}}
                />
              ) : (
                <img
                  src={menu}
                  alt="menu"
                  onClick={() => {
                    handleRouting("/menu");
                  }}
                  className="menu"
                />
              )}
            </div>
          </div>
        </nav>
      </div>
    </StyledNavbar>
  );
}

export default Navbar;
