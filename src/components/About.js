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
import { SiFirebase } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa"
import { SiTypescript } from "react-icons/si"
import { RiGithubFill } from "react-icons/ri"

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

                    <Tech>Here are some technologies/tool that I know how to use:</Tech>


                    <Fade bottom>
                        
                        <div className="about-content">
                            <div className="about-description">

                            <ul className="tech-stack">

                                <IoLogoJavascript className="js" style={{ height: "50px", width: "50px", borderRadius: "5px", transition: "background-color 0.9s ease" }} />
                                {/* backgroundColor: "#063970" */}
                                <FaReact className="react" style={{height: "50px", width: "50px", borderRadius: "5px", transition: "background-color 0.9s ease"}} />
                                <IoLogoNodejs className="node" style={{height: "50px", width: "50px", borderRadius: "5px", display: "inline-block", transition: "background-color 0.9s ease"}} />
                                <FaPython className="python" style={{height: "50px", width: "50px", borderRadius: "5px", display: "inline-block", transition: "background-color 0.9s ease"}} />
                                <AiOutlineHtml5 className="html" style={{height: "50px", width: "50px", borderRadius: "5px", display: "inline-block", transition: "background-color 0.9s ease"}} />
                                <FaCss3Alt className="css" style={{height: "50px", width: "50px", borderRadius: "5px", display: "inline-block", transition: "background-color 0.9s ease"}} />
                                <VscJson className="json" style={{height: "50px", width: "50px", borderRadius: "5px", display: "inline-block", transition: "background-color 0.9s ease"}} />
                                <SiMongodb className="mongo" style={{height: "50px", width: "50px", borderRadius: "5px", display: "inline-block", transition: "background-color 0.9s ease"}} />
                                <SiCsharp className="csharp" style={{height: "50px", width: "50px", borderRadius: "5px", display: "inline-block", transition: "background-color 0.9s ease", transition: "color 0.9s ease"}}/>
                                <SiMicrosoftsqlserver className="sqlserver" style={{height: "50px", borderRadius: "5px", width: "50px", display: "inline-block", transition: "background-color 0.9s ease"}}/>
                                <SiMysql className="mysql" style={{height: "50px", width: "50px", borderRadius: "5px", display: "inline-block", transition: "background-color 0.9s ease"}}/>
                                <FaPhp className="php" style={{height: "50px", width: "50px", borderRadius: "5px", display: "inline-block", transition: "background-color 0.9s ease"}} />
                                <SiFirebase className="firebase" style={{height: "50px", width: "50px", borderRadius: "5px", display: "inline-block", transition: "background-color 0.9s ease"}} />
                                <FaGitAlt className="git" style={{height: "50px", width: "50px", borderRadius: "5px", display: "inline-block", transition: "background-color 0.9s ease"}} />
                                <RiGithubFill className="githubb" style={{height: "50px", width: "50px", borderRadius: "5px", display: "inline-block", transition: "background-color 0.9s ease"}}/>
                                <SiTypescript className="typescript" style={{height: "50px", width: "50px", borderRadius: "5px", display: "inline-block", transition: "background-color 0.9s ease"}}/>

                                {/* FaGitAlt */}
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
  
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  
  `
  
  const Tech = styled.p`
  font-size:20px;
  `
  const Interest = styled.p`
  width:35%;
  font-size:20px;
  padding-top: 2%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

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
