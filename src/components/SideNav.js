import React from "react";
import { Sidenav } from "rsuite";
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { ImNewspaper } from 'react-icons/im';
import { FaYoutube } from "react-icons/fa";


// import { ArticleIcon } from '@mui/icons-material/Article';
import styled from 'styled-components'

import "../styles/SidebarNav.css";
import "react-typist/dist/Typist.css";
import Fade from 'react-reveal/Fade';

class SidebarNav extends React.Component {
  constructor() {
    super();
  }
  render() {
    const links = [
      <a href="#home">/home</a>,
      <a href="#about">/about</a>,
      <a href="#experience">/experience</a>,
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

            
          <div className='iconss'>

            <Fade bottom>

              <Logo>
                  <a className="socialLinks" href='https://github.com/N00rAhmed' target="_blank">
                    <AiFillGithub style={{ fontSize: 30}} />
                  </a>

                  <a className="socialLinks" href='https://www.linkedin.com/in/noor-ahmed-b762b0225/' target="_blank">
                    <AiFillLinkedin style={{ fontSize: 30}} />
                  </a>

                  <a className="socialLinks" href='https://noor-ahmed.hashnode.dev' target="_blank">
                    <ImNewspaper style={{ fontSize: 30}} />
                  </a>

                  <a className="socialLinks" href='https://youtube.com/@tronn62158?si=SDyOiMP9-nwY1IjC' target="_blank">
                    <FaYoutube style={{ fontSize: 30 }} />
                  </a>


                  <a className="socialLinks" href='mailto:noor.ahmed232003@outlook.com' target="_blank">
                    <AiOutlineMail style={{ fontSize: 30 }} />
                  </a>



{/* FaYoutube */}

                </Logo>
{/* MdArticle */}
                {/* <a href='mailto:noor.ahmed232003@outlook.com'
                className='intro-contact'>
                </a> */}

            </Fade>
            </div>

      </div>
    );
  }
}

const Logo = styled.div`
padding-top: 0px;
width: 105px;
// width: 70px;
display: flex;
flex-direction: row;
justify-content: space-between;
padding-bottom: 0px;

`;
export default SidebarNav;
