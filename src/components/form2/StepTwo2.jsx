import React, { useState } from "react";
import { Card, Form } from "react-bootstrap";
import "../../styles/forms2/multiStepForm2.css"; // Import CSS

const StepTwo2 = ({ nextStep, prevStep, formData, handleChange }) => {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.annualIncome || formData.annualIncome.toString().trim() === "") {
      newErrors.annualIncome = "Annual Income is required";
    } else if (Number(formData.annualIncome) <= 0) {
      newErrors.annualIncome = "Income must be greater than 0";
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
        {/* 🔹 Progress Bar */}
        <div className="progress-container2">
          <div className="step2 active"></div>
          <div className="step2 active"></div>
          <div className="step2"></div>
          <div className="step2"></div>
          <div className="step2"></div>
        </div>

        {/* 🔹 Heading */}
        <h4 className="text-center step-heading2">Enter Your Annual Income</h4>

        {/* 🔹 Input Field */}
        <Form.Group className="input-container2">
          <Form.Control
            type="number"
            placeholder={errors.annualIncome ? errors.annualIncome : "Income in Rupees"}
            name="annualIncome"
            value={formData.annualIncome || ""}
            onChange={handleChange}
            className={`input-field2 ${errors.annualIncome ? "border-danger text-danger placeholder-red" : ""}`}
          />
        </Form.Group>

        {/* 🔹 Navigation Buttons */}
        <div className="button-container2">
          <button onClick={prevStep} className="steps-back-btn2" type="button">
            Back
          </button>
          <button onClick={handleNext} className="steps-next-btn2" type="button">
            Next
          </button>
        </div>
      </Card>
    </div>
  );
};

export default StepTwo2;
