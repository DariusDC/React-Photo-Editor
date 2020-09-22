import React from "react";
import "./Upload.css";
import ImageUploading from "react-images-uploading";

const Upload = ({ changeImage }) => {
  return (
    <div className="upload">
      <ImageUploading
        singleImage
        imgExtension={[".jpg", ".png"]}
        onChange={changeImage}
      >
        {({ onImageUpload, isDragging, dragProps }) => (
          <div className="upload">
            <div
              {...dragProps}
              className={`drag-container ${isDragging && "dashed-container"}`}
            >
              {!isDragging ? (
                <button
                  style={isDragging ? { color: "red" } : null}
                  onClick={onImageUpload}
                  className="add-btn"
                >
                  Click or Drop here
                </button>
              ) : (
                <h2>Release to add</h2>
              )}
            </div>
          </div>
        )}
      </ImageUploading>
    </div>
  );
};

export default Upload;
