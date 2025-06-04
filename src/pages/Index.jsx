
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react"; // Combine React import with hooks

import { Container, Row, Col, Card, Button, Dropdown, Form } from "react-bootstrap";

// options
// 18:18

function Index() {

    const [showModal, setShowModal] = useState(false);

    {/* India’s Most Trusted Insurance */ }
    const [activeFeature, setActiveFeature] = useState(0);
    const features = [
        { title: "Tailored Plans for Every Need", content: "At Insure Sahi, we offer customizable insurance plans for health, life, vehicle, and property. Get the right coverage that fits your lifestyle and priorities." },
        { title: "Affordable Premiums", content: "Ensure affordable premiums without compromising on coverage." },
        { title: "Fast & Hassle-Free Claims", content: "Experience fast and hassle-free claims to ease your stress." },
        { title: "Expert Guidance at Every Step", content: "Get expert guidance at every step of your insurance journey." }
    ];

    useEffect(() => {
        const featureInterval = setInterval(() => {
            setActiveFeature((prevFeature) => (prevFeature + 1) % features.length);
        }, 1000); // Change feature every 3 seconds
        return () => clearInterval(featureInterval);
    }, []);

    // feedback container

    const feedbacks = [
        {
            name: "Dhiraj, Mumbai",
            text: "I've been with this insurance provider for over a year, and I couldn't be happier with the service. From the moment I signed up, the team has been incredibly helpful, guiding me through every step. They really make me feel like they have my best interests at heart.",
            rating: 5
        },
        {
            name: "Swapnil, Thane",
            text: "The claims process was smooth and hassle-free. I had an unfortunate accident, but thanks to this insurance, I felt completely supported. Their customer service was prompt and compassionate, which made all the difference. Highly recommend!",
            rating: 5
        },
        {
            name: "Ria, Delhi",
            text: "I couldn't be happier with the service. From the moment I signed up, the team has been incredibly helpful, guiding me through every step. They really make me feel like they have my best interests at heart.I've been with this insurance provider for over a year, and ",
            rating: 5
        },
        {
            name: "Vikram, Bangalore",
            text: "I've been with this insurance provider for over a year, and I couldn't be happier with the service. From the moment I signed up, the team has been incredibly helpful, guiding me through every step. They really make me feel like they have my best interests at heart.",
            rating: 5
        },
    ];

    const [currentFeedbackIndex, setCurrentFeedbackIndex] = useState(0);

    const handleNext = () => {
        setCurrentFeedbackIndex((prevIndex) => (prevIndex + 2) % feedbacks.length);

    };

    const handlePrev = () => {
        setCurrentFeedbackIndex((prevIndex) => (prevIndex + feedbacks.length - 2) % feedbacks.length);
    };

    const policies = [
        {
            id: 1,
            logo: "images/Niva-Bupa-Logo.svg",
            title: "Niva Bupa Health Insurance",
            description:
                "Offers comprehensive health coverage with cashless hospitalization, critical illness benefits, and easy claim processes to ensure your health is always protected.",
            si: "₹1,40,249",
            cb: "20%",
            price: "₹3,713 per month",
        },
        {
            id: 2,
            logo: "images/Niva-Bupa-Logo.svg",
            title: "Niva Bupa Health Insurance",
            description:
                "Offers comprehensive health coverage with cashless hospitalization, critical illness benefits, and easy claim processes to ensure your health is always protected.",
            si: "₹1,40,249",
            cb: "20%",
            price: "₹3,713 per month",
        },
        {
            id: 3,
            logo: "images/Niva-Bupa-Logo.svg",
            title: "Niva Bupa Health Insurance",
            description:
                "Offers comprehensive health coverage with cashless hospitalization, critical illness benefits, and easy claim processes to ensure your health is always protected.",
            si: "₹1,40,249",
            cb: "20%",
            price: "₹3,713 per month",
        },
        {
            id: 4,
            logo: "images/Niva-Bupa-Logo.svg",
            title: "Niva Bupa Health Insurance",
            description:
                "Offers comprehensive health coverage with cashless hospitalization, critical illness benefits, and easy claim processes to ensure your health is always protected.",
            si: "₹1,40,249",
            cb: "20%",
            price: "₹3,713 per month",
        },
        {
            id: 5,
            logo: "images/Niva-Bupa-Logo.svg",
            title: "Niva Bupa Health Insurance",
            description:
                "Offers comprehensive health coverage with cashless hospitalization, critical illness benefits, and easy claim processes to ensure your health is always protected.",
            si: "₹1,40,249",
            cb: "20%",
            price: "₹3,713 per month",
        },
        {
            id: 6,
            logo: "images/Niva-Bupa-Logo.svg",
            title: "Niva Bupa Health Insurance",
            description:
                "Offers comprehensive health coverage with cashless hospitalization, critical illness benefits, and easy claim processes to ensure your health is always protected.",
            si: "₹1,40,249",
            cb: "20%",
            price: "₹3,713 per month",
        },
        {
            id: 7,
            logo: "images/Niva-Bupa-Logo.svg",
            title: "Niva Bupa Health Insurance",
            description:
                "Offers comprehensive health coverage with cashless hospitalization, critical illness benefits, and easy claim processes to ensure your health is always protected.",
            si: "₹1,40,249",
            cb: "20%",
            price: "₹3,713 per month",
        },
        {
            id: 8,
            logo: "images/Niva-Bupa-Logo.svg",
            title: "Niva Bupa Health Insurance",
            description:
                "Offers comprehensive health coverage with cashless hospitalization, critical illness benefits, and easy claim processes to ensure your health is always protected.",
            si: "₹1,40,249",
            cb: "20%",
            price: "₹3,713 per month",
        },


    ];


    return (
        <>
            <div className={`unique-hero-section text-center mt-3  mb-5 ${showModal ? "blur-background" : ""}`}>
                <div className="unique-hero-container container py-5">
                    <h1 className="unique-hero-title display-4 fw-bold">
                        Protect What Matters Most <br /> Secure Your
                        <span style={{ color: " #04CB66" }}> Future Today!</span>
                    </h1>

                    <p className="unique-hero-description">
                        Tailored support for your unique needs - Because you deserve <br /> care that goes beyond expectations.
                    </p>

                    <button className="unique-hero-button mt-3" onClick={() => setShowModal(true)}>
                        Insure Now
                    </button>

                    <div className="unique-hero-stats mt-4">
                        <div className="row">
                            <div className="col-md-4">
                                <h3 className="mb-0">
                                    20L<span style={{ color: "#28a745" }}>+</span>
                                </h3>
                                <p className="mt-0">Customers insured</p>
                            </div>
                            <div className="col-md-4">
                                <h3 className="mb-0">
                                    ₹235Cr<span style={{ color: "#28a745" }}>+</span>
                                </h3>
                                <p className="mt-0">Claims Disbursed</p>
                            </div>
                            <div className="col-md-4">
                                <h3 className="mb-0">
                                    95%<span style={{ color: "#28a745" }}>+</span>
                                </h3>
                                <p className="mt-0">Claim Settlement</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Insurance Selection Modal */}
                {showModal && (
                    <div className="insurance-modal">
                        <div className="modal-content">
                            <h2>Select type of <span style={{ color: "#04CB66" }}>Insurance</span></h2>
                            <div className="insurance-options">
                                <Link to="/multistepform" className="option">
                                    <img src="/images/term-life.png" alt="Term Life Insurance" />
                                    <span>Term Life Insurance</span>
                                </Link>
                                <Link to="/multistepform2" className="option">
                                    <img src="/images/health.png" alt="Health Insurance" />
                                    <span>Health Insurance</span>
                                </Link>
                                <Link to="/carinsure" className="option">
                                    <img src="/images/vehicle.png" alt="Vehicle Insurance" />
                                    <span>Vehicle Insurance</span>
                                </Link>
                            </div>
                            <button className="close-btn" onClick={() => setShowModal(false)}>Close</button>
                        </div>
                    </div>
                )}
            </div>

            {/* India’s Most Trusted Insurance */}
            {/* <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '1120px', margin: 'auto', background: 'transparent', textAlign: 'center' }}>
                <h1 className="  fw-bold">
                    What Makes Insure Sahi One of <br></br>
                    <span style={{ color: '#28a745' }}> India’s Most Trusted Insurance
                    </span> Providers?
                </h1>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: "30px" }}>
                    <div style={{ flex: 1, padding: '20px', textAlign: 'left' }}>
                        <div style={{ opacity: activeFeature === 0 ? 1 : 0, transition: 'opacity 0.5s ease' }}>
                            <h2>{features[activeFeature].title}</h2>
                            <p>{features[activeFeature].content}</p>
                        </div>
                    </div>
                    <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src="/images/happpyfam.png" alt="Happy family" style={{ maxWidth: '90%', height: 'auto', borderRadius: '5%' }} />
                    </div>
                </div>
            </div> */}











            {/* filter section */}
            <Container className="p-4 mt-6">
                {/* Header Section */}
                <Row className="mb-4">
                    <Col lg={6} md={12}>
                        <h1 className="fw-bold">Discover Policies</h1>
                        <h2 className="text-success">Tailored Just for You</h2>
                    </Col>
                    <Col lg={6} md={12} className="text-lg-end text-md-start">
                        <p className="custom-text">
                            We offer a wide range of customizable insurance plans designed to fit your unique needs.
                            Whether it’s <strong>health, life, vehicle, or property coverage</strong>,
                            find the perfect policy tailored just for you.
                        </p>
                    </Col>

                </Row>

                {/* Filters Section */}
                <Row className="mb-4">
                    <Col md={12} className="d-flex flex-wrap align-items-center">
                        <Button variant="outline-secondary" className="me-2">
                            &#x2630; Filters
                        </Button>
                        <Dropdown className="me-2">
                            <Dropdown.Toggle variant="light">Insurance Type</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>Health</Dropdown.Item>
                                <Dropdown.Item>Life</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className="me-2">
                            <Dropdown.Toggle variant="light">Coverage Amount</Dropdown.Toggle>
                        </Dropdown>
                        <Dropdown className="me-2">
                            <Dropdown.Toggle variant="light">Premium Range</Dropdown.Toggle>
                        </Dropdown>
                        <Dropdown className="me-2">
                            <Dropdown.Toggle variant="light">Policy Duration</Dropdown.Toggle>
                        </Dropdown>
                        <Dropdown className="me-2">
                            <Dropdown.Toggle variant="light">Add-Ons/Riders</Dropdown.Toggle>
                        </Dropdown>
                    </Col>
                </Row>

                {/* Cards Section */}
                <Row xs={1} sm={2} md={2} lg={4} className="g-4">
                    {policies.map((policy, index) => (
                        <Col key={index}>
                            <Card className=" p-3">
                                <Row className="align-items-center">
                                    <Col xs={8}>
                                        <img src={policy.logo} alt="Logo" style={{ height: "30px" }} />
                                    </Col>
                                    <Col xs={4} className="text-end">
                                        <Button variant="outline-secondary" size="sm">
                                            Learn more
                                        </Button>
                                    </Col>
                                </Row>
                                <Card.Body>
                                    <h5 className="fw-bold fs-6">{policy.title}</h5>
                                    <p className="text-muted">{policy.description}</p>
                                    <p>
                                        <strong>SI:</strong> {policy.si} &nbsp;&nbsp;
                                        <strong>CB:</strong> {policy.cb}
                                    </p>
                                    <Button  style={{ backgroundColor: "#19AD62", borderColor: "#19AD62", padding:"8px 24px", borderRadius:"100px" }} variant="success" className="w-100">
                                        {policy.price}
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>


























            <div className=" bg-img-right mt-4 ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-center">
                                {/* <span className="sub-heading-1">200+ Companies</span> */}

                                <h2 style={{ fontSize: '60px', marginBottom: '0px', marginTop: '20px' }} >Our <span style={{ color: '#28a745' }}> Partners</span></h2>
                                {/* <p>We have partnered with following Insurance Company.</p> */}
                            </div>
                        </div>
                    </div>

                    <div className="container text-center">
                        {/* First Row */}
                        <div className="row justify-content-center align-items-center g-3">
                            <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center">
                                <img src="images/lic.svg" className="img-fluid"
                                    style={{ maxWidth: "100%", maxHeight: "100px", objectFit: "contain" }}
                                    alt="Client 1" />
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center">
                                <img src="images/partners/HDFCLife.svg" className="img-fluid"
                                    style={{ maxWidth: "100%", maxHeight: "100px", objectFit: "contain" }}
                                    alt="Client 2" />
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center">
                                <img src="images/maxlife.svg" className="img-fluid"
                                    style={{ maxWidth: "100%", maxHeight: "100px", objectFit: "contain" }}
                                    alt="Client 3" />
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center">
                                <img src="images/partners/FutureGeneraliLife.svg" className="img-fluid"
                                    style={{ maxWidth: "100%", maxHeight: "100px", objectFit: "contain" }}
                                    alt="Client 4" />
                            </div>
                        </div>

                        {/* Second Row */}
                        <div className="row justify-content-center align-items-center g-3 mt-3">
                            <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center">
                                <img src="images/partners/TATA AIG.svg" className="img-fluid"
                                    style={{ maxWidth: "100%", maxHeight: "100px", objectFit: "contain" }}
                                    alt="Client 5" />
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center">
                                <img src="images/icicilombard.svg" className="img-fluid"
                                    style={{ maxWidth: "100%", maxHeight: "100px", objectFit: "contain" }}
                                    alt="Client 6" />
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center">
                                <img src="images/partners/HDFCErgo.svg" className="img-fluid"
                                    style={{ maxWidth: "100%", maxHeight: "100px", objectFit: "contain" }}
                                    alt="Client 7" />
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center">
                                <img src="images/partners/RelianceGeneral.svg" className="img-fluid"
                                    style={{ maxWidth: "100%", maxHeight: "100px", objectFit: "contain" }}
                                    alt="Client 8" />
                            </div>
                        </div>

                        {/* Third Row */}
                        <div className="row justify-content-center align-items-center g-3 mt-3">
                            <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center">
                                <img src="images/Niva-Bupa-Logo.svg" className="img-fluid"
                                    style={{ maxWidth: "100%", maxHeight: "100px", objectFit: "contain" }}
                                    alt="Client 9" />
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center">
                                <img src="images/carehealth.svg" className="img-fluid"
                                    style={{ maxWidth: "100%", maxHeight: "100px", objectFit: "contain" }}
                                    alt="Client 10" />
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center">
                                <img src="images/manipal.svg" className="img-fluid"
                                    style={{ maxWidth: "100%", maxHeight: "100px", objectFit: "contain" }}
                                    alt="Client 11" />
                            </div>
                        </div>
                    </div>
                </div>
            </div >

            {/* feedback container */}
            < div className="container feedback-container mt-4" >
                <div className="row align-items-center mb-4">
                    <div className="col-md-8" >
                        <h2 className="feedback-heading">Words of <br></br> <span style={{ color: ' #04CB66' }}> Appreciation!</span></h2>
                    </div>
                    <div className="col-md-4 feedback-button-container ">
                        <button className=" feedback-prev-button mr-2" onClick={handlePrev} style={{ fontSize: '24px' }}>&lt;</button>
                        <button className="  feedback-next-button " onClick={handleNext} style={{ fontSize: '24px' }}>&gt;</button>

                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="feedback-card">
                            <div className="feedback-rating">{'★'.repeat(feedbacks[currentFeedbackIndex % feedbacks.length].rating)}</div>
                            <p>{feedbacks[currentFeedbackIndex % feedbacks.length].text}</p>
                            <p className="feedback-author">{feedbacks[currentFeedbackIndex % feedbacks.length].name}</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="feedback-card">
                            <div className="feedback-rating">{'★'.repeat(feedbacks[(currentFeedbackIndex + 1) % feedbacks.length].rating)}</div>
                            <p>{feedbacks[(currentFeedbackIndex + 1) % feedbacks.length].text}</p>
                            <p className="feedback-author">{feedbacks[(currentFeedbackIndex + 1) % feedbacks.length].name}</p>
                        </div>
                    </div>
                </div>
            </div >

            {/* Talk to Our Experts */}
            < div className="container-fluid my-5 gradient-wrapper mb-0" >
                <div className="row consultation-row justify-content-center">
                    <div className="col-md-7 consultation-img-col">
                        <img src="/images/consult.png" alt="Consultation" className="img-fluid" />
                    </div>

                    <div className="col-md-5 consultation-form-col">
                        <div className="consultation-card">
                            <div className="consultation-card-body">
                                <h5 className="consultation-title" style={{ textAlign: 'center' }}>Talk to Our <span style={{ color: '#28a745' }}>Experts</span></h5>
                                <p className="consultation-text mb-5" style={{ textAlign: 'center' }}>Book your Free Consultation to Find the Right Coverage!</p>
                                <form className="consultation-form">
                                    <div className="mb-3">
                                        <input type="text" className="consultation-input" id="name" placeholder="Name" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="email" className="consultation-input" id="email" placeholder="Email" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" className="consultation-input" id="phone" placeholder="Phone Number" />
                                    </div>
                                    <div className="mb-5">
                                        <select className="consultation-select" id="insuranceType">
                                            <option selected>Choose...</option>
                                            <option value="health">Health Insurance</option>
                                            <option value="car">Car Insurance</option>
                                            <option value="life">Life Insurance</option>
                                            <option value="bike">Bike Insurance</option>
                                        </select>
                                    </div>
                                    <button type="submit" className=" talk-to-submit custom-submit">Submit</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Index;
