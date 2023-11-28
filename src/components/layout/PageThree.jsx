import React from "react";
import { ReactComponent as CircleSVG } from "./../images/bg-pattern-circles.svg";
import { ReactComponent as PhoneSVG } from "./../images/illustration-phones.svg";

const PageThree = () => (
  <div className="page-three-full-wrapper">
    <div className="phone-wrapper">
      <PhoneSVG className="page-three-phones"></PhoneSVG>
    </div>

    <div className="page-three">
      <CircleSVG className="page-three-circle"></CircleSVG>
      <div className="page-three-content">
        <div className="page-three-wrapper">
          <h1 className="page-three-title">State of the Art Infrastructure</h1>
          <div className="page-three-text">
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PageThree;
