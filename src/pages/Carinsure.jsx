import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "../styles/carinsure.css";

const Carinsure = () => {
    const navigate = useNavigate();
    const [carNumber, setCarNumber] = useState(""); 
    const [error, setError] = useState(false); 

    const scriptURL = "https://script.google.com/macros/s/AKfycbwcBTWjiJY7-zIbo88D-euwKoMNx4KrLPsbw9Beq2n771A--qkyCWr8Wtbves0JtxMIcQ/exec";

    const submitCarNumber = async () => {
        if (!carNumber.trim()) {
            setError(true);
            return;
        } else {
            setError(false);
        }
    
        const dataToSend = { carNumber };
    
        try {
            let response = await fetch(scriptURL, {
                method: "POST",
                body: JSON.stringify(dataToSend),
                headers: {
                    "Content-Type": "application/json"
                },
                mode: "no-cors" // ✅ Fix CORS issue
            });
    
            console.log("Data submitted, but no response due to no-cors mode.");
    
            alert("Car number saved successfully!");
            navigate("/"); 
    
        } catch (error) {
            console.error("Error submitting data:", error);
            alert("Error occurred: " + error.message);
        }
    };
    

    return (
        <div>
            <Container fluid className="car-insurance-container py-5">
                <div className="car-insurance-wrapper">
                    <div className="car-insurance-left">
                        <h2>
                            Enter your car number for a <br />
                            <span className="text-success">quick quote!</span>
                        </h2>
                    </div>
                    <div className="car-insurance-right">
                        <div className="car-insurance-box">
                            <p className="car-insurance-text">
                                <strong>
                                    Compare & <span className="text-success">Save Upto 91% <br /></span>
                                </strong>{" "}
                                on Car Insurance
                            </p>
                            <Form>
                                <Form.Group>
                                    <Form.Control
                                        type="text"
                                        className={`car-insurance-input ${error ? "is-invalid" : ""}`}
                                        placeholder={error ? "Please enter a valid car number!" : "Enter vehicle number ( Ex: MH-15-AB-1234 )"}
                                        value={error ? "" : carNumber}
                                        onChange={(e) => {
                                            setCarNumber(e.target.value);
                                            if (error) setError(false);
                                        }}
                                    />
                                </Form.Group>
                                <p className="car-insurance-price">
                                    Plan starting @ <span className="text-success">₹1.3/day*</span>
                                </p>

                                <Button
                                    variant="success"
                                    className="car-insurance-button mt-2"
                                    onClick={submitCarNumber}
                                >
                                    View Prices
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>

                <Row className="justify-content-center text-center mt-5 car-insurance-stats">
                    <Col xs={12} sm={4} className="mb-3 mb-sm-0">
                        <h4 className="car-insurance-stat-number">20L+</h4>
                        <p className="car-insurance-stat-text">Customers Insured</p>
                    </Col>
                    <Col xs={12} sm={4} className="mb-3 mb-sm-0">
                        <h4 className="car-insurance-stat-number">₹235Cr+</h4>
                        <p className="car-insurance-stat-text">Claims Disbursed</p>
                    </Col>
                    <Col xs={12} sm={4}>
                        <h4 className="car-insurance-stat-number">
                            95%<span style={{ color: "#28a745" }}>+</span>
                        </h4>
                        <p className="car-insurance-stat-text">Claim Settlement</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Carinsure;
