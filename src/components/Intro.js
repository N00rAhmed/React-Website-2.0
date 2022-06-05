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

// for the future
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