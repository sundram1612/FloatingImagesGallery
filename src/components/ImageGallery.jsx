import React from 'react';
import { motion } from 'framer-motion';

const ImageGallery = ({ images, containerRef }) => {
  return (
    <div
      ref={containerRef}
      className='grid grid-cols-4 gap-4 w-full h-full p-4 overflow-hidden'
      style={{
        gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
      }}
    >
      {images.map((image) => (
        <motion.img
          key={image.id} // Use the unique ID generated in ForeGround.jsx
          src={image.src}
          alt={`Uploaded image ${image.id}`}
          drag 
          dragConstraints={containerRef} 
          whileDrag={{scale:1.0}} 
          dragElastic={0.2} 
          dragTransition={{bounceStiffness: 100, bounceDamping:30}} // Allow dragging within the container's boundaries
          className='md:w-full md:h-fit object-contain cursor-grab rounded-lg'
        />
      ))}
    </div>
  );
};

export default ImageGallery;


