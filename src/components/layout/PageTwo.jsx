import React from "react";
import { ReactComponent as GraphSVG } from "./../images/illustration-editor-desktop.svg";

const PageTwo = () => (
  <div className="page-two">
    <div>
      <GraphSVG className="circle-svg" />
    </div>
    <h1 className="page-two-header">Designed for future</h1>
    <div className="page-two-content">
      <h2 className="page-two-sub-header">Introducing an extensible editor</h2>
      <div className="page-two-text">
        Blogr features an exceedingly intuitive interface which lets you focus
        on one thing: creating content. The editor supoorts managements of
        multiple blogs and allows easy manipulation of embeds such as images,
        videos, and Markdown. Extensibility with pluging and themes provide easy
        ways to add functionality or change the looks of a blog.
      </div>
      <h2 className="page-two-sub-header">Robust content management</h2>
      <div className="page-two-text">
        Flexible content management enables users to easily move through posts.
        Increase the usability of your blog by adding customized categories,
        sections, format, or flow. With this functionality, you're in full
        control.
      </div>
    </div>
  </div>
);

export default PageTwo;
