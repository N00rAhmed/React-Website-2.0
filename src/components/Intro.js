import React, {Component} from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom';
import styled from 'styled-components'
import '../styles/Intro.css'
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
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
            <Des>Hello my name is Noor and I am looking for a job in software development. I know how to work with both front-end and backend technologies which I have explained and demonstrated on this website.</Des>
              {/*<Des>Hello my name is Noor Ahmed and I am looking for a job in software development. I know how to use a wide range of tech-stacks/technologies and I can also deploy applications which you can view and use on this website.</Des> */}

            <Email href='mailto:noor.ahmed232003@outlook.com' target="_blank">
              <MdEmail style={{ fontSize: 30}} />
              &nbsp;Say hi
            </Email>
          </Fade>
        </div>

      </Container>
    </Router>

  );
};
}


const Container = styled.section`
padding-left: 15%;
padding-top: 5%;
`;

const Title = styled.h1`
padding: 0px;
font-size: 60px;
`;

const Des = styled.p`
width: 35%;
font-size: 20px;
text-align: justify;
// background-color: aliceblue;
`;

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