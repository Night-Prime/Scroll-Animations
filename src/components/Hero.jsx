import React, { useRef } from "react";

const Hero = () => {
  const app = useRef();

  return (
    <div ref={app}>
      <h1 className="header">Horizontal-Scroll</h1>
    </div>
  );
};

export default Hero;
