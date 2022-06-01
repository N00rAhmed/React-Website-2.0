import React from "react";
import { Sidenav } from "rsuite";

import "../styles/SidebarNav.css";
import "react-typist/dist/Typist.css";
import Fade from 'react-reveal/Fade';

// const isMobile = window.innerWidth < 600;

class SidebarNav extends React.Component {
  constructor() {
    super();
  }
  render() {
    const links = [
      <a href="#home">/home</a>,
      <a href="#about">/about</a>,
      <a href="#experience">/education</a>,
      <a href="#projects">/software-creations</a>
    ];

    return (
      <div className="sidebar-nav">
            <Sidenav.Body>
              <div className="sidebar-links">
                {links.map((link, i) => (
                    <div>{link}</div>
                ))}
              </div>
            </Sidenav.Body>

      </div>
    );
  }
}


export default SidebarNav;
