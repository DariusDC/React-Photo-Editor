import React from "react";
import "./Slider.css";

const Slider = ({ min, max, value, handleChange }) => {
  console.log(min, max, value);
  return (
    <div className="slider">
      <input
        type="range"
        onChange={handleChange}
        min={min}
        max={max}
        value={value}
      />
    </div>
  );
};

export default Slider;
