import React from "react";
import { Form, Card } from "react-bootstrap";

const StepThree = ({ nextStep, prevStep, handleChange, formData = {} }) => { // 🔹 Default empty object to prevent undefined error
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
            placeholder="Your Full Name"
            name="fullName"
            value={formData.fullName || ""} // 🔹 Ensures value is never undefined
            onChange={handleChange}
            className="rounded-input"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="tel"
            placeholder="Enter Mobile Number"
            name="mobileNumber"
            value={formData.mobileNumber || ""} // 🔹 Ensures value is never undefined
            onChange={handleChange}
            className="rounded-input"
          />
        </Form.Group>

        <div className="button-container">
          <button onClick={prevStep} className="steps-back-btn" type="button">
            Back
          </button>
          <button onClick={nextStep} className="steps-next-btn" type="button">
            Next
          </button>
        </div>
      </Form>
    </Card>
  );
};

export default StepThree;
