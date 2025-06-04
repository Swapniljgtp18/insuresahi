import React from "react";
import { Form, Button, Card } from "react-bootstrap";

const StepOne = ({ nextStep, handleChange, formData, chooseMembers }) => {
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
        {chooseMembers.map((member) => {
          const inputName = member.toLowerCase().replace(/ /g, "");
          return (
            <Form.Group className="mb-3" key={member}>
              <Form.Control
                type="number"
                placeholder={`Enter ${member}'s Age`}
                name={inputName}
                value={formData[inputName] || ""}
                onChange={handleChange}
              />
            </Form.Group>
          );
        })}

        <div className="button-container">
          <Button onClick={nextStep} className="steps-next-btn">
            Next
          </Button>
        </div>
      </Form>
    </Card>
  );
};

export default StepOne;
