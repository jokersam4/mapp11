import React from 'react'
import { banner } from "../assets/video";
const Bannervideo = () => {
  return (
    <div className='main'>
      <video
        src={banner}
        autoPlay
        loop
        muted
        className='video'
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
        }}
      ></video>
    </div>
  );
};


export default Bannervideo