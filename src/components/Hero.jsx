import React from 'react';
import ConnectButtonWithModal from './ConnectButton';

const Hero = () => {
  return (
    <div className="relative w-full h-[903px] mt-[120px] overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
      >
        <source src="path/to/silent-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative flex flex-col items-center justify-center h-full text-center text-white px-4">
        <div className="max-w-[1014px] flex flex-col items-center gap-6">
          <h2 className="text-4xl font-semibold leading-[48px] font-poppins">
            Building Timeless Spaces, Creating Lasting Value
          </h2>
          <p className="max-w-[846px] text-base leading-6 font-medium font-poppins">
            Over 30 years of excellence in real estate — from custom homes to commercial developments, BlueStar builds beautiful, high-quality spaces with lasting value.
          </p>
          <ConnectButtonWithModal/>
        </div>
      </div>
    </div>
  );
};

export default Hero;