import React from 'react'
import '../styles/SoftwareCreations.css'
import styled from 'styled-components'
import { AiFillGithub } from 'react-icons/ai';

function SoftwareCreations() {
  return (
      <Container>
          <div id="projects">
              <Title>Software Creations</Title>
          </div>
          <div className='container'>
              <div className='cards'>
                  <SubTitle>BookList API:</SubTitle>
                  <Des>Created API in Agile environment which follows CRUD method of operation. Node.js was used for the development and insomnia was used for testing of the API.</Des>
                  <div className='tech'>
                      Node.JS, JSON
                  </div>
                  <div className='github'>
                      <a href='https://github.com/N00rAhmed?tab=repositories'>
                          <AiFillGithub style={{fontsize: 30}} />
                       </a>
                  </div>

              </div>

              <div className='cards'>
                  <SubTitle>BookList API:</SubTitle>
                  <Des>Created API in Agile environment which follows CRUD method of operation..</Des>
                  <div className='tech'>
                      Node.JS, JSON
                  </div>
                  <div className='github'>
                      <a href='https://github.com/N00rAhmed?tab=repositories'>
                          <AiFillGithub style={{fontsize: 30}} />
                       </a>
                  </div>

              </div>

              <div className='cards'>
                  <SubTitle>BookList API:</SubTitle>
                  <Des>Created API in Agile environment which follows CRUD method of operation..</Des>
                  <div className='tech'>
                      Node.JS, JSON
                  </div>
                  <div className='github'>
                      <a href='https://github.com/N00rAhmed?tab=repositories'>
                          <AiFillGithub style={{fontsize: 30}} />
                       </a>
                  </div>

              </div>

              <div className='cards'>
                  <SubTitle>BookList API:</SubTitle>
                  <Des>Created API in Agile environment which follows CRUD method of operation..</Des>
                  <div className='tech'>
                      Node.JS, JSON
                  </div>
                  <div className='github'>
                      <a href='https://github.com/N00rAhmed?tab=repositories'>
                          <AiFillGithub style={{fontsize: 30}} />
                       </a>
                  </div>

              </div>

              <div className='cards'>
                  <SubTitle>BookList API:</SubTitle>
                  <Des>Created API in Agile environment which follows CRUD method of operation..</Des>
                  <div className='tech'>
                      Node.JS, JSON, mongodb/mongoo0se
                  </div>
                  <div className='github'>
                      <a href='https://github.com/N00rAhmed?tab=repositories'>
                          <AiFillGithub style={{fontsize: 30}} />
                       </a>
                  </div>

              </div>

              <div className='cards'>
                  <SubTitle>BookList API:</SubTitle>
                  <Des>Created API in Agile environment which follows CRUD method of operation. This is just some more placement text to test thsi..</Des>
                  <div className='tech'>
                      React.JS, 
                  </div>
                  <div className='github'>
                      <a href='https://github.com/N00rAhmed?tab=repositories'>
                          <AiFillGithub style={{fontsize: 30}} />
                       </a>
                  </div>

              </div>
              

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

const Title = styled.h2`
display: flex;
justify-content: left;
align-items: left;
flex-direction: column;
font-size: 40px;
padding-top: 40px;
color:rgb(109, 216, 219)
`
// in future move logo near top after adding text so its more visible
// const Github = styled.div`

// padding-left: 75%;
// height: 0px;
// font-size: 35px;
// `
const SubTitle = styled.h1`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 0px;
padding-right: 25%;
padding-top: 5%;
font-size: 25px;
height: 5px;
`

const Des = styled.p`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 0px;
padding-left: 3%;
padding-top: 7%;
font-size: 15px;
height: 130px;
`

// const Tech = styled.p`
// display: flex;
// justify-content: center;
// align-items: center;
// flex-direction: column;
// padding: 0px;
// padding-right: 43%;
// padding-bottom: 50%;
// font-size: 15px;
// `
export default SoftwareCreations