import React from "react";
import { ReactComponent as LaptopSVG } from "./../images/illustration-laptop-desktop.svg";

const PageFour = () => (
  <div className="page-four">
    <div>
      <LaptopSVG className="page-four-laptop-svg" />
    </div>
    <div className="page-four-content">
      <h2 className="page-four-sub-header">Introducing an extensible editor</h2>
      <div className="page-four-text">
        Blogr features an exceedingly intuitive interface which lets you focus
        on one thing: creating content. The editor supoorts managements of
        multiple blogs and allows easy manipulation of embeds such as images,
        videos, and Markdown. Extensibility with pluging and themes provide easy
        ways to add functionality or change the looks of a blog.
      </div>
      <h2 className="page-four-sub-header">Robust content management</h2>
      <div className="page-four-text">
        Flexible content management enables users to easily move through posts.
        Increase the usability of your blog by adding customized categories,
        sections, format, or flow. With this functionality, you're in full
        control.
      </div>
    </div>
  </div>
);

export default PageFour;
