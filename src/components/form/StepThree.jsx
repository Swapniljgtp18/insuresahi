import React, { useState } from "react";
import { Form, Card } from "react-bootstrap";

const StepThree = ({ nextStep, prevStep, handleChange, formData = {} }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName?.trim()) {
      newErrors.fullName = "Full name is required";
    }

    const mobileRegex = /^[6-9]\d{9}$/; // Validates Indian mobile numbers

    if (!formData.mobileNumber?.trim()) {
      newErrors.mobileNumber = "Mobile number is required";
    } else if (!mobileRegex.test(formData.mobileNumber)) {
      newErrors.mobileNumber = "Enter a valid 10-digit number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (validate()) {
      nextStep();
    }
  };

  return (
    <Card className="step-card">
      <div className="progress-container">
        <div className="step active"></div>
        <div className="step active"></div>
        <div className="step active"></div>
        <div className="step"></div>
      </div>

      <h4 className="text-center mb-2">Save Your Progress</h4>
      <p className="text-center step-subtitle">
        Get to plans directly next time you visit us
      </p>

      <Form>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder={errors.fullName || "Your Full Name"}
            name="fullName"
            value={formData.fullName || ""}
            onChange={handleChange}
            className={`rounded-input ${errors.fullName ? "error-input" : ""}`}
            isInvalid={!!errors.fullName}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="tel"
            placeholder={errors.mobileNumber || "Enter Mobile Number"}
            name="mobileNumber"
            value={formData.mobileNumber || ""}
            onChange={handleChange}
            className={`rounded-input ${errors.mobileNumber ? "error-input" : ""}`}
            isInvalid={!!errors.mobileNumber}
          />
        </Form.Group>

        <div className="button-container">
          <button onClick={prevStep} className="steps-back-btn" type="button">
            Back
          </button>
          <button onClick={handleNext} className="steps-next-btn" type="button">
            Next
          </button>
        </div>
      </Form>
    </Card>
  );
};

export default StepThree;
