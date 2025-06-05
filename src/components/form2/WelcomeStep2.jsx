import React, { useState } from "react";
import { Card, Form } from "react-bootstrap";
import "../../styles/forms2/multiStepForm2.css";

const WelcomeStep2 = ({ nextStep, formData, handleChange }) => {
  const selectGender = (gender) => {
    handleChange({ target: { name: "gender", value: gender } });
  };

  const [isDateFocused, setIsDateFocused] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }

    if (!formData.dateOfBirth.trim()) {
      newErrors.dateOfBirth = "Date of Birth is required";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone Number is required";
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Enter a valid 10-digit phone number";
    }

    if (!formData.gender) {
      newErrors.gender = "Gender is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      nextStep();
    }
  };

  return (
    <div className="form-wrapper2">
      <Card className="step-card2">
        <h2 className="text-center welcome-heading2">
          ₹<span className="highlight">1 Crore</span> Life Cover Starting From
          <span className="highlight"> ₹485/Month</span>
        </h2>

        <Form>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder={errors.fullName ? errors.fullName : "Full Name"}
              className={`input-field2 ${errors.fullName ? "border-danger text-danger placeholder-red" : ""}`}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type={isDateFocused ? "date" : "text"}
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onFocus={() => setIsDateFocused(true)}
              onBlur={(e) => {
                if (!e.target.value) setIsDateFocused(false);
              }}
              onChange={handleChange}
              placeholder={errors.dateOfBirth ? errors.dateOfBirth : "Date of Birth"}
              className={`input-field2 ${errors.dateOfBirth ? "border-danger text-danger placeholder-red" : ""}`}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder={errors.phoneNumber ? errors.phoneNumber : "Phone Number"}
              className={`input-field2 ${errors.phoneNumber ? "border-danger text-danger placeholder-red" : ""}`}
            />
          </Form.Group>

          <div className="gender-selection2">
            <label className="gender-label">
              Gender:
              {errors.gender && (
                <span style={{ color: "red", fontSize: "14px", marginLeft: "8px" }}>
                  {errors.gender}
                </span>
              )}
            </label>
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

          <div className="button-container2 center-btn">
            <button onClick={handleNext} className="steps-next-btn2" type="button">
              Continue
            </button>
          </div>

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
