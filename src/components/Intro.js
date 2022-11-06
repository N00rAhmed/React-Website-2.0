import React, {Component} from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom';
import styled from 'styled-components'
import '../styles/Intro.css'
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
// import {MdEmail, MdOutlineEmail} from 'react-icons/md';
import { MdEmail } from 'react-icons/md';
import Fade from 'react-reveal/Fade';
import Typewriter from 'typewriter-effect';

import Anime from './Anime.js';

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

            {/* <a href='mailto:noor.ahmed232003@outlook.com' target="_blank"></a> */}
            <Email href='mailto:noor.ahmed232003@outlook.com' target="_blank">
              <MdEmail style={{ fontSize: 30}} />
              &nbsp;Say hi
              {/* <a href='mailto:noor.ahmed232003@outlook.com' target="_blank">Email Me</a> */}
            </Email>
          </Fade>
        </div>

      </Container>
    </Router>

  );
};
}


const Container = styled.section`
// overflow: hidden;
// display: flex;
// flex-direction: column;
// align-items: flex-start;
padding-left: 15%;
padding-top: 5%;
// min-height: 100vh;
// min-height: 80vh;

`;

const Title = styled.h1`
// display: flex;
// justify-content: center;
// align-items: center;
// flex-direction: column;
padding: 0px;
font-size: 60px;
`;

const Des = styled.p`
// display: flex;
// justify-content: 'center';
// align-items: center;
// flex-direction: column;

width: 35%;
font-size: 20px;
text-align: justify;
// background-color: aliceblue;



// font-size: 25px;
`;

// for the future
const Contact = styled.button`
display:flex;
flex-direction: column;
justify-content: center;
font-size: 22px;
font-weight: bolder;
padding: 10px 30px;
cursor: pointer;
border-radius: 4px;
}`

const Email = styled.a`
display:flex;
flex-direction: row;
justify-content: center;
align-items: center;

// padding: 25px 24px;

height:70px;
width:160px;

color:rgb(109, 216, 219);

margin-top: 40px;
// margin-right:950px;

text-transform: uppercase;
letter-spacing: 1.5px;

border: 1px solid rgb(109, 216, 219);
border-radius: 4px;
transition: all 0.2s ease 0s;

&:hover {
  background-color: #233554;
  color: #f9f9f9;
  cursor: pointer;
}

`

export default Intro;