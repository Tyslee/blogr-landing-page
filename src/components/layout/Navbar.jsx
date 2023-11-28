import React, { useState } from "react";
import { ReactComponent as HamImage } from "./../images/icon-hamburger.svg";
import { ReactComponent as LogoImage } from "./../images/logo.svg";
import { ReactComponent as DropDownArrow } from "./../images/icon-arrow-light.svg";

const Navbar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  let openHam;
  if (hamburgerOpen) {
    openHam = (
      <>
        <button className="ham-item ham-first">Product</button>
        <button className="ham-item">Company</button>
        <button className="ham-item">Connect</button>
        <button className="ham-item">Login</button>
        <button className="ham-item ham-last">Sign Up</button>
      </>
    );
  } else {
    let openHam;
  }

  return (
    <div className="navbar">
      <LogoImage className="logo-img" />

      <div className="nav-desktop-menu">
        <div className="drop-down">
          Product <DropDownArrow />
        </div>
        <div className="drop-down">
          Company <DropDownArrow />
        </div>
        <div className="drop-down">
          Connect <DropDownArrow />
        </div>
        <button className="navbar-signup">Sign Up</button>
        <div className="navbar-login">Login</div>
      </div>
      <ul className="hamburger-menu">
        <HamImage className="ham-image" onClick={toggleHamburger}></HamImage>
        {openHam}
      </ul>
    </div>
  );
};

export default Navbar;
