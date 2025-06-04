import React from "react";
import { Card, Form } from "react-bootstrap";
import "../../styles/forms2/multiStepForm2.css"; // Import CSS

const StepFive2 = ({ prevStep, formData, handleChange }) => {
  const cities = ["Ahmedabad", "Mumbai", "Bangalore", "Pune"];

  const handleCitySelect = (city) => {
    handleChange({ target: { name: "currentCity", value: city } });
  };

  const handleSubmit = async () => {
    const payload = {
      type: "health",
      healthData: {
        fullName: formData.fullName || "",
        dateOfBirth: formData.dateOfBirth || "",
        gender: formData.gender || "",
        phoneNumber: formData.phoneNumber || "",
        employmentType: formData.employmentType || "",
        annualIncome: formData.annualIncome || "",
        educationalQualification: formData.educationalQualification || "",
        smokeOrChew: formData.smokeOrChew || "",
        currentCity: formData.currentCity || "",
      },
    };

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbz3EsM4ifCuPGc3n_TTJqoPPKBXGxtV4SjIux5IU-53Gr6_FDbx4rxwrI8KYehS1d28/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
          
        }
      );

      const result = await response.json();

      if (result.result === "success") {
        alert("Health data saved successfully!");
      } else {
        console.error("Server error:", result.message);
        alert("Failed to save data. Server returned an error.");
      }
    } catch (error) {
      console.error("Error submitting health form:", error);
      alert("Network or server error. Please check your connection.");
    }
  };

  return (
    <div className="form-wrapper2">
      <Card className="step-card2">
        <div className="progress-container2">
          {[...Array(5)].map((_, idx) => (
            <div key={idx} className="step2 active" />
          ))}
        </div>

        <h4 className="text-center step-heading2">Please Select Your Current City</h4>

        <Form.Group className="input-container2">
          <Form.Control
            type="text"
            placeholder="Search City"
            value={formData.searchTerm || ""}
            onChange={(e) =>
              handleChange({ target: { name: "searchTerm", value: e.target.value } })
            }
            className="input-field2"
          />
        </Form.Group>

        <div className="selection-container2 grid-layout">
          {cities
            .filter((city) =>
              city.toLowerCase().includes((formData.searchTerm || "").toLowerCase())
            )
            .map((city) => (
              <button
                key={city}
                type="button"
                className={`selection-btn2 ${formData.currentCity === city ? "selected" : ""}`}
                onClick={() => handleCitySelect(city)}
              >
                {city}
              </button>
            ))}
        </div>

        <div className="button-container2">
          <button onClick={prevStep} className="steps-back-btn2">
            Back
          </button>
          <button onClick={handleSubmit} className="steps-next-btn2">
            View Plans
          </button>
        </div>
      </Card>
    </div>
  );
};

export default StepFive2;
