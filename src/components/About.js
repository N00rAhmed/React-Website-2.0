import React from 'react'
import styled from 'styled-components';

function About() {
  return (
      <Container>
          <AboutMe>About Me</AboutMe>
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
align-items: center;
flex-direction: column;
font-size: 40px;
`


export default About;