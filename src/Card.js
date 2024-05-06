import React, { useState } from "react";
import "./Card.css";

export default function Card({
  age = "⏳ Posted 2 days ago",
  company = "Unknown Company",
  logoUrl = "https://placeholder.com/logo",
  role = "Not specified",
  location = "Location unknown",
  minSalary = "Not specified",
  maxSalary = "Not specified",
  details = "No details available",
  exp = "Experience not specified",
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const shortDetails =
    details.length > 300 ? details.substring(0, 300) + "..." : details;

  return (
    <div className="card">
      <span className="posted-header">{age}</span>
      <div className="card-header">
        <span className="logo">
          <img src={logoUrl} alt={`${company} logo`} />
        </span>
        <div className="header-subsection">
          <span className="card-company">{company}</span>
          <span className="card-role">{role}</span>
          <span className="card-location">{location}</span>
        </div>
      </div>
      <div className="salary-section">
        Estimated Salary: {minSalary} - {maxSalary} LPA ✅{" "}
      </div>
      <div className={`card-body ${isExpanded ? "no-overlay" : ""}`}>
        <span>About Company:</span> <br></br>
        <h5>About us</h5>
        {/* <p style={{ overflowY: "scroll", maxHeight: "100px" }}> */}
        <p>{isExpanded ? details : shortDetails}</p>
        <div
          className="show-more-container"
          style={isExpanded ? { visibility: "hidden" } : {}}
        >
          <button className="show-more" onClick={toggleExpand}>
            View Job
          </button>
        </div>
      </div>

      <div className="experience-section">
        <span>Minimum Experience</span> <br /> <span>{exp} years</span>
      </div>
      <div className="button-section">
        <button>⚡️ Easy Apply </button>
        <button>🔓 Unlock Referral asks</button>
      </div>
    </div>
  );
}
