import React, { useState } from "react";
import "./App.css";
import Editor from "./Editor";
import Upload from "./Upload";

import screenshot from "image-screenshot";

const DEFAULT_OPTIONS = [
  {
    name: "Brightness",
    property: "brightness",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
    icon: "fas fa-sun",
  },
  {
    name: "Contrast",
    property: "contrast",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
    icon: "fas fa-adjust",
  },
  {
    name: "Saturation",
    property: "saturate",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
    icon: "fas fa-tint",
  },
  {
    name: "Blur",
    property: "blur",
    value: 0,
    range: {
      min: 0,
      max: 10,
    },
    unit: "px",
    icon: "fas fa-bold",
  },
  {
    name: "Grayscale",
    property: "grayscale",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
    icon: "fas fa-tint-slash",
  },
  {
    name: "Sepia",
    property: "sepia",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
    icon: "fas fa-filter",
  },
];

const App = () => {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [image, setImage] = useState(null);
  const [options, setOptions] = useState(DEFAULT_OPTIONS);
  const option = options[selectedOptionIndex];

  const changeImage = (img) => {
    setImage(img);
  };

  const changeOption = (index) => {
    setSelectedOptionIndex(index);
  };

  const saveImage = () => {
    const img = document.getElementById("editedImage");
    const aux = img.style.width;
    img.style.width = "2000px";
    screenshot(img).download();
    img.style.width = aux;
  };

  const handleSliderChange = ({ target }) => {
    setOptions((prevOptions) =>
      prevOptions.map((option, index) => {
        if (index !== selectedOptionIndex) return option;
        else return { ...option, value: target.value };
      })
    );
  };

  const getImageStyle = () => {
    const filters = options.map(
      (option) => `${option.property}(${option.value}${option.unit})`
    );

    return { filter: filters.join(" ") };
  };

  return (
    <div className="app">
      {!image && <Upload changeImage={changeImage} />}
      {image && (
        <Editor
          image={image}
          changeOption={changeOption}
          options={options}
          selectedIndex={selectedOptionIndex}
          min={option.range.min}
          max={option.range.max}
          value={option.value}
          handleChange={handleSliderChange}
          getImageStyle={getImageStyle}
          saveImage={saveImage}
        />
      )}

      {/* Save */}
    </div>
  );
};

export default App;
