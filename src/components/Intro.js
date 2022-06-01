import React, {Component} from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom';
import styled from 'styled-components'
import '../styles/Intro.css'
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import {MdOutlineEmail} from 'react-icons/md';
import Fade from 'react-reveal/Fade';
import Typewriter from 'typewriter-effect';

// create tags and then create another tags too store info. Similar to variables but for react. This is done to use styled components

class Intro extends React.Component {
  render() {
  return(
    <Router>
      <Container>
        <div id='home'>
          <Title>
            <div className='intro-name'>
              <Typewriter
              onInit={(typewriter)=> {
                typewriter
                .typeString('Noor Ahmed')
                .start();
              }}
              />
            </div>
          
          </Title>
        </div>
        <div>
          <Fade bottom>
            <Des>Hello my name is Noor and I am looking for my first job in software development. I know how to work with both front-end and backend technologies which I have explained and demonstrated on this website.</Des>
          </Fade>
        </div>

          <div className='iconss'>

            <Fade bottom>

              <Logo>
                  <a href='https://github.com/N00rAhmed'>
                    <AiFillGithub style={{ fontSize: 30}} />
                  </a>

                  <a href='https://www.linkedin.com/in/noor-ahmed-b762b0225/'>
                    <AiFillLinkedin style={{ fontSize: 30}} />
                  </a>

                  <a href='mailto:noor.ahmed232003@outlook.com'>
                    <AiOutlineMail style={{ fontSize: 30 }} />
                  </a>
                </Logo>

                {/* <a href='mailto:noor.ahmed232003@outlook.com'
                className='intro-contact'>
                </a> */}

            </Fade>
          </div>

          
      </Container>
    </Router>

  );
};
}
const Container = styled.section`
overflow: hidden;
display: flex;
flex-direction: column;
align-items: flex-start;
padding-left: 15%;
padding-top: 5%;
min-height: 100vh;

`;

const Title = styled.h1`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 0px;
font-size: 60px;
`;

const Des = styled.p`
display: flex;
justify-content: 'center';
align-items: center;
flex-direction: column;
max-width: 35%;
// max-width: 50%;
font-size: 20px;
text-align: justify;
`;

const Logo = styled.div`
padding-top: 42px;
width: 70px;
display: flex;
flex-direction: row;
justify-content: space-between;
padding-bottom: 8px;
`;

const Contact = styled.button`
display:flex;
flex-direction: column;
justify-content: center;
font-size: 22px;
font-weight: bolder;
font-family: "NTR", sans-serif;
padding: 10px 30px;
cursor: pointer;
border-radius: 4px;
}`

export default Intro;