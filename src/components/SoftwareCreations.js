import React from 'react'

import ImgSlider from './ImgSlider';

import '../styles/SoftwareCreations.css'
import styled from 'styled-components'

import exe from '../download/TASK-APP.exe';

import { AiFillGithub } from 'react-icons/ai';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { FaRegFolder } from 'react-icons/fa';

import { BsDownload } from 'react-icons/bs';
import { FiDownload } from 'react-icons/fi'


import Fade from 'react-reveal/Fade';

function SoftwareCreations() {
  return (
    //   <Fade bottom>
          <Container>
            <div id="projects">
                    <Title>Software Creations</Title>

                    <Container2>
                        <ImgSlider />
                    </Container2>

                </div>
                <Content>
                <div className='container'>

                {/* <div className='cards'>
                    <div className='folder'>
                        <FaRegFolder size={40}/>
                    </div>
                    <SubTitle>CRUD API:</SubTitle>
                    <Des>This is API can perform CRUD operations to task data from my task tracker application. This is done via GET, POST, PUT and DELETE requests sent to the database.</Des>
                    <div className='tech'>
                        Node.JS, Express.js, Mongodb
                    </div>
                    <div className='github'>
                        <a href='https://github.com/N00rAhmed/CRUD-API' target="_blank">
                            <AiFillGithub style={{fontsize: 30}} />
                        </a>
                    </div>
                    <div className='icon'>
                        <a href='https://apicrud-n1uz.onrender.com/api/tasks' target="_blank">
                            <BsBoxArrowUpRight style={{fontsize: 30}} />
                        </a>
                    </div>


                </div> */}

                <div className='cards'>
                <div className='folder'>
                        <FaRegFolder size={40}/>
                    </div>
                    <SubTitle>Task Tracker</SubTitle>
                    <Des>This application can create and keep track of multiple tasks. Once you have completed a task you can delete it.</Des>
                    <div className='tech'>
                        MongoDB, Express.js, React.JS, Node.js
                    </div>
                    <div className='github'>
                        <a href='https://github.com/N00rAhmed/MERN-Frontend' target="_blank">
                            <AiFillGithub style={{fontsize: 30}} />
                        </a>
                    </div>
                    <div className='icon'>
                        <a href='https://m3rn-task-app.netlify.app' target="_blank">
                            <BsBoxArrowUpRight style={{fontsize: 30}} />
                        </a>
                    </div>

                </div>


                <div className='cards'>
                <div className='folder'>
                        <FaRegFolder size={40}/>
                    </div>
                    <SubTitle>Worklist Manager</SubTitle>
                    <Des>This app enables users to register, login, manage tasks (create, edit, delete), and mark them as completed or incomplete.</Des>

                    <div className='tech'>
                        .NET Framework, Windows Forms, CockroachDB (SQL)
                    </div>
                    <div className='github'>
                        <a href='https://github.com/N00rAhmed/Task-Manager' target="_blank">
                            <AiFillGithub style={{fontsize: 30}} />
                        </a>
                    </div>
                    <div className='icon'>
                        <a href={exe} download>
                            <FiDownload style={{fontsize: 30}} />
                        </a>
                    </div>

                </div>



                <div className='cards'>
                <div className='folder'>
                        <FaRegFolder size={40}/>
                    </div>
                    <SubTitle>pending</SubTitle>
                    <Des>currently there isnt anything here but there will be a full-stack deployed php and mysql web app here.</Des>
                    <div className='tech'>
                        php, mysql
                    </div>
                    <div className='github'>
                        <a href='' target="_blank">
                            <AiFillGithub style={{fontsize: 30}} />
                        </a>
                    </div>
                    <div className='icon'>
                        <a href='' target="_blank">
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

                {/* <div className='cards'>
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
 */}

                <div className='cards'>
                <div className='folder'>
                        <FaRegFolder size={40}/>
                    </div>
                    <SubTitle>Image API</SubTitle>
                    <Des>This API can add images to a MongoDB database and you can search for your images by their ID and have them rendered. For more info please look at the README.MD.</Des>
                    <div className='tech'>
                        Node.js, Express.js, MongoDB, Postman
                    </div>
                    <div className='github'>
                        <a href='https://github.com/N00rAhmed/Image-API' target="_blank">
                            <AiFillGithub style={{fontsize: 30}} />
                        </a>
                    </div>
                    <div className='icon'>
                        <a href='https://image-api-f8qs.onrender.com' target="_blank">
                            <BsBoxArrowUpRight style={{fontsize: 30}} />
                        </a>
                    </div>

                </div>


                {/* <div className='cards'>
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
                        <a href='https://nodejsblog.onrender.com/blogs' target="_blank">
                            <BsBoxArrowUpRight style={{fontsize: 30}} />
                        </a>
                    </div>

                </div> */}



                <div className='cards'>
                <div className='folder'>
                        <FaRegFolder size={40}/>
                    </div>
                    <SubTitle>Disney+ Clone</SubTitle>
                    <Des>This web app shows the UI of Disney Plus and currently has login functionality and main page.</Des>
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


                <div className='cards'>
                <div className='folder'>
                        <FaRegFolder size={40}/>
                    </div>
                    <SubTitle>Free Hosting Resources Website</SubTitle>
                    <Des>pending.</Des>
                    <div className='tech'>
                        Next.js, TypeScript
                    </div>
                    <div className='github'>
                        <a href='https://github.com/N00rAhmed/Free-Hosting-Services' target="_blank">
                            <AiFillGithub style={{fontsize: 30}} />
                        </a>
                    </div>
                    <div className='icon'>
                        <a href='' target="_blank">
                            <BsBoxArrowUpRight style={{fontsize: 30}} />
                        </a>
                    </div>

                </div>

                
                <div className='cards'>
                <div className='folder'>
                        <FaRegFolder size={40}/>
                    </div>
                    <SubTitle>Excel to MongoDB</SubTitle>
                    <Des>pending.</Des>
                    <div className='tech'>
                        React.js, TypeScript, Node.js
                    </div>
                    <div className='github'>
                        <a href='https://github.com/N00rAhmed/Excel-to-MongoDB-Uploader' target="_blank">
                            <AiFillGithub style={{fontsize: 30}} />
                        </a>
                    </div>
                    <div className='icon'>
                        <a href='' target="_blank">
                            <BsBoxArrowUpRight style={{fontsize: 30}} />
                        </a>
                    </div>

                </div>



                <div className='cards'>
                <div className='folder'>
                        <FaRegFolder size={40}/>
                    </div>
                    <SubTitle>AI Project</SubTitle>
                    <Des>pending.</Des>
                    <div className='tech'>
                        pending
                    </div>
                    <div className='github'>
                        <a href='' target="_blank">
                            <AiFillGithub style={{fontsize: 30}} />
                        </a>
                    </div>
                    <div className='icon'>
                        <a href='' target="_blank">
                            <BsBoxArrowUpRight style={{fontsize: 30}} />
                        </a>
                    </div>

                </div>





            </div>
                </Content>
          </Container>

    //   </Fade>
  )
}

const Container2 = styled.main`
position: relative;
overflow-x: hidden;
overflow-y: hidden;

display: block;

padding: 0 calc(13.5vw + 15px);

`;


const Container = styled.div`
`;

const Content = styled.div`
display: flex;
align-items: right;

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

const SubTitle = styled.h1`
margin-left: 8px;
padding-top: 3%;
font-size: 25px;
height: 30px;
`

const Des = styled.p`
display: flex;
align-items: center;
height: 100px;
font-family: calibri;
font-size: 17px;
`

export default SoftwareCreations