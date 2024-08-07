import React, { useState, useEffect } from 'react';
// import image1 from "../../../../Assets/HomePage/homePage1.jpg";
// import image2 from "../../../../Assets/HomePage/homepage2.jpg";
// import image3 from "../../../../Assets/HomePage/homepage3.jpg";
// import image4 from "../../../../Assets/HomePage/homepage4.jpg";
// import image5 from "../../../../Assets/HomePage/homepage5.jpg";
// import image6 from "../../../../Assets/HomePage/homepage6.jpg";

// const images = [
//     image1,
//     image2,
//     image3,
//     image4,
//     image5,
//     image6
// ]

const ImageCarousel = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(goToNextSlide, interval);
    return () => clearInterval(intervalId);
  }, [currentIndex, interval]);

  return (
        <img
            className='w-full h-full object-cover' style={{ maxWidth: '100',}}
            src={images[currentIndex]} alt={`image ${currentIndex}`}
        />
  );
};

export default ImageCarousel;
