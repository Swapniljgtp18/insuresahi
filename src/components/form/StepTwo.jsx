import React, { useState } from "react";
import { Form, Card } from "react-bootstrap";

const StepTwo = ({ nextStep, prevStep, handleChange, formData }) => {
  const [selectedCity, setSelectedCity] = useState(formData.city || "");
  const [error, setError] = useState("");

  const cities = ["Ahmedabad", "Mumbai", "Bangalore", "Pune"];

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    handleChange({ target: { name: "city", value: city } });
    setError(""); // Clear error when valid selection is made
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (!selectedCity) {
      setError("Please select a city");
    } else {
      nextStep();
    }
  };

  return (
    <Card className="step-card">
      <div className="progress-container">
        <div className="step active"></div>
        <div className="step active"></div>
        <div className="step"></div>
        <div className="step"></div>
      </div>

      <h4 className="text-center mb-3">Please Select Your Current City</h4>

      <Form>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder={error ? error : "Search City"}
            name="searchCity"
            onChange={handleChange}
            className={`rounded-input ${error ? "error-input" : ""}`}
            isInvalid={!!error}
          />
        </Form.Group>

        <div className="steps-city-buttons">
          {cities.map((city) => (
            <button
              key={city}
              className={`steps-city-btn ${selectedCity === city ? "selected" : ""}`}
              onClick={() => handleCitySelect(city)}
              type="button"
            >
              {city}
            </button>
          ))}
        </div>

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

export default StepTwo;
