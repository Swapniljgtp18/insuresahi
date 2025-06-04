import React from "react";
import { useState } from "react";
import { Card, Form } from "react-bootstrap";
import "../../styles/forms2/multiStepForm2.css";

const WelcomeStep2 = ({ nextStep, formData, handleChange }) => {

  const selectGender = (gender) => {
    handleChange({ target: { name: "gender", value: gender } });
  };

  const [isDateFocused, setIsDateFocused] = useState(false);


  return (
    <div className="form-wrapper2">
      <Card className="step-card2">

        <h2 className="text-center welcome-heading2">
          ₹<span className="highlight">1 Crore</span> Life Cover Starting From
          <span className="highlight"> ₹485/Month</span>
        </h2>

        {/* 🔹 Form Fields */}
        <Form>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="input-field2"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type={isDateFocused ? "date" : "text"}
              placeholder="Date of Birth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onFocus={() => setIsDateFocused(true)}
              onBlur={(e) => {
                if (!e.target.value) setIsDateFocused(false);
              }}
              onChange={handleChange}
              className="input-field2"
            />
          </Form.Group>


          <Form.Group className="mb-3">
            <Form.Control
              type="tel"
              placeholder="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="input-field2"
            />
          </Form.Group>

          {/* 🔹 Gender Selection */}
          <div className="gender-selection2">
            <label className="gender-label">Gender:</label>
            <button
              type="button"
              className={`gender-btn2 ${formData.gender === "Male" ? "selected" : ""}`}
              onClick={() => selectGender("Male")}
            >
              Male
            </button>
            <button
              type="button"
              className={`gender-btn2 ${formData.gender === "Female" ? "selected" : ""}`}
              onClick={() => selectGender("Female")}
            >
              Female
            </button>
          </div>

          {/* 🔹 Continue Button */}
          <div className="button-container2 center-btn">
            <button onClick={nextStep} className="steps-next-btn2" type="button">
              Continue
            </button>
          </div>

          {/* 🔹 Terms & Conditions */}
          <p className="terms-text2 text-center">
            By Clicking On "Continue", I Agree To The{" "}
            <span className="terms-link2">Terms & Conditions</span> & Disclaimers
          </p>
        </Form>
      </Card>
    </div>
  );
};

export default WelcomeStep2;