import React from "react";
import ImageDragSort from "./ImageDragSort";

const UploadAndDisplayImage = ({data, setData}) => {
    const onImageChange = (e) => {
        const newImages = Array.from(e.target.files);
        setData({...data, ["banner_images"] : [...data["banner_images"], ...newImages]});
    };

    const removeImg = (index) => {
        setData(prevData => {
            const newImages = prevData["banner_images"].filter((_, i) => i !== index);
            return { ...prevData, banner_images: newImages };
            });
    };

  return (
    <>
        <input type="file" multiple accept="image/*" onChange={onImageChange} />
        <ImageDragSort data={data["banner_images"]} setData={setData}/>
    </>
  );
};

export default UploadAndDisplayImage;
