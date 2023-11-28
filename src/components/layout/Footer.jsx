import React from "react";
import { ReactComponent as LogoImage } from "./../images/logo.svg";

const Footer = () => (
  <div className="footer">
    <LogoImage className="footer-logo" />
    <div className="footer-wrapper">
      <div className="footer-columns">
        <div className="footer-title">Product</div>
        <div className="footer-button-wrapper">
          <button className="footer-button">Overview</button>
        </div>

        <div className="footer-button-wrapper">
          <button className="footer-button">Pricing</button>
        </div>
        <div className="footer-button-wrapper">
          <button className="footer-button">Marketplace</button>
        </div>
        <div className="footer-button-wrapper">
          <button className="footer-button">Features</button>
        </div>
        <div className="footer-button-wrapper">
          <button className="footer-button">Integrations</button>
        </div>
      </div>
      <div className="footer-columns">
        <div className="footer-title">Company</div>
        <div className="footer-button-wrapper">
          <button className="footer-button">About</button>
        </div>
        <div className="footer-button-wrapper">
          <button className="footer-button">Team</button>
        </div>
        <div className="footer-button-wrapper">
          <button className="footer-button">Blog</button>
        </div>
        <div className="footer-button-wrapper">
          <button className="footer-button">Careers</button>
        </div>
      </div>
      <div className="footer-columns">
        <div className="footer-title">Connect</div>
        <div className="footer-button-wrapper">
          <button className="footer-button">Contact</button>
        </div>
        <div className="footer-button-wrapper">
          <button className="footer-button">Newsletter</button>
        </div>
        <div className="footer-button-wrapper">
          <button className="footer-button">Linkedin</button>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
