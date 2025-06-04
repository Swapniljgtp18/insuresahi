import React, { useState } from "react";
import WelcomeStep2 from "./WelcomeStep2";
import StepOne2 from "./StepOne2";
import StepTwo2 from "./StepTwo2";
import StepThree2 from "./StepThree2";
import StepFour2 from "./StepFour2";
import StepFive2 from "./StepFive2";
import "../../styles/forms2/multiStepForm2.css";

const MultiStepForm2 = () => {
  const [step, setStep] = useState(0); // starts from 0 -> WelcomeStep first

  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    phoneNumber: "",
    gender: "",
    employmentType: "",
    annualIncome: "",  
    educationalQualification: "",
    smokeOrChew: "",
    currentCity: ""
  });


  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (e) => {
    // debugger
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-wrapper">
      {step === 0 && (<WelcomeStep2 nextStep={nextStep} formData={formData} handleChange={handleChange} />)}

      {step === 1 && <StepOne2 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} formData={formData} />}

      {step === 2 && <StepTwo2 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} formData={formData} />}

      {step === 3 && <StepThree2 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} formData={formData} />}

      {step === 4 && <StepFour2 nextStep={nextStep} prevStep={prevStep} formData={formData} handleChange={handleChange} />}

      {step === 5 && <StepFive2 prevStep={prevStep} formData={formData} handleChange={handleChange} />}
    </div>
  );
};

export default MultiStepForm2;
