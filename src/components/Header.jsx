import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };
  return (
    <>
      {/* <nav className="navbar fixed-top navbar-expand-lg " >
        <div className="container-fluid">
          <div className="navbar-light bg-darks">
          
            <Link className="navbar-brand" to="/">
              <div className="navbar-logo">
                <img src="images/Logoinsuresahi.png" alt="Logo" className="logo-img" />
                <img src="images/INSURESAHI.png" alt="Site Name" className="site-name-img" />
              </div>
            </Link>


            <Link className="navbar-brand" to="/">
              <img src="images/head_logo.png" alt="" />
            </Link>
           
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={ToggleSidebar}
            >
              {isOpen === true ? (
                <h2>x</h2>
              ) : (
                <span className="navbar-toggler-icon"></span>
              )}
            </button>
            <div
              className={
                `sidebar ${isOpen === true ? "active" : ""}` +
                "collapse navbar-collapse"
              }
              id="navbarText"
            >
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/life">
                    Our Products
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/health">
                    Health
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/car">
                    Car
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/bike">
                    Bike
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                  ContactUs
                  </NavLink>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <div className="btn-group user">
                  <Link to="/login">
                    <button
                      type="button"
                      className="btn-link dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <img src="images/user.png" alt="" />
                    </button>
                  </Link>
                  <div className="dropdown-menu dropdown-menu-right">
                    <button className="dropdown-item" type="button">
                      Profile
                    </button>
                    <button className="dropdown-item" type="button">
                      My Policy
                    </button>
                    <button className="dropdown-item" type="button">
                      Logout
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </nav> */}


      <nav className="navbar navbar-expand-lg fixed-top bg-white">
        <div className="container">
          {/* Logo on the Left */}
          <Link className="navbar-brand" to="/">
            <div className="navbar-logo">
              <img src="images/Logoinsuresahi.png" alt="Logo" className="logo-img" />
              <img src="images/INSURESAHI.png" alt="Site Name" className="site-name-img" />
            </div>
          </Link>

          {/* Navbar Toggler for Mobile */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Items (Collapsible) */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About Us</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
                  Our Products
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/multistepform2">Health Insurance </a></li>
                  <li><a className="dropdown-item" href="/multistepform">Life Insurance</a></li>
                  <li><a className="dropdown-item" href="/carinsure">General Insurance</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact Us</a>
              </li>
            </ul>

            {/* Buttons inside the collapse div for proper placement on mobile */}
            {/* <div className="navbar-buttons">
              <button className="signup-button">Sign Up</button>
              <button className="login-button">Log In</button>
            </div> */}
          </div>
        </div>
      </nav>




      <Outlet />
    </>
  );
};

export default Header;