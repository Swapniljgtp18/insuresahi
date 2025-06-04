import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="section-padding-none" >
      {/* style={{ borderTop: '0.5px solid white' }}> */}
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-6 footer-sec">
                <h5>INSURESAHI</h5>
                {/* <ul className="ml-0">
                  <li>
                    <NavLink to="/privacy">Privacy Policy</NavLink>
                  </li>
                  <li>
                    <NavLink to="/terms">Terms & Conditions</NavLink>
                  </li>
                  <li>
                    <NavLink to="/refund">Refund & Cancellation</NavLink>
                  </li>
                </ul> */}
              </div>
              <div className="col-lg-2 col-md-3 col-6 footer-sec">
                <h5>Useful Links</h5>
                <ul className="ml-0">
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">About Us</NavLink>
                  </li>
                  <li>
                    <NavLink to="/product">Our Products</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">Contact Us </NavLink>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-3 col-6 footer-sec">
                <h5>Insurance</h5>
                <ul className="ml-0">
                  <li>
                    <NavLink to="/health">Health Insurance</NavLink>

                  </li>
                  <li>
                    <NavLink to="/car">Car Insurance </NavLink>
                  </li>
                  <li>
                    <NavLink to="/life">Life Insurance</NavLink>

                  </li>
                  <li>
                    <NavLink to="/bike">Bike Insurance </NavLink>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-3 col-sm-6 footer-sec">
                <h5>Address</h5>
                {/* <h5>IRDAI REG: IMF07351120230639</h5> */}
                <p className="adres">
                  3010, (A1 Aerocity) NIBR Corporate Park Andheri - Kurla Road, Opp. Vaishali Hotel, Safed Pool, Kurla (W), Mumbai - 400072
                  {/* Flat No-15, B Wing Floor 2, Indra Darshan CHSL, Four Bungalows
                  Road, Andheri West Mumbai Maharashtra 400053 India. <br></br>
                  GST No: 27AAJCK7523Q1ZS */}
                </p>
              </div>
            </div>
          </div>
          <div className="container-fluid copyright">
            <div className="footer-links">
              <a href="/">@2025 InsureSahi</a>
              <a href="/cookie-settings">Cookie settings</a>
              <a href="/terms">Terms and conditions</a>
              <a href="/privacy">Privacy policy</a>

            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
