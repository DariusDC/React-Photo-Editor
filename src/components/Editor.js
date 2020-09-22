import "./Editor.css";
import React, { useState } from "react";
import ToolBar from "./ToolBar";
import Slider from "./Slider";
import SaveButton from "./SaveButton";

const Editor = ({
  image,
  changeOption,
  options,
  selectedIndex,
  min,
  max,
  value,
  handleChange,
  getImageStyle,
  saveImage,
}) => {
  const [slideValue, setSlideValue] = useState(100);
  const [effects, setEffects] = useState({});

  const onChange = (type) => (e) => {
    setSlideValue(e.target.value);
    console.log(e.target.value);
    let newEffects = effects;
    newEffects["brightness"] = `${e.target.value}`;
    setEffects(newEffects);
  };
  console.log(effects);

  return (
    <>
      <div className="editor">
        {image && (
          <img
            id="editedImage"
            src={image[0].dataURL.toString()}
            alt=""
            className="image"
            style={getImageStyle()}
          />
        )}
        <Slider min={min} max={max} handleChange={handleChange} value={value} />
        <SaveButton saveImage={saveImage} />
        <ToolBar
          changeOption={changeOption}
          options={options}
          selectedIndex={selectedIndex}
        />
      </div>
    </>
  );
};

export default Editor;
