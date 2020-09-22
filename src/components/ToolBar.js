import React from "react";
import "./ToolBar.css";
import ToolButton from "./ToolButton";

const ToolBar = ({ changeOption, options, selectedIndex }) => {
  return (
    <>
      <div className="toolbar" id="toolbar">
        {options.map((option, index) => (
          <ToolButton
            key={index}
            title={option.name}
            changeOption={changeOption}
            index={index}
            className={index === selectedIndex ? "active" : null}
            icon={option.icon}
          />
        ))}
      </div>
    </>
  );
};

export default ToolBar;
