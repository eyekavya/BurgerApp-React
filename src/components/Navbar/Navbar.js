import React from "react";
import { StyledNavbar } from "./StyledNavbar";

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
              <i className="fa-solid fa-cart-shopping cart position-relative">
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  2
                </span>
              </i>
            </div>
          </div>
        </nav>
      </div>
    </StyledNavbar>
  );
}

export default Navbar;
