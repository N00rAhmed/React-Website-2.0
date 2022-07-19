import React from "react";
import "../styles/About.css";
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import pikachu from './pikachu.gif';
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
                    
                    <Content>I have graduated from a coding bootcamp which was focused in full-stack web development. Also I am working on my own personal 
                    project which is a Disney+ Clone. My plan for the future is to go in to either front-end or full-stack development.</Content>
                    
                    {/* <img src={pikachu} alt='a' /> */}

                    
                    <Tech>Here are some technologies that I have been working with:</Tech>

                    
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
  min-height: 100vh;
  `
  const AboutMe = styled.h2`
  display: flex;
  justify-content: left;
  align-items: left;
  flex-direction: column;
  font-size: 40px;
  padding-top: 40px;
  color:rgb(109, 216, 219)
  `
  const Content = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  // max-width: 35%;
  max-width: 50%;
  font-size:20px;
  text-align: justify;
  `

  const Gif = styled.div`
  display: flex;
  justify-content: left;
  text-align: justify;
  `
  
  const Tech = styled.p`
  display: flex;
  justify-content: left;
  text-align: justify;
  flex-direction: column;
  font-size:20px;
  max-width:35%;
  `
  const Interest = styled.p`
  display: flex;
  justify-content: left;
  text-align: justify;
  flex-direction: column;
  max-width:35%;
  font-size:20px;
  padding-top: 4%;
  `
    const tech_stack = [
      "Javascript",
      "React.js",
      "Python",
      "HTML/CSS",
      "JSON",
      "MongoDB/Mongoose"
    ];


export default About;
