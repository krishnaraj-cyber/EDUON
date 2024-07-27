
import React from 'react';
import axios from 'axios';
import { API_URL } from '../utils/api';


function VideoComponent({ src, onEnded, videoIndex, courseId, email }) {

  const handleVideoComplete = async () => {
    await onEnded(videoIndex); // Call the parent handler
    await axios.post(`${API_URL}/api/mark-video-complete`, {
      email,
      courseId,
      videoIndex,
    });
  };


  return (
    <video width="100%" controls onEnded={handleVideoComplete}>
      <source src={src} type="video/mp4" />
     Videos Support
    </video>
  );
}

export default VideoComponent;
