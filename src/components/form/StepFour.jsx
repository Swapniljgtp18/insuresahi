import React, { useState } from "react";
import { Card, Modal } from "react-bootstrap"; // 🔹 Added Modal import

const StepFour = ({ prevStep, formData }) => {

// const StepFour = ({ prevStep }) => { ---10

  const [selectedDiseases, setSelectedDiseases] = useState([]);
  const [showPopup, setShowPopup] = useState(false); // 🔹 Added state for popup

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
  };


 const handleSubmit = async () => {
  console.log("Final formData before sending:", formData);

  // ✅ Extract all dynamic age fields from formData
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

  // ✅ Create the payload with correct data
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
      alert("Form submitted successfully!");
    } else {
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
      <Modal show={showPopup} onHide={() => setShowPopup(false)} centered>
        <Modal.Body className="popup-box">
          <h5 className="text-center"><b>Thank You</b></h5>
          <p className="text-center popup-text">
            For providing the details. Someone from our team will get back to you soon to assist you further. 
            We appreciate your patience!
          </p>
          <div className="text-center">
            <button className="steps-next-btn" onClick={() => setShowPopup(false)}>Continue</button> {/* 🔹 Closes popup */}
          </div>
        </Modal.Body>
      </Modal>
    </Card>
  );
};

export default StepFour;
