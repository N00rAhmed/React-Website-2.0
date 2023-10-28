import React from "react";
import "../styles/About.css";
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

import { FaReact } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { IoLogoNodejs } from "react-icons/io";
import { FaPython } from "react-icons/fa";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { VscJson } from "react-icons/vsc";
import { SiMongodb } from "react-icons/si";
import { SiCsharp } from "react-icons/si";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaPhp } from "react-icons/fa";

// SiSqlite
// BsFiletypeSql
// SiMysql
// SiMicrosoftsqlserver
// SiDotnet
// TbBrandCSharp
// SiDotnet
// SiMongodb
// BsFiletypeJson
// FaCss3Alt
// AiOutlineHtml5
// FaPython
// IoLogoJavascript

function About() {
    return (
        <Container>
            <div>
                <Fade bottom>
                    <div id="about">
                        <AboutMe>
                            <div className="glow">
                                About Me
                            </div>
                        </AboutMe>
                    </div>
                    
                    <Content>I graduated from a full-stack web development coding bootcamp in May 2022. In total I have around 2 years of 
                        proffesional experience working in software development. My experience ranges with various organizations and tech-stacks which have
                        allowed me learn and grow in this field. Some of my previous work includes working as a Full-Stack Engineer, developing a community 
                        website which was built using MERN stack and also working as a software engineer intern, developing on both client and server side using
                        SERN stack: React.js, Node.js, Express.js and SQL Server.</Content>
                    
                    <Tech>Here are the technologies that I know how to use:</Tech>


                    <Fade bottom>
                        
                        <div className="about-content">
                            <div className="about-description">

                            <ul className="tech-stack">

                                <IoLogoJavascript style={{ height: "50px", width: "50px", backgroundColor: "#063970"}} />
                                <FaReact style={{height: "50px", width: "50px"}} />
                                <IoLogoNodejs style={{height: "50px", width: "50px"}} />
                                <FaPython style={{height: "50px", width: "50px"}} />
                                <AiOutlineHtml5 style={{height: "50px", width: "50px"}} />
                                <FaCss3Alt style={{height: "50px", width: "50px"}} />
                                <VscJson style={{height: "50px", width: "50px"}} />
                                <SiMongodb style={{height: "50px", width: "50px"}} />
                                <SiCsharp style={{height: "50px", width: "50px"}}/>
                                <SiMicrosoftsqlserver style={{height: "50px", width: "50px"}}/>
                                <SiMysql style={{height: "50px", width: "50px"}}/>
                                <FaPhp style={{height: "50px", width: "50px"}} />
                                {/* {tech_stack.map(function (tech_item, i) {
                        return (
                        <li>{tech_item}</li>
                        );
                        })} */}
                            </ul>
                        </div>
                        </div>

                    </Fade>

                    <Interest>Other than this my hobbies include writing, animation and graphic design.</Interest>
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
  `
  const AboutMe = styled.h2`
  display: flex;
  justify-content: left;
  align-items: left;
  flex-direction: column;
  font-size: 40px;
  padding-top: 75px;
  color:rgb(109, 216, 219)
  `
  const Content = styled.p`
//   margin-right: 50%;
  width:60%;
  font-size:20px;
  text-align: justify;
  `
  
  const Tech = styled.p`
  font-size:20px;
  `
  const Interest = styled.p`
  width:35%;
  font-size:20px;
  padding-top: 2%;
  `
    const tech_stack = [
      "Javascript",
      "React.js",
      "Node.js",
      "Express.js",
      "Python",
      "HTML/CSS",
      "JSON",
      "MongoDB/Mongoose",
      "C#",
      "MSSQL",
      "SQLITE",
      "Windows Forms",
    ];


export default About;
