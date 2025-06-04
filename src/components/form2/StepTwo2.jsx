import React, { useState } from "react";
import { Card, Form } from "react-bootstrap";
import "../../styles/forms2/multiStepForm2.css"; // Import CSS



// 🔹 State to store income input
const StepTwo2 = ({ nextStep, prevStep, formData, handleChange }) => {


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
            placeholder="Income in Rupees"
            name="annualIncome"
            value={formData.annualIncome || ""}

            onChange={handleChange}
            className="input-field2"
          />


        </Form.Group>

        {/* 🔹 Navigation Buttons */}
        <div className="button-container2">
          <button onClick={prevStep} className="steps-back-btn2" type="button">
            Back
          </button>
          <button onClick={nextStep} className="steps-next-btn2" type="button">
            Next
          </button>
        </div>
      </Card>
    </div>
  );
};

export default StepTwo2;
