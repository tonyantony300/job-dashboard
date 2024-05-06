import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import "./App.css";
import Card from "./Card";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchData(0);
  }, []);

  const fetchData = (offset) => {
    fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ limit: 10, offset: offset }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Data received =>", data);
        if (data.jdList && data.jdList.length > 0) {
          setItems((prevItems) => [...prevItems, ...data.jdList]);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const fetchMoreData = () => {
    const currentOffset = items.length;
    fetchData(currentOffset);
  };
  return (
    <div className="container">
      <div className="filter-section">
        <span className="filter">Roles</span>
        <span className="filter">Number of Employees</span>
        <span className="filter">Experience</span>
        <span className="filter">Remote</span>
        <span className="filter">Minimum Base Pay Salary</span>
        <span className="filter">Search Company Name</span>
      </div>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={true}
        className="cards-section"
      >
        {items.map((item, index) => (
          <Card
            key={item.jdUid}
            company={item.companyName || "NA"}
            logoUrl={item.logoUrl || "https://placeholder.com/logo"}
            role={item.jobRole || "NA"}
            location={item.location || "NA"}
            minSalary={item.minJdSalary || "NA"}
            maxSalary={item.maxJdSalary || "NA"}
            details={item.jobDetailsFromCompany || "No details available"}
            exp={item.minExp || "NA"}
          />
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default App;
