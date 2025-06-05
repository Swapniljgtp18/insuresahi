import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";

const StepOne = ({ nextStep, handleChange, formData, chooseMembers }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    chooseMembers.forEach((member) => {
      const key = member.toLowerCase().replace(/ /g, "");
      const age = formData[key];
      if (!age || isNaN(age) || age < 0 || age > 120) {
        newErrors[key] = "Please enter a valid age ";
      }
    });
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
        <div className="step"></div>
        <div className="step"></div>
        <div className="step"></div>
      </div>

      <h4 className="text-center mb-3">Select Age Of Covered Member(s)</h4>
      <Form>
        <div className="step-age-inputs">
          {chooseMembers.map((member) => {
            const inputName = member.toLowerCase().replace(/ /g, "");
            return (
              <Form.Group className="mb-3" key={member}>
                <Form.Control
                  type="number"
                  placeholder={
                    errors[inputName]
                      ? errors[inputName]
                      : `Enter ${member}'s Age`
                  }
                  name={inputName}
                  value={formData[inputName] || ""}
                  onChange={handleChange}
                  isInvalid={!!errors[inputName]}
                  className={errors[inputName] ? "error-input" : ""}
                />
              </Form.Group>
            );
          })}

          <div className="button-container">
            <button onClick={handleNext} className="steps-next-btn">
              Next
            </button>
          </div>
        </div>
      </Form>
    </Card>
  );
};

export default StepOne;
