
import React from 'react';

function VideoComponent({ src }) {
  return (
    <video width="100%" controls>
      <source src={src} type="video/mp4" />
     Videos
    </video>
  );
}

export default VideoComponent;
