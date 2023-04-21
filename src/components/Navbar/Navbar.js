import React from "react";
import { StyledNavbar } from "./StyledNavbar";
// import "font-awesome/css/font-awesome.min.css";

function Navbar() {
  return (
    <StyledNavbar>
      <div>
        <nav className="navbar navbar-expand-lg nav">
          <div className="container-fluid d-flex justify-content-between">
            <a className="navbar-brand title" href="/">
              Cheesy Slice
            </a>
            <div>
              <i className="fa-solid fa-cart-shopping cart"></i>
            </div>
          </div>
        </nav>
      </div>
    </StyledNavbar>
  );
}

export default Navbar;
