import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

interface ImageUploaderProps {
  label: string;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ label }) => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input
        accept="image/*"
        style={{ display: 'none' }}
        id="icon-button-file"
        type="file"
        onChange={handleImageChange}
      />
      <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label={label} component="span">
          <PhotoCamera />
        </IconButton>
      </label>
      {uploadedImage && (
        <img
          src={uploadedImage}
          alt="Uploaded Preview"
          style={{ maxWidth: '200px' }}
        />
      )}
    </div>
  );
};

export default ImageUploader;
