import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg border-bottom p-3" >
      <div class="container-fluid px-5 p-1">
        <Link class="navbar-brand px-4 active" to="/" style={{opacity:"1"}}>
            <img src="media/images/logo.svg" alt="Logo" style={{width: "25%"}}/>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
            <li class="nav-item px-3">
              <Link class="nav-link active" to="/signup">
                Signup
              </Link>
            </li>
            <li class="nav-item px-3">
              <Link class="nav-link active" to="/about">
                About
              </Link>
            </li>
            <li class="nav-item px-3">
              <Link class="nav-link active" to="/products">
                Products
              </Link>
            </li>
            <li class="nav-item px-3">
              <Link class="nav-link active" to="/pricing">
                Pricing
              </Link>
            </li>
            <li class="nav-item px-3">
              <Link class="nav-link active" to="/support">
                Support
              </Link>
            </li> 
            <li class="nav-item px-3">
              <Link class="nav-link active" to="https://zerodha-dashboard-uf0g.onrender.com">
                <img src="/logo.png" alt="" style={{height:"22px"}}/>
              </Link>
            </li> 
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
