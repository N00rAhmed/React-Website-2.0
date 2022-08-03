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
                <div className='cards'>
                    <SubTitle>BookList API:</SubTitle>
                    <Des>Created API in Agile environment which follows CRUD method of operation. Node.js and MongoDB was used for the development and insomnia was used for testing of the API.</Des>
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
                    <SubTitle>Weather App:</SubTitle>
                    <Des>App that allows you to type in the name of any city to then display the weather data. OpenWeather API was used to fetch data.</Des>
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
                    <SubTitle>Adventure Game:</SubTitle>
                    <Des>The adventure game shows a story through which the user is given some options to choose from. If chosen the correct options then the game will finish but if not then it will continue to loop.</Des>
                    <div className='tech'>
                        HTML/CSS, JavaScript
                    </div>
                    <div className='github'>
                        <a href='https://github.com/N00rAhmed/text-based-adventure-game-js' target="_blank">
                            <AiFillGithub style={{fontsize: 30}} />
                        </a>
                    </div>
                    <div className='icon'>
                        <a href='https://n00rahmed.github.io/text-based-adventure-game-js/' target="_blank">
                            <BsBoxArrowUpRight style={{fontsize: 30}} />
                        </a>
                    </div>

                </div>

                <div className='cards'>
                    <SubTitle>Chrome Extension:</SubTitle>
                    <Des>This is a Google Chrome Extension which blocks social media sites, HTML/CSS animation is used to display a message. JSON was used for creating blocking functionality.</Des>
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
                    <SubTitle>Disney+ Clone</SubTitle>
                    <Des>This project is still under development. The clone currently has login functionality, main page, navigation and smooth scroll.</Des>
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
display: flex;
flex-direction: column;
padding-left: 15%;
padding-top: 5%;
min-height: 165vh;
`;



const Content = styled.div`
margin-right: 21%;
padding-bottom: 2%;
`;

const Title = styled.h2`
display: flex;
align-items: left;
font-size: 40px;
padding-top: 40px;
color:rgb(109, 216, 219)
`
// in future move logo near top after adding text so its more visible
// const Github = styled.div`
// add button in intro to emaiil
// change/fix experience section

const SubTitle = styled.h1`
margin-left: 8px;
padding-top: 5%;
font-size: 25px;
height: 50px;
`

const Des = styled.p`
display: flex;
align-items: center;
height: 130px;
font-family: calibri;
font-size: 17px;
`

export default SoftwareCreations