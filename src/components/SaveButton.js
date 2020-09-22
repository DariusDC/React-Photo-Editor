import React from "react";
import "./SaveButton.css";

const SaveButton = ({ saveImage }) => {
  return (
    <>
      <button className="save" onClick={saveImage}>
        Save
      </button>
      <small style={{ marginTop: "1rem", color: "gray" }}>
        Or screenshot it for better quality
      </small>
    </>
  );
};

export default SaveButton;
