import "./App.css";
import Card from "./Card";

function App() {
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
      <div className="cards-section">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
