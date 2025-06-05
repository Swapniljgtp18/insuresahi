import React, { useState } from "react";
import { Card } from "react-bootstrap";
import "../../styles/forms2/multiStepForm2.css"; // Importing CSS

const StepOne2 = ({ nextStep, formData, handleChange }) => {
  const [errors, setErrors] = useState({});

  const handleSelection = (type) => {
    handleChange({ target: { name: "employmentType", value: type } });
    if (errors.employmentType) {
      setErrors((prev) => ({ ...prev, employmentType: "" }));
    }
  };

  const handleNext = () => {
    const newErrors = {};
    if (!formData.employmentType) {
      newErrors.employmentType = "Please select an employment type";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      nextStep();
    }
  };

  return (
    <div className="form-wrapper2">
      <Card className="step-card2">
        {/* 🔹 Progress Bar */}
        <div className="progress-container2">
          <div className="step2 active"></div>
          <div className="step2"></div>
          <div className="step2"></div>
          <div className="step2"></div>
          <div className="step2"></div>
        </div>

        {/* 🔹 Heading */}
        <h4 className="text-center step-heading2">
          Select Employment Type
          {errors.employmentType && (
            <span style={{ color: "red", fontSize: "14px", marginLeft: "10px" }}>
              {errors.employmentType}
            </span>
          )}
        </h4>

        {/* 🔹 Selection Buttons */}
        <div className="selection-container2">
          <button
            className={`selection-btn2 ${formData.employmentType === "Salaried" ? "selected" : ""}`}
            onClick={() => handleSelection("Salaried")}
            type="button"
          >
            Salaried
          </button>
          <button
            className={`selection-btn2 ${formData.employmentType === "Self Employed" ? "selected" : ""}`}
            onClick={() => handleSelection("Self Employed")}
            type="button"
          >
            Self Employed
          </button>
        </div>

        {/* 🔹 Next Button */}
        <div className="button-container2 single-btn">
          <button onClick={handleNext} className="steps-next-btn2" type="button">
            Next
          </button>
        </div>
      </Card>
    </div>
  );
};

export default StepOne2;
