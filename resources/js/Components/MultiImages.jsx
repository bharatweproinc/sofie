import React from "react";

const UploadAndDisplayImage = ({data, setData, images}) => {

  const onImageChange = (e) => {
    const newImages = Array.from(e.target.files);
    setData({...data, ["banner_images"] : [...data["banner_images"], ...newImages]});
  };

  const removeImg = (index) => {
    URL.revokeObjectURL(URL.createObjectURL(data["banner_images"][index]));
    setData(prevData => {
        const newImages = prevData["banner_images"].filter((_, i) => i !== index);
        return { ...prevData, banner_images: newImages };
      });
  };

  console.log('data.banner_images', data.banner_images)

  return (
    <>
      <input type="file" multiple accept="image/*" onChange={onImageChange} />
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>

            {data["banner_images"].map((image, index) => {

                const imageSrc = URL.createObjectURL(image);

                return (
                    <div key={index} style={{ margin: '10px', position: 'relative'}}>

                    <img src={imageSrc} alt={`Uploaded preview ${index}`} width="250px" style={{ height : '250px', objectFit : 'contain' }} />
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
                            width : '25px'
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
