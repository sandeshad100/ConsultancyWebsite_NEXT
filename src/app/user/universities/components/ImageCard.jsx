import React from 'react'

const ImageCard = (props) => {
  return (
 
      <div className="flex items-center justify-center">
        <img src={props.imagePath} />
      </div>

  );
}

export default ImageCard