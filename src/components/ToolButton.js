import React from "react";
import "./ToolButton.css";

const ToolButton = ({ title, className, changeOption, index, icon }) => {
  return (
    <button className={className} onClick={() => changeOption(index)}>
      <i className={`${icon} fa-2x`}></i>
      <p>{title}</p>
    </button>
  );
};

export default ToolButton;
