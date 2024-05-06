import React from "react";
import Select from "react-select";

export default function Filter() {
  const options = [
    { value: "one", label: "One" },
    { value: "two", label: "Two" },
    { value: "three", label: "Three" },
  ];

  const customStyles = {
    placeholder: (provided) => ({
      ...provided,
      fontSize: "14px",
    }),
    option: (provided, state) => ({
      ...provided,
      fontSize: "14px",
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
        name="Role"
        placeholder="Role"
        isMulti
        options={options}
        onChange={handleChange}
        styles={customStyles}
      />
    </>
  );
}
