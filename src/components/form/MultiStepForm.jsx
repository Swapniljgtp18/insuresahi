import React, { useState } from "react";
import WelcomeStep from "./WelcomeStep";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import "../../styles/forms/multiStepForm.css";

const MultiStepForm = () => {
    const [step, setStep] = useState(0);
    const [chooseMembers, setChooseMembers] = useState([]);

    const [formData, setFormData] = useState({
      
        city: "",
        fullName: "",
        mobileNumber: ""
    });

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="form-wrapper">
            {step === 0 && ( <WelcomeStep nextStep={nextStep} setChooseMembers={setChooseMembers} /> )}

            
            {step === 1 && <StepOne nextStep={nextStep} handleChange={handleChange} formData={formData}  chooseMembers={chooseMembers} />}
            {step === 2 && (
                <StepTwo
                    nextStep={nextStep}
                    prevStep={prevStep}
                    handleChange={handleChange}
                    formData={formData}

                />
            )}
            {step === 3 && <StepThree nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} formData={formData} />}
            {step === 4 && <StepFour prevStep={prevStep} formData={formData} handleChange={handleChange} />}
        </div>
    );
};

export default MultiStepForm;
