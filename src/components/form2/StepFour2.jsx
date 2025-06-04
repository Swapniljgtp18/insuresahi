import React from "react";
import { Card } from "react-bootstrap";
import "../../styles/forms2/multiStepForm2.css"; // Import CSS

const StepFour2 = ({ nextStep, prevStep, formData, handleChange }) => {
  const handleSelection = (option) => {
    handleChange({ target: { name: "smokeOrChew", value: option } });
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

        <h4 className="text-center step-heading2">Do You Smoke Or Chew Tobacco</h4>

        <div className="selection-container2">
          <button
            className={`selection-btn2 ${formData.smokeOrChew === "Yes" ? "selected" : ""}`}
            onClick={() => handleSelection("Yes")}
          >
            Yes
          </button>
          <button
            className={`selection-btn2 ${formData.smokeOrChew === "No" ? "selected" : ""}`}
            onClick={() => handleSelection("No")}
          >
            No
          </button>
        </div>

        <div className="button-container2">
          <button onClick={prevStep} className="steps-back-btn2">Back</button>
          <button onClick={nextStep} className="steps-next-btn2">Next</button>
        </div>
      </Card>
    </div>
  );
};

export default StepFour2;
