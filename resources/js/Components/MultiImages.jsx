import React, { useState } from "react";

const UploadAndDisplayImage = () => {
  const [images, setImages] = useState([]);

  console.log('images', images)

  const onImageChange = (e) => {
    const newImages = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const removeImg = (index) => {
    URL.revokeObjectURL(URL.createObjectURL(images[index]));

    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <>
      <input type="file" multiple accept="image/*" onChange={onImageChange} />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image, index) => {
          const imageSrc = URL.createObjectURL(image);

          return (
            <div key={index} style={{ margin: '10px', position: 'relative' }}>
              <img src={imageSrc} alt={`Uploaded preview ${index}`} width="250px" />
              <button
                onClick={() => removeImg(index)}
                style={{
                  position: 'absolute',
                  top: '5px',
                  right: '5px',
                  background: 'rgba(255, 0, 0, 0.5)',
                  border: 'none',
                  color: 'white',
                  cursor: 'pointer',
                  width : '20px'
                }}
              >
                X
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default UploadAndDisplayImage;
