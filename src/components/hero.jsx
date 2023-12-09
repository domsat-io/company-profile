import React from "react";

const Hero = () => {
  return (
    <div className="bg-black">
      <div className="px-6 pt-[72px] pb-12">
        <h1 className="text-white uppercase">
          JOIN US<span className="text-accent">.</span>
        </h1>
        <h2 className="text-white uppercase">
          Unlock the power of digital marketing and take your business to the
          next level.
        </h2>
      </div>
      <div className="h-[92px] bg-accent">
        {/* <span className="uppercase text-4xl text-white">
          Social Media Management
        </span>
        <span>*</span>
        <span className="uppercase text-4xl text-white">Digital Marketing</span> */}
      </div>
    </div>
  );
};

export default Hero;
