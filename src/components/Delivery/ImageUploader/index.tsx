import React from 'react';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

interface ImageUploaderProps {
  label: string;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ label }) => {
  return (
    <div>
      <input
        accept="image/*"
        style={{ display: 'none' }}
        id="icon-button-file"
        type="file"
      />
      <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label={label} component="span">
          <PhotoCamera />
        </IconButton>
      </label>
    </div>
  );
};

export default ImageUploader;
