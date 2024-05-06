import React from "react";
import Select from "react-select";
import getOptions from "./helper";

export default function Filter({ type }) {
  const options = getOptions(type);

  const customStyles = {
    placeholder: (provided) => ({
      ...provided,
      fontSize: "14px",
    }),
    option: (provided, state) => ({
      ...provided,
      fontSize: "14px",
      whiteSpace: "noWrap",
    }),
  };

  const handleChange = (selectedOption) => {
    // output   [
    //     {
    //         "value": "two",
    //         "label": "Two"
    //     },
    //     {
    //         "value": "three",
    //         "label": "Three"
    //     }
    // ]
  };

  return (
    <>
      <Select
        isClearable="true"
        isSearchable="true"
        name={type}
        placeholder={type}
        isMulti
        options={options}
        onChange={handleChange}
        styles={customStyles}
      />
    </>
  );
}
