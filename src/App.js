import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import "./App.css";
import Card from "./Card";
import Filter from "./Filter";

const filterTypes = [
  "Role",
  "Number of Employees",
  "Experience",
  "Remote",
  "Minimum Base Pay Salary",
];

const Filters = ({ onSelection }) => (
  <div className="filter-section">
    {filterTypes.map((type) => (
      <Filter key={type} type={type} onSelection={onSelection} />
    ))}
  </div>
);

const ItemCards = ({ items }) =>
  items.map((item, index) => (
    <Card
      key={`${item.jdUid}-${index}`}
      company={item.companyName}
      logoUrl={item.logoUrl}
      role={item.jobRole}
      location={item.location}
      minSalary={item.minJdSalary}
      maxSalary={item.maxJdSalary}
      details={item.jobDetailsFromCompany}
      exp={item.minExp}
    />
  ));

function App() {
  const [items, setItems] = useState([]);
  const [filters, setFilters] = useState({});

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
        if (data.jdList && data.jdList.length > 0) {
          setItems((prevItems) => [...prevItems, ...data.jdList]);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleSelection = (option) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...option }));
  };
  useEffect(() => {
    fetchData(0);
  }, []);

  useEffect(() => {
    console.log("current filter status =>", filters);
  }, [filters]);

  const fetchMoreData = () => {
    const currentOffset = items.length;
    fetchData(currentOffset);
  };
  return (
    <div className="container">
      <Filters onSelection={handleSelection} />
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={true}
        className="cards-section"
      >
        <ItemCards items={items} />
      </InfiniteScroll>
    </div>
  );
}

export default App;
