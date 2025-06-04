import React, { useState } from "react";
import { Card } from "react-bootstrap";
import "../../styles/forms2/multiStepForm2.css"; // Import CSS

const StepThree2 = ({ nextStep, prevStep, formData, handleChange }) => {
  const handleSelection = (level) => {
    handleChange({ target: { name: "educationalQualification", value: level } });
  };


  return (
    <div className="form-wrapper2">
      <Card className="step-card2">
        {/* 🔹 Progress Bar */}
        <div className="progress-container2">
          <div className="step2 active"></div>
          <div className="step2 active"></div>
          <div className="step2 active"></div>
          <div className="step2"></div>
          <div className="step2"></div>
        </div>

        {/* 🔹 Heading */}
        <h4 className="text-center step-heading2">Select Educational Qualification</h4>

        {/* 🔹 Selection Buttons */}
        <div className="selection-container2 grid-layout">
          <button
            className={`selection-btn2 ${formData.educationalQualification === "College Graduate & Above" ? "selected" : ""}`}
            onClick={() => handleSelection("College Graduate & Above")}
          >
            College Graduate & Above
          </button>
          <button
            className={`selection-btn2 ${formData.educationalQualification === "12th Pass" ? "selected" : ""}`}
            onClick={() => handleSelection("12th Pass")}
          >
            12th Pass
          </button>
          <button
            className={`selection-btn2 ${formData.educationalQualification === "10th Pass" ? "selected" : ""}`}
            onClick={() => handleSelection("10th Pass")}
          >
            10th Pass
          </button>
          <button
            className={`selection-btn2 ${formData.educationalQualification === "Below 10th" ? "selected" : ""}`}
            onClick={() => handleSelection("Below 10th")}
          >
            Below 10th
          </button>
        </div>

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

export default StepThree2;
