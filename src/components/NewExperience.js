import React from "react";
import styled from 'styled-components'

import Tabs from "../components/Tabs";
import "../styles/tabs.css";

function NewExperience() {
  return (
    <Container>
    <div id="experience">
      <h1>Experience</h1>
      <Border>

      <Tabs>


      <div className="tab-list-item" label="Sheffield Hallam University">
        <div className="tab-content">
            <div className="tab-content-item">
            <h4>Teaching Assistant <br/>  Oct 2024 - Present</h4>
            <li>helped computer science/software engineering university students in their work</li>
            {/* <li>Achieved 50% reduction in React code size by optimizing data storage with unique IDs in MSSQL Table and implementing streamlined Node.js API query for efficient data retrieval and integration in React.js via GET requests</li> */}
            {/* <li>Created MSSQL database and imported data from excel spreadsheet into database and queried data</li> */}
            {/* <li>Integrated API with MSSQL database using node.js, express.js for routing and used GET requests and query method to access data from DataBase</li> */}
        </div>
        </div>
        </div>



      <div className="tab-list-item" label="Lernr AI">
        <div className="tab-content">
            <div className="tab-content-item">
            <h4>Frontend Developer <br/>  July 2024 - Present</h4>
            <li>Developed a responsive Next.js web application</li>
            {/* <li>Achieved 50% reduction in React code size by optimizing data storage with unique IDs in MSSQL Table and implementing streamlined Node.js API query for efficient data retrieval and integration in React.js via GET requests</li> */}
            {/* <li>Created MSSQL database and imported data from excel spreadsheet into database and queried data</li> */}
            {/* <li>Integrated API with MSSQL database using node.js, express.js for routing and used GET requests and query method to access data from DataBase</li> */}
        </div>
        </div>
        </div>



        <div className="tab-list-item" label="Flytag Flight Support">
        <div className="tab-content">
            <div className="tab-content-item">
            <h4>Software Engineer Intern <br/>  July 2022 - Oct 2023</h4>
            <li>Developed a responsive React web application from scratch on both client and server side</li>
            <li>Achieved 50% reduction in React code size by optimizing data storage with unique IDs in MSSQL Table and implementing streamlined Node.js API query for efficient data retrieval and integration in React.js via GET requests</li>
            <li>Created MSSQL database and imported data from excel spreadsheet into database and queried data</li>
            <li>Integrated API with MSSQL database using node.js, express.js for routing and used GET requests and query method to access data from DataBase</li>


        </div>
        </div>
        </div>


        <div className="tab-list-item" label="Suhbah Collective">
        <div className="tab-content">
        <div className="tab-content-item">
            <h4>Full-Stack Developer <br/>  May 2023 - July 2023</h4>
            <li>Made CRUD API using Node.js, Express.js and MongoDB/Mongoose</li>
            <li>Used GET, POST, PUT and DELETE requests to manipulate data</li>
            <li>Designed UI using React.js and fetched data from API here</li>
            <li>Created user authentication for admin using json web tokens</li>
            <li>Added functionaluty such as adding announcements, add businesses and delete businesses etc.</li>
        </div>
        </div>
        </div>

        
        <div className="tab-list-item" label="Opengenus">
        <div className="tab-content">
        <div className="tab-content-item">
            <h4>Software Developer Intern <br/>  May 2023 - July 2023</h4>
            <li>Authored 10 highly-viewed blog articles on diverse topics, reaching a wide audience of thousands on the OpenGenus IQ platform: https://iq.opengenus.org/author/noor/</li>
            <li>Designed and implemented a Python language translation program by making API calls to Google Translate API</li>
            <li>Developed a Python, Flask, and HTML-based prime number generator which accepts user input</li>
            <li>Made substantial contributions to OpenGenus IQ, including articles covering essential algorithmic topics, such as using adjacency lists and matrices in Python</li>
        </div>
        </div>
        </div>

      </Tabs>
      </Border>

    </div>
    </Container>

  );
}


const Container = styled.div`
flex-direction: column;
align-items: flex-start;
padding-left: 15%;
`
const Border = styled.div`
// border: 1px solid black;
// border-radius: 30px;
// height:350px;
// width: 80%;
// padding-top:40px;

`

export default NewExperience;