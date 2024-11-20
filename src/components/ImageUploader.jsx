import React, { useState } from 'react';

const ImageUploader = ({ onImagesUploaded }) => {
  const [selectImages, setSelectedImages] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));

    setSelectedImages((prev) => [...prev, ...imageUrls]);

    // Directly pass the imageUrls array to the onImagesUploaded callback
    onImagesUploaded(imageUrls);
  };

  return (
    <div className='flex items-center fixed top-[95%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
      <input 
        type="file"
        accept='image/*'
        multiple
        onChange={handleImageChange}
        className='hidden'
      />
      <button
        onClick={() => document.querySelector('input[type="file"]').click()}
        className='bg-blue-500 text-white py-2 px-5 rounded hover:bg-blue-600 transition font-[Montserrat] font-semibold'
      >
        Add Image
      </button>
    </div>
  );
};

export default ImageUploader;
