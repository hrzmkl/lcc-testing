"use client";

import React from "react";

const NousVoulonsSectionVideoContainer = () => {
  return (
    <div className="w-[50%] h-full flex justify-end relative overflow-hidden">
      <video
        className="absolute left-0 top-0 w-auto h-full object-cover"
        src="/Images/terre.webm"  
        autoPlay
        loop
        muted
        style={{
          objectPosition: "left",  
        }}
      />
    </div>
  );
};

export default NousVoulonsSectionVideoContainer;
