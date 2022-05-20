import React from 'react'
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function About() {
  return (
      <Container>
          <div>
              <Fade bottom>
                  <AboutMe>About Me</AboutMe>
                  
                  <Content>I have graduated from a coding bootcamp which was focused in full-stack web development. Also i am working on a few of my own personal 
                      projects such a booking app. My plan for the future is to go in to front-end or full-stack development.</Content>
                  
                  <Gif><img src="FemaleWholeLeafbird-size_restricted.gif" height={'50px'}></img></Gif>
                  
                  <Tech>Here are some technologies that i have been working with: <li>JavaScript</li><li>React js</li><li>Python</li><li>HTML/CSS</li><li>JSON</li><li>MongoDB/Mongoose</li></Tech>

                  <Interest>Outside of this work im interested in 3D animation and graphic design.</Interest>
              </Fade>
          </div>
      </Container>
  )
}

const Container = styled.div`
overflow: hidden;
display: flex;
flex-direction: column;
align-items: flex-start;
padding-left: 15%;
padding-top: 5%;
min-height: 100vh;
`
const AboutMe = styled.h2`
display: flex;
justify-content: left;
align-items: left;
flex-direction: column;
font-size: 40px;
`
const Content = styled.p`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
// max-width: 35%;
max-width: 50%;
font-size:20px;
text-align: justify;
`

const Gif = styled.div`
display: flex;
justify-content: left;
text-align: justify;
`

const Tech = styled.p`
display: flex;
justify-content: left;
text-align: justify;
flex-direction: column;
font-size:20px;
max-width:35%;
`
const Interest = styled.p`
display: flex;
justify-content: left;
text-align: justify;
flex-direction: column;
max-width:35%;

font-size:20px;
`

export default About;