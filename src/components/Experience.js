import React from 'react'
import styled from 'styled-components'
import JobList from './JobList';
import '../styles/Experience.css';
import Fade from 'react-reveal/Fade';

function Experience() {
  return (
      <Container>
          <div id='experience'>
              <Fade bottom>
                <Exp>
                  <div className='titleglow'>
                    Education & Achievements
                  </div>
                </Exp>
                <JobList></JobList>
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

const Exp = styled.h2`
display: flex;
justify-content: left;
align-items: left;
flex-direction: column;
font-size: 40px;
color:rgb(109, 216, 219)
`


export default Experience