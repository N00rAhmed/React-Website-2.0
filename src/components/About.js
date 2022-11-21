import React from "react";
import "../styles/About.css";
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
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
                    
                    <Content>I have graduated from a coding bootcamp in full-stack web development.
                    Also I have competed in a hackathon which I got 3rd place in and I also work on my own personal 
                    projects that you can find on my github. Currently I'm a software engineer intern, working on both client and server side using React.js, Node.js, Express.js and MSSQL.</Content>
                    
                    <Tech>Here are some technologies that I know how to use:</Tech>

                    
                    <Fade bottom>
                        
                        <div className="about-content">
                            <div className="about-description">

                            <ul className="tech-stack">
                                {tech_stack.map(function (tech_item, i) {
                        return (
                        <li>{tech_item}</li>
                        );
                        })}
                            </ul>
                        </div>
                        </div>

                    </Fade>

                    <Interest>Other than this my hobbies include 3D animation and graphic design.</Interest>
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
  padding-top: 4%;
  `
    const tech_stack = [
      "Javascript",
      "React.js",
      "Python",
      "HTML/CSS",
      "JSON",
      "MongoDB/Mongoose",
      "C#",
      "MSSQL"
    ];


export default About;
