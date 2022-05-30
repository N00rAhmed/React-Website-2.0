import React from "react";
import { Sidenav } from "rsuite";

import "../styles/SidebarNav.css";
import "react-typist/dist/Typist.css";
import Fade from 'react-reveal/Fade';

// const isMobile = window.innerWidth < 600;

class SidebarNav extends React.Component {
  constructor() {
    super();
    // this.state = {
//       expanded: true,
      // activeKey: "1"
    // };
//     this.handleSelect = this.handleSelect.bind(this);
  }
  // handleSelect(eventKey) {
    // this.setState({
      // activeKey: eventKey
    // });
  // }
  render() {
    // const { expanded } = this.state;
// Add turquoise color to nav text and with cursor hover change to white
    const links = [
      <a href="#home">/home</a>,
      <a href="#about">/about</a>,
      <a href="#experience">/education</a>,
      <a href="#projects">/software-creations</a>
    ];

    return (
      <div className="sidebar-nav">
        {/* {!isMobile && ( */}
          {/* <Sidenav> */}
            {/* // expanded={expanded}
            // defaultOpenKeys={["3", "4"]}
            // activeKey={this.state.activeKey}
            // onSelect={this.handleSelect}
            // appearance={"subtle"} */}
          
            <Sidenav.Body>
              <div className="sidebar-links">
                {links.map((link, i) => (
                    <div>{link}</div>
                ))}
              </div>
            </Sidenav.Body>
          {/* </Sidenav> */}
        {/* )} */}

      </div>
    );
  }
}


export default SidebarNav;
