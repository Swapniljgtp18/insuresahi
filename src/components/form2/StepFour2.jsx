import React, { useState } from "react";
import { Card } from "react-bootstrap";
import "../../styles/forms2/multiStepForm2.css"; // Import CSS

const StepFour2 = ({ nextStep, prevStep, formData, handleChange }) => {
  const [errors, setErrors] = useState({});

  const handleSelection = (option) => {
    handleChange({ target: { name: "smokeOrChew", value: option } });
    if (errors.smokeOrChew) {
      setErrors((prev) => ({ ...prev, smokeOrChew: "" }));
    }
  };

  const handleNext = () => {
    const newErrors = {};
    if (!formData.smokeOrChew) {
      newErrors.smokeOrChew = "Please select an option";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      nextStep();
    }
  };

  return (
    <div className="form-wrapper2">
      <Card className="step-card2">
        <div className="progress-container2">
          <div className="step2 active"></div>
          <div className="step2 active"></div>
          <div className="step2 active"></div>
          <div className="step2 active"></div>
          <div className="step2"></div>
        </div>

        <h4 className="text-center step-heading2">
          Do You Smoke Or Chew Tobacco
          {errors.smokeOrChew && (
            <span style={{ color: "red", fontSize: "14px", marginLeft: "10px" }}>
              {errors.smokeOrChew}
            </span>
          )}
        </h4>

        <div className="selection-container2">
          <button
            type="button"
            className={`selection-btn2 ${formData.smokeOrChew === "Yes" ? "selected" : ""}`}
            onClick={() => handleSelection("Yes")}
          >
            Yes
          </button>
          <button
            type="button"
            className={`selection-btn2 ${formData.smokeOrChew === "No" ? "selected" : ""}`}
            onClick={() => handleSelection("No")}
          >
            No
          </button>
        </div>

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

export default StepFour2;
