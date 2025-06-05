import React, { useState } from "react";
import { Card, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const StepFour = ({ prevStep, formData }) => {
  const [selectedDiseases, setSelectedDiseases] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState(""); // 🔹 Validation error
  const navigate = useNavigate();

  const diseases = [
    "Diabetes",
    "Blood Pressure",
    "Heart Disease",
    "Any Surgery",
    "Thyroid",
    "Asthma",
    "Other Disease",
    "None of these",
  ];

  const handleDiseaseSelect = (disease) => {
    if (selectedDiseases.includes(disease)) {
      setSelectedDiseases(selectedDiseases.filter((d) => d !== disease));
    } else {
      setSelectedDiseases([...selectedDiseases, disease]);
    }


    // Clear error if user selects any option
    if (error) setError("");
  };

  const handleContinue = () => {
    setShowPopup(false);
    navigate("/");  // Redirect to home page
  };

  const handleSubmit = async () => {
    // 🔹 Validate: At least one disease must be selected
    if (selectedDiseases.length === 0) {
      setError("Please select at least one option.");
      return;
    }

    console.log("Final formData before sending:", formData);

    const memberAges = Object.keys(formData).reduce((acc, key) => {
      if (
        key !== "fullName" &&
        key !== "mobileNumber" &&
        key !== "city"
      ) {
        acc[key] = formData[key];
      }
      return acc;
    }, {});
    console.log("Member Ages: ", memberAges);

    const payload = {
      type: "term",
      termData: {
        fullName: formData.fullName || "",
        mobileNumber: formData.mobileNumber || "",
        city: formData.city || "",
        diseases: selectedDiseases || [],
        ...memberAges
      }
    };

    console.log("Submitting this payload: ", payload);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxmrHXtGseXDnsv5Wek9hRU9J1gNqpU51lF_xI3RVr0YbH2MbYfC67eHh-R5IjollS_XQ/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: JSON.stringify(payload)
        }
      );

      const result = await response.json();
      console.log("Submission result: ", result);

      if (result.result === "success") {
        setShowPopup(true); // ✅ Show the full-screen popup
      }
      else {
        alert("Submission failed: " + (result.message || "Unknown error"));
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Submission failed. Please check the console.");
    }
  };

  return (
    <Card className="step-card">
      {/* Progress Bar */}
      <div className="progress-container">
        <div className="step active"></div>
        <div className="step active"></div>
        <div className="step active"></div>
        <div className="step active"></div>
      </div>

      {/* Heading & Subtitle */}
      <h4 className="text-center mb-2">Medical History</h4>
      <p className="text-center step-subtitle">
        Do any member(s) have any existing illnesses for which they take regular medication?
      </p>

      {/* Disease Selection Buttons */}
      <div className="steps-disease-buttons">
        {diseases.map((disease) => (
          <button
            key={disease}
            className={`steps-disease-btn ${selectedDiseases.includes(disease) ? "selected" : ""}`}
            onClick={() => handleDiseaseSelect(disease)}
            type="button"
          >
            {disease}
          </button>
        ))}
      </div>

      {/* 🔹 Inline Error Display */}
      <div style={{ minHeight: "24px" }} className="text-center mt-2">
        {error && <p className="text-danger mb-0">{error}</p>}
      </div>


      {/* Back & View Plans Buttons */}
      <div className="button-container">
        <button onClick={prevStep} className="steps-back-btn" type="button">
          Back
        </button>
        <button className="steps-next-btn" type="button" onClick={handleSubmit}>
          View Plans
        </button>
      </div>

      {/* 🔹 Added Popup Modal */}
      <Modal
        show={showPopup}
        onHide={() => setShowPopup(false)}
        centered
        backdrop="static"
        keyboard={false}
        dialogClassName="full-screen-modal"
      >
        <Modal.Body className="popup-box d-flex flex-column justify-content-center align-items-center text-center">
          <h5><b>Thank You</b></h5>
          <p className="popup-text">
            For providing the details. Someone from our team will get back to you soon to assist you further.
            We appreciate your patience!
          </p>
          <button className="steps-next-btn mt-3" onClick={handleContinue}>
          Continue
        </button>
        </Modal.Body>
      </Modal>

    </Card>
  );
};

export default StepFour;
