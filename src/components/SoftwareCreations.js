import React from 'react'
import '../styles/SoftwareCreations.css'
import styled from 'styled-components'
import { AiFillGithub } from 'react-icons/ai';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { FaRegFolder } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';

function SoftwareCreations() {
  return (
      <Fade bottom>
          <Container>
            <div id="projects">
                    <Title>Software Creations</Title>

                </div>
                <Content>
                <div className='container'>

                {/* <div className='container'> */}
                <div className='cards'>
                    <div className='folder'>
                        <FaRegFolder size={40}/>
                    </div>
                    <SubTitle>BookList API:</SubTitle>
                    <Des>Allows you to create a bookList in the back-end using insomnia and update/delete data. This was created in an Agile environment.</Des>
                    <div className='tech'>
                        Node.JS, Mongodb, JSON
                    </div>
                    <div className='github'>
                        <a href='https://github.com/N00rAhmed/bookList' target="_blank">
                            <AiFillGithub style={{fontsize: 30}} />
                        </a>
                    </div>

                </div>

                <div className='cards'>
                <div className='folder'>
                        <FaRegFolder size={40}/>
                    </div>
                    <SubTitle>Weather App:</SubTitle>
                    <Des>Allows you to type in name of any city and display's the weather data. OpenWeather API was used to fetch data.</Des>
                    <div className='tech'>
                        React.JS
                    </div>
                    <div className='github'>
                        <a href='https://github.com/N00rAhmed/Weather-App' target="_blank">
                            <AiFillGithub style={{fontsize: 30}} />
                        </a>
                    </div>
                    <div className='icon'>
                        <a href='https://weather-app-33516.netlify.app' target="_blank">
                            <BsBoxArrowUpRight style={{fontsize: 30}} />
                        </a>
                    </div>

                </div>

                <div className='cards'>
                <div className='folder'>
                        <FaRegFolder size={40}/>
                    </div>
                    <SubTitle>Caesar Cipher:</SubTitle>
                    <Des>Creates encrypted message which can be decrypted as well. Number method was used to convert letter value to number.</Des>
                    <div className='tech'>
                        HTML/CSS, JavaScript
                    </div>
                    <div className='github'>
                        <a href='https://github.com/N00rAhmed/Caesar-Cipher' target="_blank">
                            <AiFillGithub style={{fontsize: 30}} />
                        </a>
                    </div>
                    <div className='icon'>
                        <a href='https://n00rahmed.github.io/Caesar-Cipher/' target="_blank">
                            <BsBoxArrowUpRight style={{fontsize: 30}} />
                        </a>
                    </div>

                </div>

                <div className='cards'>
                <div className='folder'>
                        <FaRegFolder size={40}/>
                    </div>
                    <SubTitle>Chrome Extension:</SubTitle>
                    <Des>The Chrome Extension blocks social media sites. JSON was used for blocking sites and HTML/CSS animation is used for front-end.</Des>
                    <div className='tech'>
                        HTML/CSS, JavaScript, JSON
                    </div>
                    <div className='github'>
                        <a href='https://github.com/N00rAhmed/Social-Media-Blocker' target="_blank">
                            <AiFillGithub style={{fontsize: 30}} />
                        </a>
                    </div>

                </div>

                <div className='cards'>
                <div className='folder'>
                        <FaRegFolder size={40}/>
                    </div>
                    <SubTitle>Blog Website:</SubTitle>
                    <Des>Created a blog web application which creates and delete's a blog post and store's that information within a MongoDB database.</Des>
                    <div className='tech'>
                        Node.js, Express.js, MongoDB
                    </div>
                    <div className='github'>
                        <a href='https://github.com/N00rAhmed/nodejs-site' target="_blank">
                            <AiFillGithub style={{fontsize: 30}} />
                        </a>
                    </div>
                    <div className='icon'>
                        <a href='https://nodejs-blog-sitee.herokuapp.com/blogs' target="_blank">
                            <BsBoxArrowUpRight style={{fontsize: 30}} />
                        </a>
                    </div>

                </div>

                <div className='cards'>
                <div className='folder'>
                        <FaRegFolder size={40}/>
                    </div>
                    <SubTitle>Disney+ Clone</SubTitle>
                    <Des>This project is still under development. This web app shows the UI of Disney Plus and currently has login functionality and main page.</Des>
                    <div className='tech'>
                        React.js, Redux, Firebase 
                    </div>
                    <div className='github'>
                        <a href='https://github.com/N00rAhmed/DisneyPlus-Clone' target="_blank">
                            <AiFillGithub style={{fontsize: 30}} />
                        </a>
                    </div>
                    <div className='icon'>
                        <a href='https://disn3y-plus.netlify.app/' target="_blank">
                            <BsBoxArrowUpRight style={{fontsize: 30}} />
                        </a>
                    </div>
                </div>
            </div>
                </Content>
          </Container>

      </Fade>
  )
}

const Container = styled.div`
// padding-left: 15%;
// min-height: 165vh;
`;

const Content = styled.div`
// display:flex;
// align-items: left;
// padding-right:5%;
// padding-bottom: 2%;
display: flex;
align-items: right;
// font-size: 40px;
padding-top: 40px;

padding-right:15%;


`;

const Title = styled.h2`
display: flex;
align-items: left;
font-size: 40px;
padding-top: 40px;

padding-left:15%;

color:rgb(109, 216, 219)
`
// in future move logo near top after adding text so its more visible
// const Github = styled.div`
// add button in intro to emaiil
// change/fix experience section

const SubTitle = styled.h1`
margin-left: 8px;
// 5
padding-top: 3%;
font-size: 25px;
// height: 50px;
height: 30px;
// background-color:white;
`

const Des = styled.p`
display: flex;
align-items: center;
// 130
height: 100px;
font-family: calibri;
font-size: 17px;
`

export default SoftwareCreations