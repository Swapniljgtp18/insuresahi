import React, { useState } from "react";
import { Card } from "react-bootstrap";
import "../../styles/forms/multiStepForm.css";

const WelcomeStep = ({ nextStep, setChooseMembers }) => {
    const [selectedMembers, setSelectedMembers] = useState([]);
    const [error, setError] = useState(false);
    const members = ["Self", "Wife", "Son", "Daughter", "Father", "Mother", "Grand Father", "Grand Mother"];

    const handleMemberSelect = (member) => {
        if (selectedMembers.includes(member)) {
            setSelectedMembers(selectedMembers.filter((m) => m !== member));
        } else {
            setSelectedMembers([...selectedMembers, member]);
        }
        setError(false); // clear error when selecting
    };

    const handleContinue = () => {
        if (selectedMembers.length === 0) {
            setError(true);
            return;
        }
        setChooseMembers(selectedMembers);
        nextStep();
    };

    return (
        <Card className="step-card">
            <h2 className="text-center mb-2 welcome-heading">
                Find Top Plans For You With Up To <span className="discount-text">25% Discount</span>
            </h2>
            <p className="text-center step-subtitle">Select Members You Want To Insure</p>

            <div className="member-selection position-relative">
                {members.map((member) => (
                    <button
                        key={member}
                        className={`member-btn ${selectedMembers.includes(member) ? "selected" : ""}`}
                        onClick={() => handleMemberSelect(member)}
                        type="button"
                    >
                        {member}
                    </button>
                ))}
               
            </div>

            <p className="text-center view-more-text">View More Members</p>

            {error && (
                    <span className="error-text">Please select at least one member</span>
                )}

            <div className="button-container">
                <button
                    onClick={handleContinue}
                    className="steps-next-btn"
                    type="button"
                >
                    Continue
                </button>
            </div>

            <p className="terms-text text-center">
                By Clicking On Continue, I Agree To The <span className="terms-link">Terms & Conditions</span> & Disclaimers
            </p>
        </Card>
    );
};

export default WelcomeStep;
