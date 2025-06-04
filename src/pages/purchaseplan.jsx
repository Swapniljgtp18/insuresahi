import React, { useState } from "react";
import { useLocation } from "react-router-dom"; // ✅ Import useLocation to get selected plan
import "../styles/purchaseplan.css"; // Import CSS

const PurchasePlan = () => {
  const location = useLocation();
  const plan = location.state?.plan || {}; // ✅ Get plan details from Providers.jsx

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="purchase-container">
      <div className="purchase-box">
        {/* Left Section - Form */}
        <div className="purchase-left">
          <h2>Great Choice</h2>
          <p>85% of the vehicles stolen in India are two-wheelers, let's protect yours!</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <button type="submit" className="hidden-submit">Submit</button>
          </form>
        </div>

        {/* Vertical Divider */}
        <div className="divider"></div>

        {/* Right Section - Policy Details */}
        <div className="purchase-right">
          <div className="car-details">
            <div>
              <h3>Hyundai Verna</h3>
              <p>GJ01AB1234 | 2022</p>
            </div>
            <img src="/images/car-icon.png" alt="Car Icon" className="car-icon" />
          </div>

          <div className="policy-details">
            <img src={plan.logo || "/images/default-insurance.png"} alt={plan.provider || "Insurance"} className="insurance-logo" />
            <p>{plan.provider || "Selected Provider"} - 1 Year Comprehensive</p>
            <p><strong>IDV:</strong> {plan.idv || "N/A"}</p>
          </div>

          <button className="policy-start-date">New Policy Start Date: 6 March, 2025</button>

          <div className="accident-insurance">
            <p>Accident Insurance For You Of ₹15 Lakhs</p>
            <button className="mandatory-btn">Mandatory By Law</button>
            <div className="purchaseplan-insurance-options">
              <span>✅ Digit - ₹1,250</span>
              <span>✅ Bajaj - ₹1,250</span>
              <span>✅ Reliance - ₹1,250</span>
            </div>
          </div>

          <div className="premium-details">
            <p><strong>Total Premium:</strong> ₹1,411</p>
            <p><strong>GST:</strong> ₹254</p>
            <hr />
            <p className="final-premium"><strong>Final Premium:</strong> {plan.price || "N/A"}</p>
          </div>

          <button className="buy-button">Buy Now for {plan.price || "N/A"}</button>
          <p className="terms">By clicking on Pay Now, I agree to the <a href="#">Terms & Conditions</a></p>
        </div>
      </div>
    </div>
  );
};

export default PurchasePlan;
