import React from "react";
import Navbar from "./Navbar";
import HeaderContent from "./HeaderContent";
import { ReactComponent as BGPattern } from "./../images/bg-pattern-intro-desktop.svg";

const Header = () => (
  <div className="header">
    <BGPattern className="BG-pattern" />
    <Navbar />
    <HeaderContent />
  </div>
);

export default Header;
