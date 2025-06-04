import React, { useState } from "react";
import { Card } from "react-bootstrap";
import "../../styles/forms/multiStepForm.css";

const WelcomeStep = ({ nextStep, setChooseMembers }) => {
    const [selectedMembers, setSelectedMembers] = useState([]);
    const members = ["Self", "Wife", "Son", "Daughter", "Father", "Mother", "Grand Father", "Grand Mother"];

    const handleMemberSelect = (member) => {
        if (selectedMembers.includes(member)) {
            setSelectedMembers(selectedMembers.filter((m) => m !== member));
        } else {
            setSelectedMembers([...selectedMembers, member]);
        }
    };

    return (
        <Card className="step-card">
            {/* 🔹 Heading */}
            <h2 className="text-center mb-2 welcome-heading">
                Find Top Plans For You With Up To <span className="discount-text">25% Discount</span>
            </h2>

            <p className="text-center step-subtitle">Select Members You Want To Insure</p>

            {/* 🔹 Member Selection Buttons */}
            <div className="member-selection">
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

            {/* 🔹 View More Members Link */}
            <p className="text-center view-more-text">View More Members</p>

            {/* 🔹 Continue Button */}
            <div className="button-container">
                <button
                    onClick={() => {
                        setChooseMembers(selectedMembers); // Pass selected members to parent
                        nextStep(); // Go to next step
                    }}
                    className="steps-next-btn"
                    type="button"
                >
                    Continue
                </button>


               
            </div>

            {/* 🔹 Terms & Conditions */}
            <p className="terms-text text-center">
                By Clicking On Continue, I Agree To The <span className="terms-link">Terms & Conditions</span> & Disclaimers
            </p>
        </Card>
    );
};

export default WelcomeStep;
