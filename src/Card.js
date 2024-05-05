import React, { useState } from "react";
import "./Card.css";

export default function Card() {
  const [isExpanded, setIsExpanded] = useState(false);
  const details =
    "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.";
  const shortDetails =
    details.length > 400 ? details.substring(0, 400) + "..." : details;
  const exp = "3";
  const location = "Bengaluru";
  const company = "Dropbox";
  const maxSalary = "20";
  const minSalary = "30";
  const role = "Frontend Developer";
  const logoUrl = "https://logo.clearbit.com/dropbox.com";
  const age = "⏳ Posted 2 days ago";
  const jdLink = "https://weekday.works";

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

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
        Estimated Salary: {minSalary}-{maxSalary}LPA ✅{" "}
      </div>
      <div className={`card-body ${isExpanded ? "no-overlay" : ""}`}>
        <span>About Company:</span> <br></br>
        <h6>About us</h6>
        {/* <p style={{ overflowY: "scroll", maxHeight: "100px" }}> */}
        <p>{isExpanded ? details : shortDetails}</p>
      </div>
      {!isExpanded && (
        <button className="show-more" onClick={toggleExpand}>
          Show more
        </button>
      )}

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
