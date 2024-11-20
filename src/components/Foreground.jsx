import React, { useRef, useState, useEffect } from 'react';
import ImageUploader from './ImageUploader';
import ImageGallery from './ImageGallery';

const Foreground = () => {
  const [images, setImages] = useState([]);

  const handleImagesUploaded = (newImages) => {
    const imageObjects = newImages.map((src, index) => ({
      id: images.length + index + 1, // Unique ID for each new image
      src,
    }));
    setImages((prevImages) => [...prevImages, ...imageObjects]);
  };

  const ref = useRef(null); // Reference to the foreground for drag constraints

  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] bg-no-repeat bg-cover w-full h-full bg-gradient-to-r from-purple-600/20  to-neutral-900/50 p-1'>
      {/* ImageGallery component with the draggable images */}
      <ImageGallery images={images} containerRef={ref} />

      {/* ImageUploader component to add more images */}
      <ImageUploader onImagesUploaded={handleImagesUploaded} />
    </div>
  );
};

export default Foreground;
