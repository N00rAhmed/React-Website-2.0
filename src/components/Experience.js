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
                  
                  </div>
                  <div className='title'>
                    Experience
                  </div>
                </Exp>
                <div className='border'>
                  <JobList></JobList>
                </div>
              </Fade>
          </div>
          
      </Container>
  )
}

const Container = styled.div`
flex-direction: column;
align-items: flex-start;
padding-left: 15%;
`

const Exp = styled.h2`
flex-direction: column;
font-size: 40px;
padding-bottom:0px;

color:rgb(109, 216, 219)
`


export default Experience