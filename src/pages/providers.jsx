import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import "../styles/providers.css";

const Providers = () => {
  const navigate = useNavigate(); // ✅ Initialize navigation

  const [plans, setPlans] = useState([]);
  const [selectedProvider, setSelectedProvider] = useState("");
  const [selectedPremium, setSelectedPremium] = useState("");
  const [selectedIDV, setSelectedIDV] = useState("");
  const [selectedAddOns, setSelectedAddOns] = useState("");

  useEffect(() => {
    setPlans([
      {
        id: 1,
        provider: "Niva",
        logo: "/images/niva.png",
        idv: "₹1,00,000",
        price: "₹3,713",
        addOns: ["24x7 Roadside Assistance"],
      },
      {
        id: 2,
        provider: "Niva",
        logo: "/images/niva.png",
        idv: "₹1,00,000",
        price: "₹3,713",
        addOns: ["24x7 Roadside Assistance"],
      },
      {
        id: 3,
        provider: "Niva",
        logo: "/images/niva.png",
        idv: "₹1,00,000",
        price: "₹3,713",
        addOns: ["24x7 Roadside Assistance"],
      },
    ]);
  }, []);

  // ✅ Function to navigate to PurchasePlan with selected plan
  const handleBuyNow = (plan) => {
    navigate("/purchase-plan", { state: { plan } });
  };

  return (
    <div className="providers-container">
      {/* Left Sidebar */}
      <div className="provider-sidebar">
        <div className="card">
          <div className="provd-header">
            <img src="/images/providers/provd-car1.png" alt="Car Icon" className="provd-icon" />
               <div className="provd-details">
              <h3 className="provd-head">Your Car Details</h3>
              <p className="provd-vehicle-name"><strong>Hyundai Verna</strong></p>
              <p className="provd-vehicle-details">GJ01AB1234 | 2022</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="provd-header">
            <img src="/images/providers/provd-doc2.png" alt="IDV Icon" className="provd-icon" />
            <div className="provd-details">
              <h3 className="provd-head">Insured Declared Value (IDV)</h3>
              <p className="provd-vehicle-details">
                Currently Set for: <strong className="highlight-price">₹80,895</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="provd-header">
            <img src="/images/providers/provd-support3.png" alt="Addons Icon" className="provd-icon" />
            <div className="provd-details">
              <h3 className="provd-head">Addons</h3>
              <label className="provd-label">
                <input type="checkbox" className="provd-checkbox-input" /> Personal Accident Cover
              </label>
              <label className="provd-label">
                <input type="checkbox" className="provd-checkbox-input" /> PA Cover for Passenger
              </label>
            </div>
          </div>
        </div>

      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Filters Section */}
        {/* Filters Section */}
        <div className="filters-container">
          <div className="filters-header">
            <span className="filter-icon">☰</span> Filters
          </div>

          <div className="filters">
            <select className="filter-dropdown" value={selectedProvider} onChange={(e) => setSelectedProvider(e.target.value)}>
              <option value="">Providers</option>
              <option value="niva">Niva</option>
              <option value="tata">Tata AIG</option>
            </select>

            <select className="filter-dropdown" value={selectedPremium} onChange={(e) => setSelectedPremium(e.target.value)}>
              <option value="">Premium Range</option>
              <option value="low">Low to High</option>
              <option value="high">High to Low</option>
            </select>

            <select className="filter-dropdown" value={selectedIDV} onChange={(e) => setSelectedIDV(e.target.value)}>
              <option value="">IDV</option>
              <option value="low">Low</option>
              <option value="high">High</option>
            </select>

            <select className="filter-dropdown" value={selectedAddOns} onChange={(e) => setSelectedAddOns(e.target.value)}>
              <option value="">Add-Ons/Riders</option>
              <option value="roadside">24x7 Roadside Assistance</option>
              <option value="accident">Personal Accident Cover</option>
            </select>
          </div>
        </div>


        {/* Tabs */}
        <div className="tabs">
          <button className="tab active">Comprehensive Plans</button>
          <button className="tab">Third Party Plans</button>
        </div>

        <h3 className="plans-title">9 Comprehensive Plans Available</h3>
        <p className="plans-subtitle">Covers damages to your vehicle and third-party</p>

        {/* Plans List */}
        <div className="plans">
          {plans.map((plan) => (
            <div key={plan.id} className="plan-card">
              {/* Left Section - Logo & Details */}
              <div className="plan-left">
                <img src={plan.logo} alt={plan.provider} className="provider-logo" />
                <div className="plan-info">
                  <p className="idv-label">IDV</p>
                  <p className="idv-value">{plan.idv}</p>
                </div>
              </div>

              {/* Middle Section - Add-ons */}
              <div className="plan-middle">
                <p className="add-ons-title">Add-ons included in this plan</p>
                <div className="add-ons">
                  <span>✅ {plan.addOns.join(", ")}</span>
                </div>
              </div>

              {/* Right Section - Buy Button */}
              <div className="plan-right">
                <button className="provd-buy-button" onClick={() => handleBuyNow(plan)}>
                  Buy Now for {plan.price}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Right Sidebar */}
      <div className="right-sidebar">
        <div className="why-buy">
          <h6>Why Buy from InsureSahi?</h6>
          <ul className="why-buy-list">
            <li>
              <img src="/images/checklogo.png" alt="Check Icon" className="list-icon" />
              <strong>Claim Assistance</strong> anytime, anywhere!
            </li>
            <li>
              <img src="/images/checklogo.png" alt="Check Icon" className="list-icon" />
              <strong>Compare</strong> and choose <strong>Best Plan</strong>
            </li>
            <li>
              <img src="/images/checklogo.png" alt="Check Icon" className="list-icon" />
              <strong>24x7</strong> support helpline
            </li>
            <li>
              <img src="/images/checklogo.png" alt="Check Icon" className="list-icon" />
              Get your policy <strong>instantly</strong> with quick & easy <strong>KYC Process</strong>
            </li>
          </ul>

          <p className="visitors-info">
            <span className="highlight-green">1 Lakh+</span> people visit <strong>InsureSahi</strong> to buy car insurance everyday
          </p>

        </div>
      </div>
    </div>
  );
};

export default Providers;
