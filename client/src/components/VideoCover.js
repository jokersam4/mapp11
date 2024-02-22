import React from 'react';
import {banner} from '../assets/video'
const VideoCover = () => {
  return (
    <div className=" relative w-full h-full" style={{ paddingBottom: '56.25%' }}>
      {/* The aspect ratio container */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={banner} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoCover;
